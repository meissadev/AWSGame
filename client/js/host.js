/* ─── État global modérateur ──────────────────────────────────────────── */
const state = {
  code: null, mode: 'classic', questionCount: 0,
  currentQuestionIndex: -1, totalQuestions: 0, timeLimit: 0,
  reconnectDelay: 1000, reconnectTimeout: null, isLast: false,
  history: [], tournament: null
};
let socket = null;

/* ─── Helpers UI ──────────────────────────────────────────────────────── */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id); if (el) el.classList.add('active');
}
function setText(id, t) { const el = document.getElementById(id); if (el) el.textContent = t; }
function show(id) { const el = document.getElementById(id); if (el) el.classList.remove('hidden'); }
function hide(id) { const el = document.getElementById(id); if (el) el.classList.add('hidden'); }
function escapeHtml(str) {
  const d = document.createElement('div');
  d.appendChild(document.createTextNode(str)); return d.innerHTML;
}
function formatTime(ms) {
  if (ms === null || ms === undefined) return '—';
  return ms < 1000 ? `${ms} ms` : `${(ms/1000).toFixed(2)} s`;
}

/* ─── Socket ──────────────────────────────────────────────────────────── */
function initSocket() {
  socket = io({ autoConnect: true, reconnection: false });

  socket.on('connect', () => {
    hide('overlay-disconnected');
    state.reconnectDelay = 1000;
    if (state.code) socket.emit('host:join', { code: state.code });
  });
  socket.on('disconnect', () => { show('overlay-disconnected'); scheduleReconnect(); });
  socket.on('connect_error', scheduleReconnect);

  socket.on('error', ({ message }) => {
    const el = document.getElementById('create-error');
    if (el) { el.textContent = message; el.classList.remove('hidden'); }
    const btn = document.getElementById('btn-create');
    if (btn) btn.disabled = false;
  });

  socket.on('host:state', (data) => {
    state.code = data.code;
    state.mode = data.mode || 'classic';
    state.totalQuestions = data.questionCount;
    state.tournament = data.tournament || null;
    if (data.state === 'waiting') showLobby(data);
  });

  socket.on('host:players_updated', ({ players }) => {
    renderPlayerList(players);
    const connected = players.filter(p => p.connected).length;
    setText('player-count-badge', connected);
    updateStartBtn(connected);
  });

  socket.on('question:start', (data) => {
    state.currentQuestionIndex = data.questionIndex;
    state.totalQuestions = data.total;
    state.timeLimit = data.timeLimit;
    state.isLast = data.isLast;
    renderHostQuestion(data);
    showScreen('screen-question');
  });

  socket.on('timer:tick', ({ remaining }) => updateTimerUI(remaining, state.timeLimit));

  socket.on('host:answer_received', ({ answered, total }) => {
    setText('h-answered-count', answered);
    setText('h-total-players', total);
  });

  socket.on('question:result', (data) => {
    state.isLast = data.isLast;
    const label = data.isLastOfPhase
      ? (data.tournamentPhase < data.tournamentTotalPhases ? 'Voir les éliminations' : 'Voir le classement final')
      : (data.isLast ? 'Voir le classement final' : 'Question suivante →');
    setTimeout(() => {
      renderLeaderboard(data.leaderboard, data.isLast || data.isLastOfPhase, data.questionText, data.correctText, label);
      showScreen('screen-leaderboard');
    }, 1500);
  });

  socket.on('tournament:phase_end', (data) => {
    renderPhaseEnd(data);
    showScreen('screen-phase-end');
  });

  socket.on('session:end', ({ leaderboard, history }) => {
    state.history = history || [];
    renderFinal(leaderboard);
    showScreen('screen-final');
  });
}

function scheduleReconnect() {
  clearTimeout(state.reconnectTimeout);
  if (state.reconnectDelay > 30000) return;
  state.reconnectTimeout = setTimeout(() => {
    if (!socket.connected) { socket.connect(); state.reconnectDelay = Math.min(state.reconnectDelay * 2, 30000); }
  }, state.reconnectDelay);
}

