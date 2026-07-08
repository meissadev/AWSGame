const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const {
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
} = require('./sessionManager');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' },
  pingTimeout: 60000,
  pingInterval: 25000
});

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'client')));

const PORT = process.env.PORT || 3000;

// ─── REST : Créer une session ─────────────────────────────────────────────
app.post('/api/sessions', (req, res) => {
  const { questionCount = 15, timeLimit = 10, mode = 'classic', tournamentConfig = null } = req.body;
  const count = Math.min(Math.max(parseInt(questionCount) || 15, 5), 50);
  const tl = Math.min(Math.max(parseInt(timeLimit) || 10, 5), 120);
  const validMode = ['classic', 'faceoff', 'tournament'].includes(mode) ? mode : 'classic';

  let tConfig = null;
  if (validMode === 'tournament' && tournamentConfig) {
    tConfig = {
      phases: Math.min(Math.max(parseInt(tournamentConfig.phases) || 3, 2), 5),
      questionsPerPhase: Math.min(Math.max(parseInt(tournamentConfig.questionsPerPhase) || 5, 3), 20)
    };
  }

  const session = createSession(count, tl, validMode, tConfig);
  if (!session) {
    return res.status(503).json({ error: 'Impossible de créer une session pour l\'instant, veuillez réessayer.' });
  }
  res.json({
    code: session.code,
    mode: session.mode,
    questionCount: session.questions.length,
    tournament: session.tournament
  });
});

// ─── REST : Infos d'une session (pour reconnexion) ───────────────────────
app.get('/api/sessions/:code', (req, res) => {
  const session = getSession(req.params.code);
  if (!session) return res.status(404).json({ error: 'session_not_found' });
  res.json({ code: session.code, state: session.state, playerCount: session.players.size });
});

