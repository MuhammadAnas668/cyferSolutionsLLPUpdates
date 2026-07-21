(function bootstrapCyferApp() {
  function initAOS() {
    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 1000, once: true });
    }
  }

  // ─── Mobile Services Dropdown ────────────────────────────────────────────
  function initMobileServicesDropdown() {
    var btn   = document.getElementById('mobile-services-btn');
    var popup = document.getElementById('mobile-services-popup');
    if (!btn || !popup) return;

    // Prevent attaching duplicate listeners
    if (btn.dataset.mobileInit === '1') return;
    btn.dataset.mobileInit = '1';

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var isHidden = popup.classList.contains('hidden');
      popup.classList.toggle('hidden', !isHidden);
      btn.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
    });

    document.addEventListener('click', function (e) {
      if (!popup.contains(e.target) && e.target !== btn) {
        popup.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ─── Active Nav Highlight ────────────────────────────────────────────────
  function setActiveNav() {
    var path = (window.location.pathname || window.location.href || '').toLowerCase();

    var page;
    if (path.includes('about')) {
      page = 'about';
    } else if (
      path.includes('services') ||
      path.includes('cyfer-connect') ||
      path.includes('cyfer-health-rcm')
    ) {
      // All service sub-pages highlight the Services nav item
      page = 'services';
    } else if (path.includes('contact')) {
      page = 'contact';
    } else if (path.includes('portfolio') || path.includes('case-study')) {
      page = 'portfolio';
    } else {
      page = 'index';
    }

    document.querySelectorAll('.nav-link').forEach(function (link) {
      link.classList.remove('nav-active');
      if ((link.getAttribute('data-page') || '').toLowerCase() === page) {
        link.classList.add('nav-active');
      }
    });
  }

  // ─── Main Init ───────────────────────────────────────────────────────────
  function initApp() {
    window.CyferComponents?.renderBackgroundComponent();
    window.CyferComponents?.renderCtaComponent();
    window.CyferComponents?.renderServicesGrid();
    window.CyferComponents?.renderTeamSlider();
    window.CyferComponents?.populateServiceSelectOptions();
    window.CyferComponents?.initServiceSelect();
    window.CyferTheme?.initThemeToggle();
    window.CyferForms?.initContactForm();
    window.CyferTeamSlider?.initTeamSlider();
    window.CyferPortfolio?.init();

    // Run these AFTER header is injected into DOM
    setActiveNav();
    initMobileServicesDropdown();

    initAOS();
  }

  async function start() {
    if (window.CyferComponents?.loadLayoutComponents) {
      await window.CyferComponents.loadLayoutComponents();
    }
    initApp();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();

