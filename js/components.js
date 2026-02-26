(function registerComponentsModule() {
  function getBasePath() {
    const path = window.location.pathname || '';
    const idx = path.lastIndexOf('/');
    return idx >= 0 ? path.substring(0, idx + 1) : './';
  }

  async function loadLayoutComponents() {
    const headerEl = document.getElementById('header-placeholder');
    const footerEl = document.getElementById('footer-placeholder');
    const base = getBasePath();

    try {
      if (headerEl) {
        const res = await fetch(base + 'components/header.html');
        if (res.ok) headerEl.outerHTML = await res.text();
      }
      if (footerEl) {
        const res = await fetch(base + 'components/footer.html');
        if (res.ok) footerEl.outerHTML = await res.text();
      }
    } catch (error) {
      console.warn('Run via HTTP server (e.g. npx serve) for dynamic header/footer:', error);
    }
  }

  function setActiveNav() {
    const path = (window.location.pathname || window.location.href || '').toLowerCase();
    const page = path.includes('about')
      ? 'about'
      : path.includes('services')
        ? 'services'
        : path.includes('portfolio')
          ? 'portfolio'
          : path.includes('contact')
            ? 'contact'
            : 'index';

    document.querySelectorAll('.nav-link').forEach((link) => {
      link.classList.remove('nav-active');
      if ((link.getAttribute('data-page') || '').toLowerCase() === page) {
        link.classList.add('nav-active');
      }
    });
  }

  function renderBackgroundComponent() {
    const placeholder = document.getElementById('background-placeholder');
    if (!placeholder) return;

    const variant = placeholder.dataset.bgVariant || 'default';
    const backgrounds = window.CYFER_DATA?.backgroundVariants || {};
    const bubbles = backgrounds[variant] || backgrounds.default || [];
    const bubblesHtml = bubbles
      .map((bubble) => {
        const styleAttr = bubble.style ? ` style="${bubble.style}"` : '';
        return `<div class="${bubble.className}"${styleAttr}></div>`;
      })
      .join('');

    placeholder.outerHTML = `
      <div class="fixed inset-0 overflow-hidden pointer-events-none">
        ${bubblesHtml}
      </div>
    `;
  }

  function ctaButtonClass(variant) {
    if (variant === 'secondary') {
      return 'px-12 py-5 glass border border-white/30 text-white rounded-2xl font-bold hover:bg-white/10 transition-all';
    }
    return 'px-12 py-5 bg-white text-[#1e3a5f] rounded-2xl font-bold hover:bg-slate-100 hover:shadow-2xl transition-all active:scale-95';
  }

  function renderCtaComponent() {
    const placeholder = document.getElementById('cta-placeholder');
    if (!placeholder) return;

    const ctaKey = placeholder.dataset.ctaKey;
    const cfg = window.CYFER_DATA?.cta?.[ctaKey];
    if (!cfg) return;

    const buttonsHtml = (cfg.buttons || [])
      .map((button) => {
        const iconHtml = button.icon ? `<i class="${button.icon} mr-2"></i>` : '';
        return `<a href="${button.href}" class="${ctaButtonClass(button.variant)}">${iconHtml}${button.label}</a>`;
      })
      .join('');
    const buttonWrapperClass = (cfg.buttons || []).length > 1
      ? 'flex flex-col sm:flex-row gap-4 justify-center'
      : '';

    placeholder.outerHTML = `
      <section class="${cfg.sectionClasses}" data-aos="zoom-in">
        <div class="${cfg.cardClasses}" style="background: linear-gradient(-45deg, #1e3a5f, #dc2626, #2563eb, #1e3a5f);">
          <div class="${cfg.overlayClasses}"></div>
          <div class="relative z-10">
            <h2 class="text-4xl font-black mb-6">${cfg.heading}</h2>
            <p class="text-white/90 text-lg mb-10 max-w-2xl mx-auto">${cfg.text}</p>
            <div class="${buttonWrapperClass}">
              ${buttonsHtml}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderServicesGrid() {
    const servicesGrid = document.getElementById('services-grid');
    if (!servicesGrid) return;

    const services = window.CYFER_DATA?.services || [];
    servicesGrid.innerHTML = services
      .map((service, idx) => {
        const delay = idx > 0 ? ` data-aos-delay="${Math.min(idx * 100, 900)}"` : '';
        const featuresHtml = (service.features || [])
          .map(
            (feature) =>
              `<div class="flex items-center gap-3"><i class="fas fa-check text-[#16a34a]"></i><span class="text-sm">${feature}</span></div>`
          )
          .join('');

        return `
          <div class="service-card glass p-10 rounded-[2.5rem] border border-white/20 dark:border-slate-800" data-aos="zoom-in"${delay}>
            <div class="service-icon w-20 h-20 bg-gradient-to-br ${service.iconGradient} rounded-2xl flex items-center justify-center text-white text-3xl mb-8"><i class="${service.icon}"></i></div>
            <h3 class="text-2xl font-bold mb-4 ${service.titleClass}">${service.title}</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-6">${service.description}</p>
            <div class="space-y-4">
              ${featuresHtml}
            </div>
          </div>
        `;
      })
      .join('');
  }

  function populateServiceSelectOptions() {
    const select = document.getElementById('service');
    if (!select) return;

    const services = window.CYFER_DATA?.services || [];
    const selected = select.value;
    const optionsHtml = services
      .map((service) => `<option value="${service.value}">${service.title}</option>`)
      .join('');

    select.innerHTML = `
      <option value="" disabled selected>Select a service</option>
      ${optionsHtml}
      <option value="other">Other</option>
    `;
    if (selected) select.value = selected;
  }

  function initServiceSelect() {
    const select = document.getElementById('service');
    if (!select || select.dataset.enhanced === '1') return;

    const options = Array.from(select.options).filter((option) => option.value);
    if (!options.length) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'cyfer-select-wrapper relative';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className =
      'contact-input w-full px-6 py-4 glass border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-[#1d4ed8] outline-none text-left flex items-center justify-between';

    const selectedOption = options.find((option) => option.selected);
    const selectedText = selectedOption ? selectedOption.text : 'Select a service';
    btn.innerHTML = `<span class="select-text">${selectedText}</span><i class="fas fa-chevron-down text-slate-500"></i>`;

    const dropdown = document.createElement('div');
    dropdown.className =
      'cyfer-dropdown absolute left-0 right-0 top-full mt-1 py-2 rounded-xl bg-slate-800 dark:bg-slate-900 border border-slate-700 shadow-xl z-50 hidden';

    options.forEach((option) => {
      const item = document.createElement('div');
      item.className =
        'px-4 py-3 cursor-pointer text-slate-300 hover:bg-[#1d4ed8] hover:text-white transition-colors';
      item.textContent = option.text;
      item.dataset.value = option.value;
      item.addEventListener('click', () => {
        select.value = option.value;
        btn.querySelector('.select-text').textContent = option.text;
        dropdown.classList.add('hidden');
        select.dispatchEvent(new Event('change', { bubbles: true }));
      });
      dropdown.appendChild(item);
    });

    wrapper.appendChild(btn);
    wrapper.appendChild(dropdown);
    select.parentNode.insertBefore(wrapper, select);

    select.style.position = 'absolute';
    select.style.opacity = '0';
    select.style.pointerEvents = 'none';
    select.style.width = '0';
    select.dataset.enhanced = '1';

    btn.addEventListener('click', (event) => {
      event.stopPropagation();
      dropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', () => dropdown.classList.add('hidden'));
  }

  window.CyferComponents = {
    loadLayoutComponents,
    setActiveNav,
    renderBackgroundComponent,
    renderCtaComponent,
    renderServicesGrid,
    populateServiceSelectOptions,
    initServiceSelect
  };
})();