// ─── WebSocket ────────────────────────────────────────────────────────────
io.on('connection', (socket) => {

  // Données de la connexion courante
  let currentCode = null;
  let currentPseudo = null;
  let isHost = false;

  // ── Rejoindre comme modérateur ──────────────────────────────────────────
  socket.on('host:join', ({ code }) => {
    const session = getSession(code);
    if (!session) {
      socket.emit('error', { message: 'Session introuvable.' });
      return;
    }
    currentCode = code;
    isHost = true;
    socket.join(`session:${code}`);
    socket.join(`host:${code}`);

    // Envoyer l'état actuel au modérateur
    socket.emit('host:state', {
      code: session.code,
      state: session.state,
      mode: session.mode,
      players: getPlayerList(session),
      questionCount: session.questions.length,
      currentQuestionIndex: session.currentQuestionIndex,
      tournament: session.tournament
        ? {
            phases: session.tournament.phases,
            questionsPerPhase: session.tournament.questionsPerPhase,
            currentPhase: session.tournament.currentPhase
          }
        : null
    });
  });

  // ── Rejoindre comme joueur ──────────────────────────────────────────────
  socket.on('player:join', ({ code, pseudo }) => {
    if (!code || !pseudo || pseudo.trim().length === 0 || pseudo.trim().length > 20) {
      socket.emit('error', { message: 'Pseudo invalide (1 à 20 caractères).' });
      return;
    }

    const result = joinSession(code, pseudo.trim());

    if (!result.success) {
      const messages = {
        session_not_found: 'Code de session introuvable ou session terminée.',
        session_finished: 'Cette session est terminée.',
        session_started: 'La session a déjà démarré.',
        pseudo_taken: 'Ce pseudo est déjà utilisé, veuillez en choisir un autre.',
        faceoff_full: 'Ce duel est complet (2 joueurs maximum).'
      };
      socket.emit('error', { message: messages[result.error] || 'Erreur inconnue.' });
      return;
    }

    currentCode = code;
    currentPseudo = result.player.pseudo;
    isHost = false;

    // Associer le socket au joueur
    const session = getSession(code);
    result.player.socketId = socket.id;

    socket.join(`session:${code}`);

    // Notifier le joueur de son état
    const statePayload = buildPlayerStatePayload(session, result.player);
    socket.emit('player:joined', { ...statePayload, isReconnect: result.isReconnect });

    // Notifier le modérateur de la nouvelle liste
    io.to(`host:${code}`).emit('host:players_updated', {
      players: getPlayerList(session)
    });

    // Notifier tous les joueurs en salle d'attente de la mise à jour
    if (session.state === 'waiting') {
      io.to(`session:${code}`).emit('session:players_updated', {
        players: getPlayerList(session)
      });
    }
  });

  // ── Démarrer la session (modérateur) ────────────────────────────────────
  socket.on('host:start', () => {
    if (!isHost || !currentCode) return;
    const session = getSession(currentCode);
    if (!session || session.state !== 'waiting') return;
    if (session.questions.length === 0) {
      socket.emit('error', { message: 'Aucune question disponible.' });
      return;
    }
    const connectedCount = Array.from(session.players.values()).filter(p => p.connected).length;
    if (connectedCount === 0) {
      socket.emit('error', { message: 'Aucun joueur connecté.' });
      return;
    }
    if (session.mode === 'faceoff' && connectedCount !== 2) {
      socket.emit('error', { message: 'Le mode Duel nécessite exactement 2 joueurs.' });
      return;
    }
    if (session.mode === 'tournament' && connectedCount < 3) {
      socket.emit('error', { message: 'Le mode Tournoi nécessite au moins 3 joueurs.' });
      return;
    }

    // Initialiser les joueurs actifs du tournoi
    if (session.tournament) {
      session.tournament.activePlayers = new Set(
        Array.from(session.players.keys())
      );
    }

    session.state = 'active';
    broadcastQuestion(session, 0);
  });

  // ── Question suivante (modérateur) ──────────────────────────────────────
  socket.on('host:next_question', () => {
    if (!isHost || !currentCode) return;
    const session = getSession(currentCode);
    if (!session) return;

    if (session.state === 'active') {
      clearTimeout(session.timerRef);
      closeQuestion(session);
    } else if (session.state === 'leaderboard') {
      const nextIndex = session.currentQuestionIndex + 1;
      if (session.mode === 'tournament') {
        const t = session.tournament;
        const phaseStart = (t.currentPhase - 1) * t.questionsPerPhase;
        const phaseEnd = phaseStart + t.questionsPerPhase;
        if (session.currentQuestionIndex + 1 >= phaseEnd) {
          // Fin de phase → éliminer
          endPhase(session);
        } else if (nextIndex >= session.questions.length) {
          endSession(session);
        } else {
          broadcastQuestion(session, nextIndex);
        }
      } else {
        if (nextIndex >= session.questions.length) {
          endSession(session);
        } else {
          broadcastQuestion(session, nextIndex);
        }
      }
    } else if (session.state === 'phase_end') {
      // Démarrer la prochaine phase
      startNextPhase(session);
    }
  });

  // ── Terminer la session (modérateur) ────────────────────────────────────
  socket.on('host:end_session', () => {
    if (!isHost || !currentCode) return;
    const session = getSession(currentCode);
    if (!session) return;
    if (session.timerRef) clearTimeout(session.timerRef);
    endSession(session);
  });

  // ── Réponse d'un joueur ─────────────────────────────────────────────────
  socket.on('player:answer', ({ choiceIndex }) => {
    if (!currentCode || !currentPseudo || isHost) return;
    const session = getSession(currentCode);
    if (!session || session.state !== 'active') return;

    const receivedAt = Date.now();
    const result = submitAnswer(currentCode, currentPseudo, choiceIndex, receivedAt);

    if (result.success) {
      // Confirmer la réception au joueur
      socket.emit('player:answer_confirmed', { choiceIndex });

      // Notifier le modérateur du nombre de réponses reçues
      const answered = countAnswered(session);
      io.to(`host:${currentCode}`).emit('host:answer_received', {
        pseudo: currentPseudo,
        answered,
        total: session.players.size
      });

      // Si tous les joueurs ont répondu, clore la question
      if (allPlayersAnswered(session)) {
        clearTimeout(session.timerRef);
        closeQuestion(session);
      }
    }
  });

  // ── Abandon joueur ──────────────────────────────────────────────────────
  socket.on('player:quit', () => {
    if (!currentCode || !currentPseudo || isHost) return;
    const session = getSession(currentCode);
    if (!session) return;

    // Retirer définitivement le joueur de la session
    const player = session.players.get(currentPseudo.toLowerCase());
    if (player) {
      player.connected = false;
      player.eliminated = true;
      player.socketId = null;
    }

    // Notifier le modérateur
    io.to(`host:${currentCode}`).emit('host:players_updated', {
      players: getPlayerList(session)
    });

    // En salle d'attente, notifier les autres joueurs
    if (session.state === 'waiting') {
      io.to(`session:${currentCode}`).emit('session:players_updated', {
        players: getPlayerList(session)
      });
    }

    // Si tous les actifs ont répondu suite à cet abandon
    if (session.state === 'active' && allPlayersAnswered(session)) {
      clearTimeout(session.timerRef);
      closeQuestion(session);
    }

    // Déconnecter ce socket de la room
    socket.leave(`session:${currentCode}`);
    currentCode = null;
    currentPseudo = null;

    socket.emit('player:quit_confirmed');
  });
  socket.on('disconnect', () => {
    if (!currentCode) return;

    if (!isHost && currentPseudo) {
      disconnectPlayer(currentCode, currentPseudo);
      const session = getSession(currentCode);
      if (session) {
        // Notifier le modérateur
        io.to(`host:${currentCode}`).emit('host:players_updated', {
          players: getPlayerList(session)
        });
        // En salle d'attente, notifier tous les joueurs
        if (session.state === 'waiting') {
          io.to(`session:${currentCode}`).emit('session:players_updated', {
            players: getPlayerList(session)
          });
        }
        // Si tous ont répondu suite à une déconnexion
        if (session.state === 'active' && allPlayersAnswered(session)) {
          clearTimeout(session.timerRef);
          closeQuestion(session);
        }
      }
    }
  });
});

