/* ─── État global ─────────────────────────────────────────────────────── */
const state = {
  pseudo: '',
  code: '',
  score: 0,
  currentQuestion: null,
  timeLimit: 0,
  timerInterval: null,
  answered: false,
  reconnectDelay: 1000,
  reconnectTimeout: null,
};

let socket = null;

/* ─── Helpers UI ──────────────────────────────────────────────────────── */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function show(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('hidden');
}

function hide(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('hidden');
}

/* ─── Connexion Socket ────────────────────────────────────────────────── */
function initSocket() {
  socket = io({ autoConnect: true, reconnection: false }); // on gère la reconnexion manuellement

  socket.on('connect', () => {
    hide('overlay-disconnected');
    state.reconnectDelay = 1000;
    if (state.code && state.pseudo) {
      // Reconnexion : rejoindre à nouveau
      socket.emit('player:join', { code: state.code, pseudo: state.pseudo });
    }
  });

  socket.on('disconnect', () => {
    show('overlay-disconnected');
    scheduleReconnect();
  });

  socket.on('connect_error', () => {
    scheduleReconnect();
  });

  socket.on('error', ({ message }) => {
    if (!state.pseudo) {
      // Erreur à la connexion initiale
      const el = document.getElementById('join-error');
      if (el) { el.textContent = message; el.classList.remove('hidden'); }
      const btn = document.getElementById('btn-join');
      if (btn) btn.disabled = false;
    }
  });

  socket.on('player:joined', (data) => {
    state.pseudo = data.pseudo;
    state.code = data.code;
    state.score = data.score || 0;
    hide('overlay-disconnected');

    if (data.state === 'waiting') {
      setText('waiting-pseudo', data.pseudo);
      const count = data.players ? data.players.filter(p => p.connected).length : 1;
      setText('waiting-player-count', count);
      showScreen('screen-waiting');
    } else if (data.state === 'active') {
      handleQuestionStart(data, data.remaining);
    } else if (data.state === 'leaderboard' || data.state === 'finished') {
      handleLeaderboard(data.leaderboard, data.isLast, data.state === 'finished', null, null);
    }
  });

  socket.on('session:players_updated', ({ players }) => {
    const count = players.filter(p => p.connected).length;
    setText('waiting-player-count', count);
  });

  socket.on('question:start', (data) => {
    handleQuestionStart(data, null);
  });

  socket.on('timer:tick', ({ remaining }) => {
    updateTimer(remaining);
  });

  socket.on('player:answer_confirmed', ({ choiceIndex }) => {
    state.answered = true;
    // Feedback visuel immédiat
    const btns = document.querySelectorAll('#choices-grid .choice-btn');
    btns.forEach((btn, i) => {
      btn.disabled = true;
      if (i === choiceIndex) btn.classList.add('selected');
    });
    show('answer-feedback');
    setText('feedback-icon', '✓');
    setText('feedback-text', 'Réponse enregistrée ! En attente des autres joueurs...');
    document.getElementById('feedback-icon').style.color = '#2ecc71';
  });

  socket.on('question:result', (data) => {
    clearTimerInterval();
    // Afficher les bonnes/mauvaises réponses
    const btns = document.querySelectorAll('#choices-grid .choice-btn');
    btns.forEach((btn, i) => {
      btn.disabled = true;
      if (i === data.correctIndex) {
        btn.classList.remove('selected');
        btn.classList.add('correct');
      } else if (btn.classList.contains('selected')) {
        btn.classList.add('incorrect');
      }
    });

    // Afficher les points gagnés
    if (data.pointsEarned !== undefined) {
      show('answer-feedback');
      if (data.pointsEarned > 0) {
        setText('feedback-icon', '🎯');
        setText('feedback-text', `+${data.pointsEarned} points ! Score total : ${data.yourScore}`);
        document.getElementById('feedback-icon').style.color = '#f39c12';
      } else {
        if (!state.answered) {
          setText('feedback-icon', '⏱');
          setText('feedback-text', 'Temps écoulé ! 0 point.');
        } else {
          setText('feedback-icon', '✗');
          setText('feedback-text', 'Mauvaise réponse. 0 point.');
        }
      }
    }

    // Transition vers le classement après 2s
    setTimeout(() => {
      handleLeaderboard(data.leaderboard, data.isLast, false, data.questionText, data.correctText);
    }, 2000);
  });

  socket.on('session:end', ({ leaderboard }) => {
    clearTimerInterval();
    handleFinal(leaderboard);
  });}

function scheduleReconnect() {
  clearTimeout(state.reconnectTimeout);
  if (state.reconnectDelay > 30000) return;
  state.reconnectTimeout = setTimeout(() => {
    if (!socket.connected) {
      socket.connect();
      state.reconnectDelay = Math.min(state.reconnectDelay * 2, 30000);
    }
  }, state.reconnectDelay);
}