/* ─── Lobby ───────────────────────────────────────────────────────────── */
function showLobby(data) {
  setText('session-code', data.code);
  const modeLabels = { classic: '🎯 Classique', faceoff: '⚔️ Duel', tournament: '🏆 Tournoi' };
  const modeEl = document.getElementById('lobby-mode-badge');
  if (modeEl) modeEl.textContent = modeLabels[state.mode] || state.mode;

  const qcountEl = document.getElementById('lobby-qcount');
  if (qcountEl) {
    if (state.mode === 'tournament' && state.tournament) {
      qcountEl.textContent = `${state.tournament.phases} phases × ${state.tournament.questionsPerPhase} q.`;
    } else {
      qcountEl.textContent = data.questionCount;
    }
  }
  const url = window.location.origin + '/';
  const joinUrlEl = document.getElementById('join-url');
  if (joinUrlEl) { joinUrlEl.textContent = url; joinUrlEl.href = url; }

  renderPlayerList(data.players || []);
  const connected = (data.players || []).filter(p => p.connected).length;
  setText('player-count-badge', connected);
  updateStartBtn(connected);
  showScreen('screen-lobby');
}

function updateStartBtn(connected) {
  const btn = document.getElementById('btn-start');
  const hint = document.getElementById('start-hint');
  if (!btn) return;
  let disabled = true, msg = 'En attente de joueurs...';
  if (state.mode === 'faceoff') {
    disabled = connected !== 2;
    msg = connected === 0 ? 'En attente de 2 joueurs...'
        : connected === 1 ? '1 joueur connecté — en attente du 2ème...'
        : '2 joueurs prêts !';
  } else if (state.mode === 'tournament') {
    disabled = connected < 3;
    msg = connected < 3 ? `${connected} joueur(s) — minimum 3 pour le tournoi` : `${connected} joueur(s) prêt(s)`;
  } else {
    disabled = connected === 0;
    msg = connected === 0 ? 'En attente de joueurs...' : `${connected} joueur(s) prêt(s)`;
  }
  btn.disabled = disabled;
  if (hint) hint.textContent = msg;
}

function renderPlayerList(players) {
  const container = document.getElementById('players-list');
  if (!container) return;
  if (!players || players.length === 0) {
    container.innerHTML = '<p class="empty-state">Aucun joueur pour l\'instant…</p>'; return;
  }
  container.innerHTML = '';
  players.forEach(p => {
    const chip = document.createElement('div');
    chip.className = `player-chip${p.connected ? '' : ' disconnected'}`;
    chip.innerHTML = `<div class="player-avatar">${escapeHtml(p.pseudo.charAt(0).toUpperCase())}</div>
      <div class="player-chip-pseudo">${escapeHtml(p.pseudo)}</div>`;
    container.appendChild(chip);
  });
}

/* ─── Question ────────────────────────────────────────────────────────── */
function renderHostQuestion(data) {
  const phaseLabel = data.tournamentPhase ? ` — Phase ${data.tournamentPhase}` : '';
  setText('h-q-domain', data.domain);
  setText('h-q-counter', `Q${data.questionIndex + 1}/${data.total}${phaseLabel}`);
  setText('h-question-text', data.question);
  setText('h-answered-count', '0');
  setText('h-total-players', '?');
  updateTimerUI(data.timeLimit, data.timeLimit);
  const grid = document.getElementById('h-choices-grid');
  grid.innerHTML = '';
  const letters = ['A','B','C','D'];
  data.choices.forEach((choice, i) => {
    const btn = document.createElement('div');
    btn.className = 'choice-btn';
    btn.innerHTML = `<span class="choice-letter">${letters[i]}</span>${escapeHtml(choice)}`;
    grid.appendChild(btn);
  });
}

/* ─── Timer ───────────────────────────────────────────────────────────── */
function updateTimerUI(remaining, total) {
  const bar = document.getElementById('h-timer-bar');
  const num = document.getElementById('h-timer-number');
  if (!bar || !num) return;
  bar.style.width = (total > 0 ? (remaining / total) * 100 : 0) + '%';
  num.textContent = Math.max(0, Math.ceil(remaining));
  const urgent = remaining <= 5, warning = remaining <= 10 && !urgent;
  bar.classList.toggle('danger', urgent); bar.classList.toggle('warning', warning);
  num.classList.toggle('danger', urgent); num.classList.toggle('warning', warning);
}

