(function bootstrapCyferApp() {
  function initAOS() {
    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 1000, once: true });
    }
  }

  function initApp() {
    window.CyferComponents?.renderBackgroundComponent();
    window.CyferComponents?.renderCtaComponent();
    window.CyferComponents?.renderServicesGrid();
    window.CyferComponents?.renderTeamSlider();
    window.CyferComponents?.populateServiceSelectOptions();
    window.CyferComponents?.setActiveNav();
    window.CyferTheme?.initThemeToggle();
    window.CyferComponents?.initServiceSelect();
    window.CyferForms?.initContactForm();
    window.CyferTeamSlider?.initTeamSlider();
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
