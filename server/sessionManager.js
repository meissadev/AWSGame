/**
 * Gestionnaire de sessions en mémoire.
 * Stocke toutes les sessions actives et gère leur cycle de vie.
 */

const { generateQuiz } = require('./questions');

// Map<code, Session>
const sessions = new Map();

// Nettoyage périodique toutes les minutes
setInterval(() => {
  const now = Date.now();
  for (const [code, session] of sessions.entries()) {
    const idleMs = now - session.lastActivity;
    const isFinished = session.state === 'finished';
    const isIdle = idleMs > 60 * 60 * 1000; // 60 minutes

    if (isFinished && idleMs > 10 * 60 * 1000) {
      // Sessions terminées : conserver 10 min pour reconnexions tardives
      sessions.delete(code);
    } else if (!isFinished && isIdle) {
      // Sessions actives inactives depuis 60 min
      session.state = 'finished';
      session.lastActivity = now;
    }
  }
}, 60 * 1000);

/**
 * Génère un code d'accès unique de 6 caractères [A-Z0-9]
 */
function generateCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // sans O/0/I/1 pour éviter confusion
  let code;
  let attempts = 0;
  do {
    code = Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    attempts++;
    if (attempts > 10) return null; // échec après 10 tentatives
  } while (sessions.has(code));
  return code;
}

/**
 * Crée une nouvelle session.
 * @param {number} questionCount - Nombre de questions à générer
 * @param {number} timeLimit - Temps limite par question en secondes
 * @param {string} mode - 'classic' | 'faceoff' | 'tournament'
 * @param {object} tournamentConfig - { phases: number, questionsPerPhase: number } (mode tournament)
 */
function createSession(questionCount = 15, timeLimit = 10, mode = 'classic', tournamentConfig = null) {
  const code = generateCode();
  if (!code) return null;

  // En mode tournoi, on génère assez de questions pour toutes les phases
  const totalQuestions = mode === 'tournament' && tournamentConfig
    ? tournamentConfig.phases * tournamentConfig.questionsPerPhase
    : questionCount;

  const questions = generateQuiz(Math.min(totalQuestions, 50), timeLimit);

  const session = {
    code,
    mode,                   // 'classic' | 'faceoff' | 'tournament'
    state: 'waiting',       // waiting | active | leaderboard | phase_end | finished
    questions,
    currentQuestionIndex: -1,
    players: new Map(),     // Map<pseudo_lower, PlayerState>
    timerRef: null,
    questionStartTime: null,
    lastActivity: Date.now(),
    history: [],
    // Tournoi
    tournament: mode === 'tournament' ? {
      phases: tournamentConfig?.phases || 3,
      questionsPerPhase: tournamentConfig?.questionsPerPhase || 5,
      currentPhase: 1,
      eliminatedPlayers: [],    // pseudos éliminés
      activePlayers: new Set()  // pseudos encore en jeu (rempli au démarrage)
    } : null
  };

  sessions.set(code, session);
  return session;
}

/**
 * Récupère une session par son code.
 */
function getSession(code) {
  return sessions.get(code.toUpperCase()) || null;
}

/**
 * Ajoute ou réactive un joueur dans une session.
 * @returns {{ success: boolean, error?: string, player?: object, isReconnect?: boolean }}
 */
function joinSession(code, pseudo) {
  const session = getSession(code);
  if (!session) return { success: false, error: 'session_not_found' };
  if (session.state === 'finished') return { success: false, error: 'session_finished' };
  if (session.state === 'active' || session.state === 'leaderboard' || session.state === 'phase_end') {
    const existing = session.players.get(pseudo.toLowerCase());
    if (existing) {
      existing.connected = true;
      existing.socketId = null;
      session.lastActivity = Date.now();
      return { success: true, player: existing, isReconnect: true };
    }
    return { success: false, error: 'session_started' };
  }

  // Salle d'attente
  const pseudoLower = pseudo.toLowerCase();
  const existing = session.players.get(pseudoLower);
  if (existing && existing.connected) return { success: false, error: 'pseudo_taken' };
  if (existing && !existing.connected) {
    existing.connected = true;
    existing.socketId = null;
    return { success: true, player: existing, isReconnect: true };
  }

  // Limite pour le mode face-à-face
  if (session.mode === 'faceoff') {
    const connected = Array.from(session.players.values()).filter(p => p.connected).length;
    if (connected >= 2) return { success: false, error: 'faceoff_full' };
  }

  const player = {
    pseudo,
    pseudoLower,
    score: 0,
    rank: 0,
    connected: true,
    socketId: null,
    answeredCurrentQuestion: false,
    lastAnswerTime: null,
    lastResponseTimeMs: null,
    disconnectedAt: null,
    eliminated: false
  };
  session.players.set(pseudoLower, player);
  session.lastActivity = Date.now();
  return { success: true, player, isReconnect: false };
}

/**
 * Retourne la liste des joueurs triée par ordre d'arrivée (pour la salle d'attente).
 */
function getPlayerList(session) {
  return Array.from(session.players.values()).map(p => ({
    pseudo: p.pseudo,
    connected: p.connected
  }));
}

/**
 * Calcule et retourne le classement trié.
 * @param {boolean} activeOnly - Si true, n'inclut que les joueurs non éliminés
 */
