/* ─── État global modérateur ──────────────────────────────────────────── */
const state = {
  code: null,
  questionCount: 0,
  currentQuestionIndex: -1,
  totalQuestions: 0,
  timeLimit: 0,
  reconnectDelay: 1000,
  reconnectTimeout: null,
  isLast: false,
};

let socket = null;

/* ─── Helpers UI ──────────────────────────────────────────────────────── */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
}
function setText(id, text) { const el = document.getElementById(id); if (el) el.textContent = text; }
function show(id) { const el = document.getElementById(id); if (el) el.classList.remove('hidden'); }
function hide(id) { const el = document.getElementById(id); if (el) el.classList.add('hidden'); }

function escapeHtml(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

/* ─── Connexion Socket ────────────────────────────────────────────────── */
function initSocket() {
  socket = io({ autoConnect: true, reconnection: false });

  socket.on('connect', () => {
    hide('overlay-disconnected');
    state.reconnectDelay = 1000;
    if (state.code) {
      socket.emit('host:join', { code: state.code });
    }
  });

  socket.on('disconnect', () => {
    show('overlay-disconnected');
    scheduleReconnect();
  });

  socket.on('connect_error', () => scheduleReconnect());

  socket.on('error', ({ message }) => {
    const errEl = document.getElementById('create-error');
    if (errEl) { errEl.textContent = message; errEl.classList.remove('hidden'); }
    document.getElementById('btn-create').disabled = false;
  });

  socket.on('host:state', (data) => {
    state.code = data.code;
    state.totalQuestions = data.questionCount;

    if (data.state === 'waiting') {
      showLobby(data);
    }
  });

  socket.on('host:players_updated', ({ players }) => {
    renderPlayerList(players);
    const connected = players.filter(p => p.connected).length;
    setText('player-count-badge', connected);
    const btn = document.getElementById('btn-start');
    if (btn) {
      btn.disabled = connected === 0;
      setText('start-hint', connected === 0 ? 'En attente de joueurs...' : `${connected} joueur(s) prêt(s)`);
    }
  });

  socket.on('question:start', (data) => {
    state.currentQuestionIndex = data.questionIndex;
    state.totalQuestions = data.total;
    state.timeLimit = data.timeLimit;
    state.isLast = data.isLast;
    renderHostQuestion(data);
    showScreen('screen-question');
  });

  socket.on('timer:tick', ({ remaining }) => {
    updateTimerUI(remaining, state.timeLimit);
  });

  socket.on('host:answer_received', ({ answered, total }) => {
    setText('h-answered-count', answered);
    setText('h-total-players', total);
  });

  socket.on('question:result', (data) => {
    // Modérateur : pas de mise en évidence de la bonne réponse sur l'écran question
    state.isLast = data.isLast;

    setTimeout(() => {
      renderLeaderboard(data.leaderboard, data.isLast, data.questionText, data.correctText);
      showScreen('screen-leaderboard');
    }, 1500);
  });

  socket.on('session:end', ({ leaderboard }) => {
    renderFinal(leaderboard);
    showScreen('screen-final');
  });
}

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

/* ─── Lobby ───────────────────────────────────────────────────────────── */
function showLobby(data) {
  setText('session-code', data.code);
  setText('lobby-qcount', data.questionCount);
  const url = window.location.origin + '/';
  setText('join-url', url);
  document.getElementById('join-url').href = url;
  renderPlayerList(data.players || []);
  const connected = (data.players || []).filter(p => p.connected).length;
  setText('player-count-badge', connected);
  const btn = document.getElementById('btn-start');
  if (btn) {
    btn.disabled = connected === 0;
    setText('start-hint', connected === 0 ? 'En attente de joueurs...' : `${connected} joueur(s) prêt(s)`);
  }
  showScreen('screen-lobby');
}

function renderPlayerList(players) {
  const container = document.getElementById('players-list');
  if (!container) return;
  if (!players || players.length === 0) {
    container.innerHTML = '<p class="empty-state">Aucun joueur pour l\'instant…</p>';
    return;
  }
  container.innerHTML = '';
  players.forEach(p => {
    const chip = document.createElement('div');
    chip.className = `player-chip${p.connected ? '' : ' disconnected'}`;
    const initial = p.pseudo.charAt(0).toUpperCase();
    chip.innerHTML = `
      <div class="player-avatar">${escapeHtml(initial)}</div>
      <div class="player-chip-pseudo">${escapeHtml(p.pseudo)}</div>
    `;
    container.appendChild(chip);
  });
}

/* ─── Question (vue host) ─────────────────────────────────────────────── */
function renderHostQuestion(data) {
  setText('h-q-domain', data.domain);
  setText('h-q-counter', `Question ${data.questionIndex + 1} / ${data.total}`);
  setText('h-question-text', data.question);
  setText('h-answered-count', '0');
  setText('h-total-players', '?');

  updateTimerUI(data.timeLimit, data.timeLimit);

  const grid = document.getElementById('h-choices-grid');
  grid.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  data.choices.forEach((choice, i) => {
    const btn = document.createElement('div');
    btn.className = 'choice-btn';
    // Pas de mise en évidence de la bonne réponse côté modérateur pendant la question
    btn.innerHTML = `<span class="choice-letter">${letters[i]}</span>${escapeHtml(choice)}`;
    grid.appendChild(btn);
  });
}

/* ─── Timer ───────────────────────────────────────────────────────────── */
function updateTimerUI(remaining, total) {
  const bar = document.getElementById('h-timer-bar');
  const num = document.getElementById('h-timer-number');
  if (!bar || !num) return;

  const pct = total > 0 ? (remaining / total) * 100 : 0;
  bar.style.width = pct + '%';
  num.textContent = Math.max(0, Math.ceil(remaining));

  const urgent = remaining <= 5;
  const warning = remaining <= 10 && remaining > 5;
  bar.classList.toggle('danger', urgent);
  bar.classList.toggle('warning', warning && !urgent);
  num.classList.toggle('danger', urgent);
  num.classList.toggle('warning', warning && !urgent);
}

/* ─── Helpers ─────────────────────────────────────────────────────────── */
function formatResponseTime(ms) {
  if (ms === null || ms === undefined) return '—';
  if (ms < 1000) return `${ms} ms`;
  return `${(ms / 1000).toFixed(2)} s`;
}

/* ─── Classement ──────────────────────────────────────────────────────── */
function renderLeaderboard(leaderboard, isLast, questionText, correctText) {
  setText('h-lb-qnum', state.currentQuestionIndex + 1);

  // Recap question + bonne réponse
  setText('h-recap-question', questionText || '');
  setText('h-recap-answer-text', correctText || '');

  const list = document.getElementById('h-leaderboard-list');
  list.innerHTML = '';

  leaderboard.forEach(item => {
    const div = document.createElement('div');
    div.className = `lb-item${item.rank <= 3 ? ` rank-${item.rank}` : ''}`;

    const rankEl = document.createElement('div');
    rankEl.className = `lb-rank${item.rank <= 3 ? ` rank-${item.rank}` : ''}`;
    if (item.rank > 3) rankEl.textContent = item.rank;

    const pseudoEl = document.createElement('div');
    pseudoEl.className = 'lb-pseudo';
    pseudoEl.textContent = item.pseudo;

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

  const btnNext = document.getElementById('btn-next-question');
  if (btnNext) {
    btnNext.textContent = isLast ? 'Voir le classement final' : 'Question suivante →';
  }
}

/* ─── Final ───────────────────────────────────────────────────────────── */
function renderFinal(leaderboard) {
  const podium = document.getElementById('h-podium-wrap');
  podium.innerHTML = '';
  const medals = ['🥇', '🥈', '🥉'];
  const classes = ['p1', 'p2', 'p3'];
  const podiumOrder = [1, 0, 2];

  podiumOrder.forEach(realIdx => {
    const p = leaderboard[realIdx];
    if (!p) return;
    const item = document.createElement('div');
    item.className = `podium-item ${classes[realIdx]}`;
    const initial = p.pseudo.charAt(0).toUpperCase();
    item.innerHTML = `
      <div class="podium-medal">${medals[realIdx]}</div>
      <div class="podium-avatar">${escapeHtml(initial)}</div>
      <div class="podium-pseudo">${escapeHtml(p.pseudo)}</div>
      <div class="podium-score">${p.score.toLocaleString()} pts</div>
    `;
    podium.appendChild(item);
  });

  const finalLb = document.getElementById('h-final-leaderboard');
  finalLb.innerHTML = '';
  leaderboard.forEach(item => {
    const div = document.createElement('div');
    div.className = `lb-item${item.rank <= 3 ? ` rank-${item.rank}` : ''}`;

    const rankEl = document.createElement('div');
    rankEl.className = `lb-rank${item.rank <= 3 ? ` rank-${item.rank}` : ''}`;
    if (item.rank > 3) rankEl.textContent = item.rank;

    const pseudoEl = document.createElement('div');
    pseudoEl.className = 'lb-pseudo';
    pseudoEl.textContent = item.pseudo;

    const scoreEl = document.createElement('div');
    scoreEl.className = 'lb-score';
    scoreEl.textContent = item.score.toLocaleString();

    div.appendChild(rankEl);
    div.appendChild(pseudoEl);
    div.appendChild(scoreEl);
    finalLb.appendChild(div);
  });
}

/* ─── Événements boutons ──────────────────────────────────────────────── */

// Slider nombre de questions
const slider = document.getElementById('input-qcount');
const display = document.getElementById('qcount-display');
if (slider && display) {
  slider.addEventListener('input', () => { display.textContent = slider.value; });
}

// Slider temps par question
const sliderTL = document.getElementById('input-timelimit');
const displayTL = document.getElementById('timelimit-display');
if (sliderTL && displayTL) {
  sliderTL.addEventListener('input', () => { displayTL.textContent = sliderTL.value; });
}

// Créer la session
document.getElementById('form-create').addEventListener('submit', async (e) => {
  e.preventDefault();
  const count = parseInt(document.getElementById('input-qcount').value) || 15;
  const timeLimit = parseInt(document.getElementById('input-timelimit').value) || 10;
  const btn = document.getElementById('btn-create');
  const errEl = document.getElementById('create-error');
  btn.disabled = true;
  hide('create-error');

  try {
    const res = await fetch('/api/sessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ questionCount: count, timeLimit })
    });
    const data = await res.json();
    if (!res.ok) {
      errEl.textContent = data.error || 'Erreur lors de la création de la session.';
      errEl.classList.remove('hidden');
      btn.disabled = false;
      return;
    }
    state.code = data.code;
    state.questionCount = data.questionCount;

    // Rejoindre la session via WebSocket
    if (!socket || !socket.connected) {
      initSocket();
      socket.once('connect', () => {
        socket.emit('host:join', { code: state.code });
      });
    } else {
      socket.emit('host:join', { code: state.code });
    }
  } catch (err) {
    errEl.textContent = 'Erreur réseau. Vérifiez votre connexion.';
    errEl.classList.remove('hidden');
    btn.disabled = false;
  }
});

// Démarrer
document.getElementById('btn-start').addEventListener('click', () => {
  if (socket) socket.emit('host:start');
});

// Question suivante
document.getElementById('btn-next-question').addEventListener('click', () => {
  if (socket) socket.emit('host:next_question');
});

// Terminer la session (depuis classement)
document.getElementById('btn-end-session').addEventListener('click', () => {
  if (confirm('Terminer la session maintenant ?')) {
    if (socket) socket.emit('host:end_session');
  }
});

// Nouvelle session (depuis écran final)
document.getElementById('btn-new-session').addEventListener('click', () => {
  window.location.href = '/host.html';
});

/* ─── Init ────────────────────────────────────────────────────────────── */
initSocket();