// ─── Helpers ──────────────────────────────────────────────────────────────

/**
 * Envoie un événement uniquement aux joueurs NON éliminés et connectés.
 */
function emitToActivePlayers(session, event, payload) {
  for (const player of session.players.values()) {
    if (!player.eliminated && player.connected && player.socketId) {
      const s = io.sockets.sockets.get(player.socketId);
      if (s) s.emit(event, payload);
    }
  }
}

/**
 * Diffuse une question à tous les clients actifs de la session.
 */
function broadcastQuestion(session, index) {
  session.currentQuestionIndex = index;
  session.state = 'active';
  session.questionStartTime = Date.now();
  resetAnswers(session);

  const question = session.questions[index];
  const t = session.tournament;
  const isLastOfPhase = t
    ? (index + 1) >= (t.currentPhase * t.questionsPerPhase)
    : false;
  const isLast = !t && (index === session.questions.length - 1);

  const payload = {
    questionIndex: index,
    total: session.questions.length,
    question: question.question,
    choices: question.choices,
    timeLimit: question.timeLimit,
    domain: question.domain,
    startedAt: session.questionStartTime,
    isLast: isLast || isLastOfPhase,
    tournamentPhase: t ? t.currentPhase : null
  };

  // N'envoyer qu'aux joueurs actifs (non éliminés)
  emitToActivePlayers(session, 'question:start', payload);
  // Le modérateur reçoit aussi l'index de la bonne réponse
  io.to(`host:${session.code}`).emit('question:start', { ...payload, correctIndex: question.answer });

  // Timer côté serveur — uniquement aux joueurs actifs + modérateur
  let remaining = question.timeLimit;
  const tickInterval = setInterval(() => {
    remaining--;
    emitToActivePlayers(session, 'timer:tick', { remaining });
    io.to(`host:${session.code}`).emit('timer:tick', { remaining });
    if (remaining <= 0) clearInterval(tickInterval);
  }, 1000);

  session.timerRef = setTimeout(() => {
    clearInterval(tickInterval);
    closeQuestion(session);
  }, question.timeLimit * 1000);

  session.tickIntervalRef = tickInterval;
}

/**
 * Clôture la question en cours et envoie le classement.
 */
function closeQuestion(session) {
  if (session.tickIntervalRef) {
    clearInterval(session.tickIntervalRef);
    session.tickIntervalRef = null;
  }
  session.state = 'leaderboard';

  const question = session.questions[session.currentQuestionIndex];
  const leaderboard = getLeaderboard(session);
  const t = session.tournament;
  const isLastOfPhase = t
    ? (session.currentQuestionIndex + 1) >= (t.currentPhase * t.questionsPerPhase)
    : false;
  const isLast = !t && (session.currentQuestionIndex === session.questions.length - 1);

  if (!session.history) session.history = [];
  session.history.push({
    number: session.currentQuestionIndex + 1,
    questionText: question.question,
    choices: question.choices,
    correctIndex: question.answer,
    correctText: question.choices[question.answer],
    domain: question.domain
  });

  const questionReveal = {
    questionText: question.question,
    choices: question.choices,
    correctIndex: question.answer,
    correctText: question.choices[question.answer]
  };

  // Construire les scores adverses pour le mode face-à-face
  const playersArr = Array.from(session.players.values());

  for (const [, player] of session.players.entries()) {
    const socketId = player.socketId;
    if (!socketId) continue;
    const playerSocket = io.sockets.sockets.get(socketId);
    if (!playerSocket) continue;

    const payload = {
      ...questionReveal,
      pointsEarned: player.lastPoints || 0,
      yourScore: player.score,
      leaderboard,
      isLast: isLast || isLastOfPhase
    };

    // Mode face-à-face : ajouter le score de l'adversaire
    if (session.mode === 'faceoff') {
      const opponent = playersArr.find(p => p.pseudo !== player.pseudo);
      if (opponent) {
        payload.opponent = { pseudo: opponent.pseudo, score: opponent.score };
      }
    }

    playerSocket.emit('question:result', payload);
  }

  // Modérateur
  io.to(`host:${session.code}`).emit('question:result', {
    questionText: question.question,
    choices: question.choices,
    correctText: question.choices[question.answer],
    leaderboard,
    isLast: isLast || isLastOfPhase,
    isLastOfPhase,
    answeredCount: countAnswered(session),
    totalPlayers: session.players.size,
    mode: session.mode,
    tournamentPhase: t ? t.currentPhase : null,
    tournamentTotalPhases: t ? t.phases : null
  });
}