function getLeaderboard(session, activeOnly = false) {
  let allPlayers = Array.from(session.players.values());
  if (activeOnly && session.tournament) {
    allPlayers = allPlayers.filter(p => !p.eliminated);
  }
  const players = allPlayers
    .map(p => ({
      pseudo: p.pseudo,
      score: p.score,
      eliminated: p.eliminated || false,
      responseTimeMs: p.answeredCurrentQuestion ? (p.lastResponseTimeMs ?? null) : null
    }))
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.pseudo.localeCompare(b.pseudo);
    });

  let rank = 1;
  players.forEach((p, i) => {
    if (i > 0 && players[i - 1].score === p.score) {
      p.rank = players[i - 1].rank;
    } else {
      p.rank = rank;
    }
    rank = i + 2;
  });

  return players;
}

/**
 * Pour le mode tournoi : calcule combien de joueurs éliminer à la fin d'une phase.
 * Retourne la liste des pseudos éliminés.
 */
function eliminateForTournament(session) {
  const t = session.tournament;
  if (!t) return [];

  const activePlayers = Array.from(session.players.values()).filter(p => !p.eliminated && p.connected);
  const totalActive = activePlayers.length;

  // Nombre à éliminer : on garde 2 pour la finale, sinon on divise par 2 environ
  const phasesLeft = t.phases - t.currentPhase;
  let toKeep;
  if (phasesLeft <= 0) {
    // Dernière phase : garder seulement le vainqueur
    toKeep = 1;
  } else {
    // Garder la moitié (arrondi supérieur), minimum 2
    toKeep = Math.max(2, Math.ceil(totalActive / 2));
  }

  const toEliminate = Math.max(0, totalActive - toKeep);
  if (toEliminate === 0) return [];

  // Trier par score croissant (les moins bons sont éliminés)
  const sorted = [...activePlayers].sort((a, b) => {
    if (a.score !== b.score) return a.score - b.score;
    return b.pseudo.localeCompare(a.pseudo);
  });

  const eliminated = sorted.slice(0, toEliminate);
  eliminated.forEach(p => { p.eliminated = true; });
  t.eliminatedPlayers.push(...eliminated.map(p => p.pseudo));

  return eliminated.map(p => ({ pseudo: p.pseudo, score: p.score }));
}

/**
 * Calcule le score pour une réponse correcte (dégression linéaire 500–1000).
 * @param {number} delayMs - Délai en millisecondes
 * @param {number} timeLimitSec - Temps limite en secondes
 */
function computeScore(delayMs, timeLimitSec) {
  const delaySec = delayMs / 1000;
  if (delaySec <= 0) return 1000;
  if (delaySec >= timeLimitSec) return 500;
  return Math.round(500 + 500 * (1 - delaySec / timeLimitSec));
}

/**
 * Enregistre la réponse d'un joueur.
 * @returns {{ success: boolean, error?: string }}
 */
function submitAnswer(code, pseudo, choiceIndex, receivedAt) {
  const session = getSession(code);
  if (!session || session.state !== 'active') return { success: false, error: 'invalid_state' };

  const player = session.players.get(pseudo.toLowerCase());
  if (!player) return { success: false, error: 'player_not_found' };
  if (player.answeredCurrentQuestion) return { success: false, error: 'already_answered' };

  const question = session.questions[session.currentQuestionIndex];
  const deadline = session.questionStartTime + question.timeLimit * 1000;
  if (receivedAt > deadline) return { success: false, error: 'too_late' };

  player.answeredCurrentQuestion = true;
  player.lastAnswerTime = receivedAt;
  player.lastChoiceIndex = choiceIndex;

  const delay = receivedAt - session.questionStartTime;
  player.lastResponseTimeMs = delay; // délai réel de réponse en ms

  const isCorrect = choiceIndex === question.answer;
  if (isCorrect) {
    const points = computeScore(delay, question.timeLimit);
    player.score += points;
    player.lastPoints = points;
  } else {
    player.lastPoints = 0;
  }

  session.lastActivity = Date.now();
  return { success: true };
}

/**
 * Vérifie si tous les joueurs ACTIFS (non éliminés) connectés ont répondu.
 */
function allPlayersAnswered(session) {
  for (const player of session.players.values()) {
    if (player.connected && !player.eliminated && !player.answeredCurrentQuestion) return false;
  }
  return true;
}

/**
 * Réinitialise les réponses des joueurs pour la prochaine question.
 */
function resetAnswers(session) {
  for (const player of session.players.values()) {
    player.answeredCurrentQuestion = false;
    player.lastAnswerTime = null;
    player.lastChoiceIndex = undefined;
    player.lastPoints = 0;
    player.lastResponseTimeMs = null;
  }
}

/**
 * Marque un joueur comme déconnecté.
 */
function disconnectPlayer(code, pseudo) {
  const session = getSession(code);
  if (!session) return;
  const player = session.players.get(pseudo.toLowerCase());
  if (player) {
    player.connected = false;
    player.disconnectedAt = Date.now();
    player.socketId = null;
  }
}

module.exports = {
  createSession,
  getSession,
  joinSession,
  getPlayerList,
  getLeaderboard,
  eliminateForTournament,
  submitAnswer,
  allPlayersAnswered,
  resetAnswers,
  disconnectPlayer
};