/* ─── Question ────────────────────────────────────────────────────────── */
function handleQuestionStart(data, overrideRemaining) {
  state.answered = false;
  state.timeLimit = data.timeLimit;
  state.currentQuestion = data;

  // Mettre à jour le header
  setText('q-domain', data.domain);
  setText('q-counter', `Q${data.questionIndex + 1} / ${data.total}`);
  setText('question-text', data.question);

  // Construire les boutons de choix
  const grid = document.getElementById('choices-grid');
  grid.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  data.choices.forEach((choice, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.innerHTML = `<span class="choice-letter">${letters[i]}</span>${escapeHtml(choice)}`;
    btn.addEventListener('click', () => submitAnswer(i));
    grid.appendChild(btn);
  });

  // Cacher le feedback
  hide('answer-feedback');

  showScreen('screen-question');

  // Démarrer le timer
  const initial = overrideRemaining !== null && overrideRemaining !== undefined
    ? overrideRemaining
    : data.timeLimit;
  startTimerDisplay(initial, data.timeLimit);
}

function submitAnswer(choiceIndex) {
  if (state.answered) return;
  socket.emit('player:answer', { choiceIndex });
  // Désactiver immédiatement tous les boutons (optimistic UI)
  document.querySelectorAll('#choices-grid .choice-btn').forEach((btn, i) => {
    btn.disabled = true;
    if (i === choiceIndex) btn.classList.add('selected');
  });
}

/* ─── Timer ───────────────────────────────────────────────────────────── */
function startTimerDisplay(initial, total) {
  clearTimerInterval();
  updateTimerUI(initial, total);

  state.timerInterval = setInterval(() => {
    // Le tick réel vient du serveur (timer:tick), mais on fait un tick local
    // pour fluidité (sera synchronisé par les events serveur)
  }, 1000);
}

function updateTimer(remaining) {
  updateTimerUI(remaining, state.timeLimit);
  if (remaining <= 0) {
    clearTimerInterval();
    if (!state.answered) {
      document.querySelectorAll('#choices-grid .choice-btn').forEach(btn => btn.disabled = true);
      show('answer-feedback');
      setText('feedback-icon', '⏱');
      setText('feedback-text', 'Temps écoulé !');
      document.getElementById('feedback-icon').style.color = '#e74c3c';
    }
  }
}

function updateTimerUI(remaining, total) {
  const bar = document.getElementById('timer-bar');
  const num = document.getElementById('timer-number');
  if (!bar || !num) return;

  const pct = total > 0 ? (remaining / total) * 100 : 0;
  bar.style.width = pct + '%';
  num.textContent = Math.max(0, Math.ceil(remaining));

  // Couleurs d'urgence
  const urgent = remaining <= 5;
  const warning = remaining <= 10 && remaining > 5;
  bar.classList.toggle('danger', urgent);
  bar.classList.toggle('warning', warning && !urgent);
  num.classList.toggle('danger', urgent);
  num.classList.toggle('warning', warning && !urgent);
}

function clearTimerInterval() {
  if (state.timerInterval) { clearInterval(state.timerInterval); state.timerInterval = null; }
}

/* ─── Helpers ─────────────────────────────────────────────────────────── */
function formatResponseTime(ms) {
  if (ms === null || ms === undefined) return '—';
  if (ms < 1000) return `${ms} ms`;
  return `${(ms / 1000).toFixed(2)} s`;
}

/* ─── Classement ──────────────────────────────────────────────────────── */
function handleLeaderboard(leaderboard, isLast, isFinal, questionText, correctText) {
  if (isFinal) {
    handleFinal(leaderboard);
    return;
  }

  // Recap question + bonne réponse
  setText('recap-question', questionText || '');
  setText('recap-answer-text', correctText || '');
  const recapEl = document.getElementById('question-recap');
  if (recapEl) recapEl.style.display = questionText ? '' : 'none';

  const list = document.getElementById('leaderboard-list');
  list.innerHTML = '';

  leaderboard.forEach(item => {
    const isMe = item.pseudo.toLowerCase() === state.pseudo.toLowerCase();
    const div = document.createElement('div');
    div.className = `lb-item${isMe ? ' me' : ''}${item.rank <= 3 ? ` rank-${item.rank}` : ''}`;

    const rankEl = document.createElement('div');
    rankEl.className = `lb-rank${item.rank <= 3 ? ` rank-${item.rank}` : ''}`;
    if (item.rank > 3) rankEl.textContent = item.rank;

    const pseudoEl = document.createElement('div');
    pseudoEl.className = 'lb-pseudo';
    pseudoEl.textContent = item.pseudo + (isMe ? ' (vous)' : '');

    const rightEl = document.createElement('div');
    rightEl.className = 'lb-right';

    const scoreEl = document.createElement('div');
    scoreEl.className = 'lb-score';
    scoreEl.textContent = item.score.toLocaleString();

    const timeEl = document.createElement('div');
    timeEl.className = `lb-time${item.responseTimeMs !== null ? '' : ' lb-time-none'}`;
    timeEl.title = 'Temps de réponse';
    timeEl.textContent = item.responseTimeMs !== null ? `⚡ ${formatResponseTime(item.responseTimeMs)}` : '—';

    rightEl.appendChild(scoreEl);
    rightEl.appendChild(timeEl);

    div.appendChild(rankEl);
    div.appendChild(pseudoEl);
    div.appendChild(rightEl);
    list.appendChild(div);
  });

  setText('lb-subtitle', isLast ? 'Dernière question — résultats finaux à venir' : 'Le modérateur va lancer la prochaine question...');
  document.getElementById('lb-waiting-next').style.display = isLast ? 'none' : '';

  showScreen('screen-leaderboard');
}