/* ─── Classement ──────────────────────────────────────────────────────── */
function renderLeaderboard(leaderboard, isLast, questionText, correctText, btnLabel) {
  setText('h-lb-qnum', state.currentQuestionIndex + 1);
  setText('h-recap-question', questionText || '');
  setText('h-recap-answer-text', correctText || '');
  const list = document.getElementById('h-leaderboard-list');
  list.innerHTML = '';
  leaderboard.forEach(item => {
    const div = document.createElement('div');
    div.className = `lb-item${item.eliminated ? ' lb-eliminated' : ''}${item.rank <= 3 ? ` rank-${item.rank}` : ''}`;
    const rankEl = document.createElement('div');
    rankEl.className = `lb-rank${item.rank <= 3 ? ` rank-${item.rank}` : ''}`;
    if (item.rank > 3) rankEl.textContent = item.rank;
    const pseudoEl = document.createElement('div');
    pseudoEl.className = 'lb-pseudo';
    pseudoEl.textContent = item.pseudo + (item.eliminated ? ' 💀' : '');
    const rightEl = document.createElement('div');
    rightEl.className = 'lb-right';
    const scoreEl = document.createElement('div');
    scoreEl.className = 'lb-score';
    scoreEl.textContent = item.score.toLocaleString();
    const timeEl = document.createElement('div');
    timeEl.className = `lb-time${item.responseTimeMs ? '' : ' lb-time-none'}`;
    timeEl.textContent = item.responseTimeMs ? `⚡ ${formatTime(item.responseTimeMs)}` : '—';
    rightEl.appendChild(scoreEl); rightEl.appendChild(timeEl);
    div.appendChild(rankEl); div.appendChild(pseudoEl); div.appendChild(rightEl);
    list.appendChild(div);
  });
  const btn = document.getElementById('btn-next-question');
  if (btn) btn.textContent = btnLabel || (isLast ? 'Voir le classement final' : 'Question suivante →');
}

/* ─── Phase End (tournoi) ─────────────────────────────────────────────── */
function renderPhaseEnd(data) {
  setText('h-phase-num', data.phase);
  setText('h-phase-total', data.totalPhases);
  setText('h-next-phase-num', data.nextPhase);

  const elimList = document.getElementById('h-eliminated-list');
  elimList.innerHTML = '';
  data.eliminated.forEach(p => {
    const el = document.createElement('div');
    el.className = 'elim-item';
    el.innerHTML = `<span class="elim-icon">💀</span><span class="elim-pseudo">${escapeHtml(p.pseudo)}</span><span class="elim-score">${p.score.toLocaleString()} pts</span>`;
    elimList.appendChild(el);
  });

  const survivorList = document.getElementById('h-survivors-list');
  survivorList.innerHTML = '';
  data.survivors.forEach((p, i) => {
    const el = document.createElement('div');
    el.className = 'survivor-item';
    el.innerHTML = `<span class="survivor-rank">${i + 1}</span><span class="survivor-pseudo">${escapeHtml(p.pseudo)}</span><span class="survivor-score">${p.score.toLocaleString()} pts</span>`;
    survivorList.appendChild(el);
  });
}

/* ─── Final ───────────────────────────────────────────────────────────── */
function renderFinal(leaderboard) {
  const podium = document.getElementById('h-podium-wrap');
  podium.innerHTML = '';
  const medals = ['🥇','🥈','🥉'], classes = ['p1','p2','p3'], order = [1,0,2];
  order.forEach(ri => {
    const p = leaderboard[ri]; if (!p) return;
    const item = document.createElement('div');
    item.className = `podium-item ${classes[ri]}`;
    item.innerHTML = `<div class="podium-medal">${medals[ri]}</div>
      <div class="podium-avatar">${escapeHtml(p.pseudo.charAt(0).toUpperCase())}</div>
      <div class="podium-pseudo">${escapeHtml(p.pseudo)}</div>
      <div class="podium-score">${p.score.toLocaleString()} pts</div>`;
    podium.appendChild(item);
  });
  const lb = document.getElementById('h-final-leaderboard');
  lb.innerHTML = '';
  leaderboard.forEach(item => {
    const div = document.createElement('div');
    div.className = `lb-item${item.rank <= 3 ? ` rank-${item.rank}` : ''}`;
    const rankEl = document.createElement('div');
    rankEl.className = `lb-rank${item.rank <= 3 ? ` rank-${item.rank}` : ''}`;
    if (item.rank > 3) rankEl.textContent = item.rank;
    const pseudoEl = document.createElement('div'); pseudoEl.className = 'lb-pseudo'; pseudoEl.textContent = item.pseudo;
    const scoreEl = document.createElement('div'); scoreEl.className = 'lb-score'; scoreEl.textContent = item.score.toLocaleString();
    div.appendChild(rankEl); div.appendChild(pseudoEl); div.appendChild(scoreEl);
    lb.appendChild(div);
  });
}

