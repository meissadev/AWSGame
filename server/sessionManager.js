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
 * @returns {object|null} La session créée, ou null si le code n'a pas pu être généré
 */
function createSession(questionCount = 15, timeLimit = 10) {
  const code = generateCode();
  if (!code) return null;

  const questions = generateQuiz(questionCount, timeLimit);

  const session = {
    code,
    state: 'waiting',       // waiting | active | leaderboard | finished
    questions,
    currentQuestionIndex: -1,
    players: new Map(),     // Map<pseudo_lower, PlayerState>
    timerRef: null,
    questionStartTime: null,
    lastActivity: Date.now()
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
  if (session.state === 'active' || session.state === 'leaderboard') {
    // Reconnexion autorisée si le joueur existait déjà
    const existing = session.players.get(pseudo.toLowerCase());
    if (existing) {
      existing.connected = true;
      existing.socketId = null; // sera mis à jour par le serveur socket
      session.lastActivity = Date.now();
      return { success: true, player: existing, isReconnect: true };
    }
    return { success: false, error: 'session_started' };
  }

  // Salle d'attente : nouveau joueur ou reconnexion
  const pseudoLower = pseudo.toLowerCase();
  const existing = session.players.get(pseudoLower);
  if (existing && existing.connected) {
    return { success: false, error: 'pseudo_taken' };
  }
  if (existing && !existing.connected) {
    // Reconnexion en salle d'attente
    existing.connected = true;
    existing.socketId = null;
    return { success: true, player: existing, isReconnect: true };
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
    disconnectedAt: null
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
 */
function getLeaderboard(session) {
  const players = Array.from(session.players.values())
    .map(p => ({
      pseudo: p.pseudo,
      score: p.score,
      // Temps de réponse pour la dernière question (null = pas répondu / déconnecté)
      responseTimeMs: p.answeredCurrentQuestion ? (p.lastResponseTimeMs ?? null) : null
    }))
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.pseudo.localeCompare(b.pseudo);
    });

  // Calcul des rangs avec gestion des ex-æquo
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
 * Vérifie si tous les joueurs connectés ont répondu.
 */
function allPlayersAnswered(session) {
  for (const player of session.players.values()) {
    if (player.connected && !player.answeredCurrentQuestion) return false;
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
  submitAnswer,
  allPlayersAnswered,
  resetAnswers,
  disconnectPlayer
};