/**
 * Fin de phase tournoi : élimination + écran phase_end.
 */
function endPhase(session) {
  if (session.timerRef) clearTimeout(session.timerRef);
  if (session.tickIntervalRef) clearInterval(session.tickIntervalRef);

  const t = session.tournament;
  const eliminated = eliminateForTournament(session);
  const leaderboard = getLeaderboard(session);
  const activePlayers = leaderboard.filter(p => !p.eliminated);
  const isFinalPhase = t.currentPhase >= t.phases || activePlayers.length <= 1;

  if (isFinalPhase || activePlayers.length <= 1) {
    // Tournoi terminé
    endSession(session);
    return;
  }

  session.state = 'phase_end';
  t.currentPhase++;

  // Notifier les éliminés
  for (const elim of eliminated) {
    const player = session.players.get(elim.pseudo.toLowerCase());
    if (player?.socketId) {
      const s = io.sockets.sockets.get(player.socketId);
      if (s) s.emit('player:eliminated', { pseudo: elim.pseudo, score: elim.score, leaderboard });
    }
  }

  // Notifier les survivants et le modérateur
  io.to(`session:${session.code}`).emit('tournament:phase_end', {
    phase: t.currentPhase - 1,
    totalPhases: t.phases,
    eliminated: eliminated,
    survivors: activePlayers,
    leaderboard,
    nextPhase: t.currentPhase
  });
}

/**
 * Démarre la phase suivante du tournoi.
 */
function startNextPhase(session) {
  const t = session.tournament;
  const phaseStart = (t.currentPhase - 1) * t.questionsPerPhase;
  if (phaseStart >= session.questions.length) {
    endSession(session);
    return;
  }
  // Réinitialiser les scores pour la nouvelle phase (score repart de 0 pour la phase)
  for (const player of session.players.values()) {
    player.score = 0;
  }
  session.state = 'active';
  broadcastQuestion(session, phaseStart);
}

/**
 * Termine la session définitivement.
 */
function endSession(session) {
  if (session.timerRef) clearTimeout(session.timerRef);
  if (session.tickIntervalRef) clearInterval(session.tickIntervalRef);
  session.state = 'finished';
  session.lastActivity = Date.now();

  const leaderboard = getLeaderboard(session);
  const history = session.history || [];
  io.to(`session:${session.code}`).emit('session:end', { leaderboard, history });
}

/**
 * Compte les joueurs connectés ayant répondu.
 */
function countAnswered(session) {
  let count = 0;
  for (const player of session.players.values()) {
    if (player.answeredCurrentQuestion) count++;
  }
  return count;
}

/**
 * Construit le payload d'état pour un joueur qui (re)joint.
 */
function buildPlayerStatePayload(session, player) {
  const base = {
    pseudo: player.pseudo,
    code: session.code,
    state: session.state,
    score: player.score,
    mode: session.mode,
    eliminated: player.eliminated || false
  };

  if (session.state === 'active') {
    const question = session.questions[session.currentQuestionIndex];
    const elapsed = Math.floor((Date.now() - session.questionStartTime) / 1000);
    const remaining = Math.max(0, question.timeLimit - elapsed);
    const t = session.tournament;
    const isLastOfPhase = t
      ? (session.currentQuestionIndex + 1) >= (t.currentPhase * t.questionsPerPhase)
      : false;
    return {
      ...base,
      questionIndex: session.currentQuestionIndex,
      total: session.questions.length,
      question: question.question,
      choices: question.choices,
      timeLimit: question.timeLimit,
      domain: question.domain,
      remaining,
      alreadyAnswered: player.answeredCurrentQuestion,
      isLast: (!t && session.currentQuestionIndex === session.questions.length - 1) || isLastOfPhase,
      tournamentPhase: t ? t.currentPhase : null
    };
  }

  if (session.state === 'leaderboard' || session.state === 'phase_end' || session.state === 'finished') {
    return {
      ...base,
      leaderboard: getLeaderboard(session),
      isLast: session.currentQuestionIndex === session.questions.length - 1
    };
  }

  // waiting
  return {
    ...base,
    players: getPlayerList(session),
    questionCount: session.questions.length,
    tournament: session.tournament
      ? { phases: session.tournament.phases, questionsPerPhase: session.tournament.questionsPerPhase }
      : null
  };
}

server.listen(PORT, () => {
  console.log(`\n🚀 AWS Quiz Live démarré sur http://localhost:${PORT}`);
  console.log(`   → Modérateur : http://localhost:${PORT}/host.html`);
  console.log(`   → Joueurs    : http://localhost:${PORT}/\n`);
});
