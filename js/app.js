/* ===== ELEMENTS ===== */
const selectScreen = document.getElementById('selectScreen');
const statusCard   = document.getElementById('statusCard');
const resetBtn     = document.getElementById('resetBtn');
const otherInput   = document.getElementById('otherInput');

const icon     = document.getElementById('icon');
const title    = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const bg       = document.getElementById('bg');

/* ===== STATUS DATA ===== */
const STATUS = {
  toilet: { icon: '🚻', title: 'Ke Toilet', subtitle: 'Izin sebentar ke toilet' },
  makan:  { icon: '🍽️', title: 'Cari Makan', subtitle: 'Izin keluar sebentar untuk makan' }
};

/* ===== STATUS FLOW ===== */
document.querySelectorAll('.option-btn').forEach(btn => {
  btn.onclick = () => {
    const type = btn.dataset.type;

    if (type === 'other') {
      otherInput.classList.remove('hidden');
      otherInput.focus();
      return;
    }
    showStatus(STATUS[type]);
  };
});

otherInput.addEventListener('keydown', e => {
  if (e.key === 'Enter' && otherInput.value.trim()) {
    showStatus({
      icon: '📝',
      title: 'Sedang Keluar',
      subtitle: otherInput.value
    });
  }
});

function showStatus(data) {
  icon.textContent = data.icon;
  title.textContent = data.title;
  subtitle.textContent = data.subtitle;

  selectScreen.classList.add('hidden');
  statusCard.classList.remove('hidden');
  resetBtn.classList.remove('hidden');

  enableFullscreen();
  keepAwake();
}

resetBtn.onclick = reset;

function reset() {
  statusCard.classList.add('hidden');
  resetBtn.classList.add('hidden');
  selectScreen.classList.remove('hidden');
  otherInput.classList.add('hidden');
  otherInput.value = '';
}

/* ===== THEME SWITCH ===== */
document.querySelectorAll('.theme-btn').forEach(btn => {
  btn.onclick = () => {
    document.body.setAttribute('data-theme', btn.dataset.theme);
  };
});

/* ===== FULLSCREEN + WAKE ===== */
function enableFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.();
  }
}

async function keepAwake() {
  try {
    if ('wakeLock' in navigator) {
      await navigator.wakeLock.request('screen');
    }
  } catch {}
}

/* ===== PARALLAX ===== */
document.addEventListener('mousemove', e => {
  const x = (e.clientX / innerWidth - 0.5) * 40;
  const y = (e.clientY / innerHeight - 0.5) * 40;

  bg.style.transform = `translate(${x}px,${y}px)`;
  statusCard.style.transform = `translate(${x/2}px,${y/2}px)`;
});