function renderRecap(history) {
  const list = document.getElementById('h-recap-list');
  if (!list) return;
  list.innerHTML = '';
  const letters = ['A','B','C','D'];
  (history || []).forEach(item => {
    const card = document.createElement('div');
    card.className = 'recap-card';
    const choicesHtml = item.choices.map((c, i) => {
      const ok = i === item.correctIndex;
      return `<div class="recap-choice${ok ? ' recap-correct' : ''}">
        <span class="recap-choice-letter">${letters[i]}</span>${escapeHtml(c)}${ok ? ' ✅' : ''}
      </div>`;
    }).join('');
    card.innerHTML = `<div class="recap-card-header">
        <span class="recap-card-num">Q${item.number}</span>
        <span class="domain-badge">${escapeHtml(item.domain)}</span>
      </div>
      <p class="recap-card-question">${escapeHtml(item.questionText)}</p>
      <div class="recap-card-choices">${choicesHtml}</div>`;
    list.appendChild(card);
  });
}

/* ─── Boutons ─────────────────────────────────────────────────────────── */

// Sélecteur de mode
document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const mode = btn.dataset.mode;
    document.getElementById('input-mode').value = mode;
    document.getElementById('classic-options').style.display = mode === 'tournament' ? 'none' : '';
    document.getElementById('tournament-options').style.display = mode === 'tournament' ? '' : 'none';
  });
});

// Sliders
[['input-qcount','qcount-display'],['input-timelimit','timelimit-display'],
 ['input-phases','phases-display'],['input-qperphase','qperphase-display']].forEach(([sid, did]) => {
  const s = document.getElementById(sid), d = document.getElementById(did);
  if (s && d) s.addEventListener('input', () => { d.textContent = s.value; });
});

// Créer session
document.getElementById('form-create').addEventListener('submit', async (e) => {
  e.preventDefault();
  const mode = document.getElementById('input-mode').value;
  const timeLimit = parseInt(document.getElementById('input-timelimit').value) || 10;
  const btn = document.getElementById('btn-create');
  const errEl = document.getElementById('create-error');
  btn.disabled = true; hide('create-error');

  let body = { timeLimit, mode };
  if (mode === 'tournament') {
    body.tournamentConfig = {
      phases: parseInt(document.getElementById('input-phases').value) || 3,
      questionsPerPhase: parseInt(document.getElementById('input-qperphase').value) || 5
    };
    body.questionCount = body.tournamentConfig.phases * body.tournamentConfig.questionsPerPhase;
  } else {
    body.questionCount = parseInt(document.getElementById('input-qcount').value) || 15;
  }

  try {
    const res = await fetch('/api/sessions', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body) });
    const data = await res.json();
    if (!res.ok) { errEl.textContent = data.error || 'Erreur.'; errEl.classList.remove('hidden'); btn.disabled = false; return; }
    state.code = data.code;
    state.mode = data.mode;
    state.tournament = data.tournament;
    if (!socket || !socket.connected) {
      initSocket();
      socket.once('connect', () => socket.emit('host:join', { code: state.code }));
    } else {
      socket.emit('host:join', { code: state.code });
    }
  } catch { errEl.textContent = 'Erreur réseau.'; errEl.classList.remove('hidden'); btn.disabled = false; }
});

document.getElementById('btn-start').addEventListener('click', () => { if (socket) socket.emit('host:start'); });
document.getElementById('btn-next-question').addEventListener('click', () => { if (socket) socket.emit('host:next_question'); });
document.getElementById('btn-end-session').addEventListener('click', () => { if (confirm('Terminer la session ?')) { if (socket) socket.emit('host:end_session'); } });
document.getElementById('btn-next-phase').addEventListener('click', () => { if (socket) socket.emit('host:next_question'); });
document.getElementById('btn-show-recap').addEventListener('click', () => { renderRecap(state.history); showScreen('screen-recap'); });
document.getElementById('btn-back-final').addEventListener('click', () => showScreen('screen-final'));
document.getElementById('btn-new-session').addEventListener('click', () => { window.location.href = '/host.html'; });
document.getElementById('btn-new-session-2').addEventListener('click', () => { window.location.href = '/host.html'; });

initSocket();
