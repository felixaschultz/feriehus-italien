(function () {
  const header = document.getElementById('site-header');
  const toggle = document.getElementById('mobile-toggle');
  const nav = document.getElementById('site-nav');

  const onScroll = () => {
    if (!header) return;
    if (window.scrollY > 60) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  if (header) {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('is-open');
    });
  }

  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#site-nav a').forEach((link) => {
    if (link.getAttribute('href') === path) {
      link.classList.add('is-active');
    }
  });
})();
