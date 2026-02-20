'use strict';

// ── Set current year in footer ────────────────────────────────
(function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();

// ── Track PDF link clicks to console ─────────────────────────
(function trackClicks() {
  document.querySelectorAll('[data-track]').forEach(function (link) {
    link.addEventListener('click', function () {
      console.log('[The Prison Coder] PDF opened:', link.dataset.track);
    });
  });
})();