/* ─── Final ───────────────────────────────────────────────────────────── */
function handleFinal(leaderboard) {
  clearTimerInterval();

  // Podium
  const podium = document.getElementById('podium-wrap');
  podium.innerHTML = '';
  const medals = ['🥇', '🥈', '🥉'];
  const classes = ['p1', 'p2', 'p3'];
  const podiumOrder = [1, 0, 2]; // Affichage : 2e, 1er, 3e

  podiumOrder.forEach(realIdx => {
    const p = leaderboard[realIdx];
    if (!p) return;
    const item = document.createElement('div');
    item.className = `podium-item ${classes[realIdx]}`;
    const initial = p.pseudo.charAt(0).toUpperCase();
    item.innerHTML = `
      <div class="podium-medal">${medals[realIdx]}</div>
      <div class="podium-avatar">${initial}</div>
      <div class="podium-pseudo">${escapeHtml(p.pseudo)}</div>
      <div class="podium-score">${p.score.toLocaleString()} pts</div>
    `;
    podium.appendChild(item);
  });

  // Classement complet
  const finalLb = document.getElementById('final-leaderboard');
  finalLb.innerHTML = '';
  leaderboard.forEach(item => {
    const isMe = item.pseudo.toLowerCase() === state.pseudo.toLowerCase();
    const div = document.createElement('div');
    div.className = `lb-item${isMe ? ' me' : ''}${item.rank <= 3 ? ` rank-${item.rank}` : ''}`;

    const rankEl = document.createElement('div');
    rankEl.className = `lb-rank${item.rank <= 3 ? ` rank-${item.rank}` : ''}`;
    if (item.rank > 3) rankEl.textContent = item.rank;

    const pseudoEl = document.createElement('div');
    pseudoEl.className = 'lb-pseudo';
    pseudoEl.textContent = item.pseudo + (isMe ? ' (vous)' : '');

    const scoreEl = document.createElement('div');
    scoreEl.className = 'lb-score';
    scoreEl.textContent = item.score.toLocaleString();

    div.appendChild(rankEl);
    div.appendChild(pseudoEl);
    div.appendChild(scoreEl);
    finalLb.appendChild(div);
  });

  showScreen('screen-final');
}

/* ─── Formulaire de connexion ─────────────────────────────────────────── */
document.getElementById('form-join').addEventListener('submit', (e) => {
  e.preventDefault();

  const pseudo = document.getElementById('input-pseudo').value.trim();
  const code = document.getElementById('input-code').value.trim().toUpperCase();

  let valid = true;

  if (!pseudo) {
    document.getElementById('err-pseudo').textContent = 'Le pseudo est requis.';
    valid = false;
  } else if (pseudo.length > 20) {
    document.getElementById('err-pseudo').textContent = 'Maximum 20 caractères.';
    valid = false;
  } else {
    document.getElementById('err-pseudo').textContent = '';
  }

  if (!code) {
    document.getElementById('err-code').textContent = 'Le code est requis.';
    valid = false;
  } else {
    document.getElementById('err-code').textContent = '';
  }

  if (!valid) return;

  hide('join-error');
  document.getElementById('btn-join').disabled = true;

  state.pseudo = pseudo;
  state.code = code;

  if (!socket || !socket.connected) {
    initSocket();
    socket.once('connect', () => {
      socket.emit('player:join', { code, pseudo });
    });
  } else {
    socket.emit('player:join', { code, pseudo });
  }
});

document.getElementById('btn-play-again').addEventListener('click', () => {
  state.pseudo = '';
  state.code = '';
  state.score = 0;
  showScreen('screen-join');
  document.getElementById('input-pseudo').value = '';
  document.getElementById('input-code').value = '';
  document.getElementById('btn-join').disabled = false;
});

/* ─── Utilitaire XSS ─────────────────────────────────────────────────── */
function escapeHtml(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

/* ─── Init ────────────────────────────────────────────────────────────── */
initSocket();
