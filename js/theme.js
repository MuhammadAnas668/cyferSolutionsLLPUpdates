(function registerThemeModule() {
  function initTheme() {
    if (
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  function initThemeToggle() {
    const btn = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon');
    if (!btn || !icon) return;

    function updateUI() {
      if (document.documentElement.classList.contains('dark')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        icon.classList.add('text-yellow-400');
        icon.classList.remove('text-slate-600');
      } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        icon.classList.add('text-slate-600');
        icon.classList.remove('text-yellow-400');
      }
    }

    updateUI();
    btn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem(
        'theme',
        document.documentElement.classList.contains('dark') ? 'dark' : 'light'
      );
      updateUI();
    });
  }

  initTheme();
  window.CyferTheme = { initTheme, initThemeToggle };
})();
