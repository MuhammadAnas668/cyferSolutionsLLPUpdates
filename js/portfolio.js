(function registerPortfolioModule() {
  function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length && projectCards.length) {
      filterButtons.forEach((button) => {
        button.addEventListener('click', function onFilterClick() {
          filterButtons.forEach((btn) => btn.classList.remove('active'));
          this.classList.add('active');

          const filterValue = this.getAttribute('data-filter');
          projectCards.forEach((card) => {
            const category = card.getAttribute('data-category') || '';
            if (filterValue === 'all' || category.includes(filterValue)) {
              card.style.display = 'block';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            } else {
              card.style.opacity = '0';
              card.style.transform = 'translateY(20px)';
              setTimeout(() => {
                card.style.display = 'none';
              }, 300);
            }
          });
        });
      });
    }

    const statsSection = document.getElementById('stats-section');
    if (!statsSection) return;

    const animateCounter = (element, finalValue, suffix) => {
      if (!element) return;
      let startTime = null;

      function updateCounter(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / 2000, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(easeOut * finalValue);
        element.textContent = suffix === '%' ? `${value}${suffix}` : `${value.toLocaleString()}${suffix}`;

        if (value < finalValue) {
          requestAnimationFrame(updateCounter);
        } else {
          element.textContent =
            suffix === '%' ? `${finalValue}${suffix}` : `${finalValue.toLocaleString()}${suffix}`;
        }
      }

      requestAnimationFrame(updateCounter);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;

        observer.disconnect();
        setTimeout(() => animateCounter(document.getElementById('projects-count'), 24, '+'), 200);
        setTimeout(() => animateCounter(document.getElementById('clients-count'), 15, '+'), 500);
        setTimeout(() => animateCounter(document.getElementById('retention-count'), 98, '%'), 800);
        setTimeout(() => animateCounter(document.getElementById('users-count'), 50000, '+'), 1100);
      },
      { threshold: 0.5 }
    );

    observer.observe(statsSection);
  }

  window.CyferPortfolio = { initPortfolioFilter };
})();
