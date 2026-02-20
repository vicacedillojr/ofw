// Ikaw ang Lakas — App Logic
let current = 0;
let lang = 'en';
let isAnimating = false;
let touchStartX = 0;
let mouseStartX = 0;
let dragging = false;

/* ── Language ── */
function setLang(l) {
  lang = l;
  document.getElementById('btnEN').classList.toggle('active', l === 'en');
  document.getElementById('btnTL').classList.toggle('active', l === 'tl');
  renderContent();
  saveState();
}

/* ── Init ── */
function init() {
  // Build progress dots
  const prog = document.getElementById('progress');
  for (let i = 0; i < affirmations.length; i++) {
    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.onclick = () => {
      if (i !== current) animate(i > current ? 'left' : 'right', () => { current = i; });
    };
    prog.appendChild(d);
  }

  // Touch swipe
  const card = document.getElementById('card');
  card.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  card.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) dx < 0 ? nextCard() : prevCard();
  }, { passive: true });

  // Mouse drag (desktop / emulator)
  card.addEventListener('mousedown', e => { mouseStartX = e.clientX; dragging = true; });
  window.addEventListener('mouseup', e => {
    if (!dragging) return;
    dragging = false;
    const dx = e.clientX - mouseStartX;
    if (Math.abs(dx) > 40) dx < 0 ? nextCard() : prevCard();
  });

  // Keyboard arrows
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') nextCard();
    if (e.key === 'ArrowLeft')  prevCard();
  });

  // Load saved state
  loadState();
  renderCard();
}

/* ── Render ── */
function renderCard() {
  document.querySelectorAll('.dot').forEach((d, i) =>
    d.classList.toggle('active', i === current)
  );
  document.getElementById('cardNum').textContent = `${current + 1} / ${affirmations.length}`;
  renderContent();
}

function renderContent() {
  const a = affirmations[current];
  document.getElementById('cardIcon').textContent = a.icon;
  document.getElementById('cardCategory').textContent = a.category;

  const enEl = document.getElementById('cardEN');
  const tlEl = document.getElementById('cardTL');

  if (lang === 'tl') {
    enEl.style.display = 'none';
    tlEl.style.borderTop = 'none';
    tlEl.style.paddingTop = '0';
    tlEl.style.fontSize = 'clamp(17px, 4.2vw, 22px)';
    tlEl.style.color = 'white';
    tlEl.style.fontStyle = 'normal';
  } else {
    enEl.style.display = '';
    tlEl.style.borderTop = '';
    tlEl.style.paddingTop = '';
    tlEl.style.fontSize = '';
    tlEl.style.color = '';
    tlEl.style.fontStyle = '';
    enEl.innerHTML = a.en;
  }

  tlEl.innerHTML = a.tl;
  document.getElementById('cardSub').textContent = a.sub;
}

/* ── Navigation ── */
function animate(direction, callback) {
  if (isAnimating) return;
  isAnimating = true;
  const card = document.getElementById('card');
  const outClass = direction === 'left' ? 'slide-left' : 'slide-right';
  const inClass  = direction === 'left' ? 'enter-right' : 'enter-left';

  card.classList.add(outClass);
  setTimeout(() => {
    card.classList.remove(outClass);
    callback();
    renderCard();
    card.classList.add(inClass);
    setTimeout(() => {
      card.classList.remove(inClass);
      isAnimating = false;
    }, 380);
  }, 340);
}

function nextCard() {
  animate('left', () => {
    current = (current + 1) % affirmations.length;
    saveState();
  });
}

function prevCard() {
  animate('right', () => {
    current = (current - 1 + affirmations.length) % affirmations.length;
    saveState();
  });
}

/* ── Persistence (localStorage) ── */
function saveState() {
  try {
    localStorage.setItem('ofw_state', JSON.stringify({ current, lang }));
  } catch (e) {}
}

function loadState() {
  try {
    const raw = localStorage.getItem('ofw_state');
    if (raw) {
      const s = JSON.parse(raw);
      current = s.current || 0;
      lang    = s.lang    || 'en';
      document.getElementById('btnEN').classList.toggle('active', lang === 'en');
      document.getElementById('btnTL').classList.toggle('active', lang === 'tl');
    }
  } catch (e) {}
}

/* ── Boot ── */
document.addEventListener('DOMContentLoaded', init);

