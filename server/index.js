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
  const { questionCount = 15, timeLimit = 10 } = req.body;
  const count = Math.min(Math.max(parseInt(questionCount) || 15, 5), 50);
  const tl = Math.min(Math.max(parseInt(timeLimit) || 10, 5), 120);
  const session = createSession(count, tl);
  if (!session) {
    return res.status(503).json({ error: 'Impossible de créer une session pour l\'instant, veuillez réessayer.' });
  }
  res.json({ code: session.code, questionCount: session.questions.length });
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
      players: getPlayerList(session),
      questionCount: session.questions.length,
      currentQuestionIndex: session.currentQuestionIndex
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
        pseudo_taken: 'Ce pseudo est déjà utilisé, veuillez en choisir un autre.'
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
    if (session.players.size === 0) {
      socket.emit('error', { message: 'Aucun joueur connecté.' });
      return;
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
      // Forcer la clôture de la question en cours
      clearTimeout(session.timerRef);
      closeQuestion(session);
    } else if (session.state === 'leaderboard') {
      const nextIndex = session.currentQuestionIndex + 1;
      if (nextIndex >= session.questions.length) {
        endSession(session);
      } else {
        broadcastQuestion(session, nextIndex);
      }
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

  // ── Déconnexion ──────────────────────────────────────────────────────────
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
 * Diffuse une question à tous les clients de la session.
 */
function broadcastQuestion(session, index) {
  session.currentQuestionIndex = index;
  session.state = 'active';
  session.questionStartTime = Date.now();
  resetAnswers(session);

  const question = session.questions[index];
  const isLast = index === session.questions.length - 1;

  const payload = {
    questionIndex: index,
    total: session.questions.length,
    question: question.question,
    choices: question.choices,
    timeLimit: question.timeLimit,
    domain: question.domain,
    startedAt: session.questionStartTime,
    isLast
  };

  io.to(`session:${session.code}`).emit('question:start', payload);
  // Le modérateur reçoit aussi l'index de la bonne réponse pour affichage
  io.to(`host:${session.code}`).emit('question:start', { ...payload, correctIndex: question.answer });

  // Timer côté serveur
  let remaining = question.timeLimit;
  const tickInterval = setInterval(() => {
    remaining--;
    io.to(`session:${session.code}`).emit('timer:tick', { remaining });
    if (remaining <= 0) {
      clearInterval(tickInterval);
    }
  }, 1000);

  session.timerRef = setTimeout(() => {
    clearInterval(tickInterval);
    closeQuestion(session);
  }, question.timeLimit * 1000);

  // Stocker tickInterval pour pouvoir l'annuler si on passe en force à la question suivante
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
  const isLast = session.currentQuestionIndex === session.questions.length - 1;

  // Payload commun : question + bonne réponse + classement
  const questionReveal = {
    questionText: question.question,
    choices: question.choices,
    correctIndex: question.answer,
    correctText: question.choices[question.answer]
  };

  // Envoyer aux joueurs
  const playersMap = session.players;
  for (const [, player] of playersMap.entries()) {
    const socketId = player.socketId;
    if (socketId) {
      const playerSocket = io.sockets.sockets.get(socketId);
      if (playerSocket) {
        playerSocket.emit('question:result', {
          ...questionReveal,
          pointsEarned: player.lastPoints || 0,
          yourScore: player.score,
          leaderboard,
          isLast
        });
      }
    }
  }

  // Modérateur : classement complet — sans surbrillance de la bonne réponse
  io.to(`host:${session.code}`).emit('question:result', {
    questionText: question.question,
    choices: question.choices,
    // correctIndex NON envoyé au modérateur pour ne pas le mettre en évidence
    leaderboard,
    isLast,
    answeredCount: countAnswered(session),
    totalPlayers: session.players.size
  });
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
  io.to(`session:${session.code}`).emit('session:end', { leaderboard });
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
    score: player.score
  };

  if (session.state === 'active') {
    const question = session.questions[session.currentQuestionIndex];
    const elapsed = Math.floor((Date.now() - session.questionStartTime) / 1000);
    const remaining = Math.max(0, question.timeLimit - elapsed);
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
      isLast: session.currentQuestionIndex === session.questions.length - 1
    };
  }

  if (session.state === 'leaderboard' || session.state === 'finished') {
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
    questionCount: session.questions.length
  };
}

server.listen(PORT, () => {
  console.log(`\n🚀 AWS Quiz Live démarré sur http://localhost:${PORT}`);
  console.log(`   → Modérateur : http://localhost:${PORT}/host.html`);
  console.log(`   → Joueurs    : http://localhost:${PORT}/\n`);
});
