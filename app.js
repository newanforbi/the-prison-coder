'use strict';

// ── Set current year in footer ────────────────────────────────
(function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();

// ── Light / dark theme toggle ─────────────────────────────────
(function themeToggle() {
  var btn = document.getElementById('themeToggle');
  var saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    btn.textContent = '🌙';
  }
  btn.addEventListener('click', function () {
    var isLight = document.documentElement.getAttribute('data-theme') === 'light';
    if (isLight) {
      document.documentElement.removeAttribute('data-theme');
      btn.textContent = '☀️';
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      btn.textContent = '🌙';
      localStorage.setItem('theme', 'light');
    }
  });
})();

// ── Track PDF link clicks to console ─────────────────────────
(function trackClicks() {
  document.querySelectorAll('[data-track]').forEach(function (link) {
    link.addEventListener('click', function () {
      console.log('[The Prison Coder] PDF opened:', link.dataset.track);
    });
  });
})();
