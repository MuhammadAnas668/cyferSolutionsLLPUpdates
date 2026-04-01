(function CyferPortfolioModule() {

  /* =============================================
     SHARED HELPERS
     ============================================= */
  function escHtml(str) {
    return String(str ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getBasePath() {
    const path = window.location.pathname || '';
    const idx = path.lastIndexOf('/');
    return idx >= 0 ? path.substring(0, idx + 1) : './';
  }

  /* =============================================
     PORTFOLIO GRID PAGE  (portfolio.html)
     ============================================= */
  function renderPortfolioGrid() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    const projects = window.CYFER_DATA?.portfolio || [];
    if (!projects.length) {
      grid.innerHTML = '<p class="text-center col-span-3 text-slate-500 py-16">No projects found.</p>';
      return;
    }

    grid.innerHTML = projects.map((p, i) => {
      const delay = i > 0 ? ` data-aos-delay="${Math.min(i * 80, 400)}"` : '';
      const techsHtml = (p.technologies || []).slice(0, 4)
        .map(t => `<span class="cs-tech-pill"><i class="fas fa-check text-xs"></i>${escHtml(t)}</span>`)
        .join('');

      return `
        <article
          class="portfolio-card"
          data-category="${escHtml(p.category)}"
          data-aos="fade-up"${delay}
          id="pcard-${escHtml(p.id)}"
        >
          <div class="portfolio-card-img-wrap">
            <img
              src="${escHtml(p.image)}"
              alt="${escHtml(p.title)} project thumbnail"
              loading="lazy"
              decoding="async"
            >
            <div class="portfolio-card-overlay"></div>
            <span class="portfolio-card-cat ${escHtml(p.categoryBg)} ${escHtml(p.categoryColor)}">
              <i class="${escHtml(p.categoryIcon)}"></i>
              ${escHtml(p.category)}
            </span>
          </div>
          <div class="portfolio-card-body">
            <h2 class="portfolio-card-title">${escHtml(p.title)}</h2>
            <p class="portfolio-card-desc">${escHtml(p.tagline)}</p>
            <a href="${p.websiteUrl ? escHtml(p.websiteUrl) : '#'}" target="_blank" rel="noopener noreferrer" class="portfolio-card-cta" id="cta-site-${escHtml(p.id)}" aria-label="Visit Website for ${escHtml(p.title)}">
              Visit Website <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
        </article>
      `;
    }).join('');

    initPortfolioFilter();
  }

  /* ---- Filter Logic ---- */
  function initPortfolioFilter() {
    const bar = document.getElementById('portfolio-filter-bar');
    if (!bar) return;

    bar.addEventListener('click', function(e) {
      const btn = e.target.closest('.portfolio-filter-btn');
      if (!btn) return;

      bar.querySelectorAll('.portfolio-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      document.querySelectorAll('.portfolio-card').forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('hidden-card');
          card.style.display = '';
        } else {
          card.classList.add('hidden-card');
        }
      });
    });
  }

  /* =============================================
     CASE STUDY DETAIL PAGE  (case-study.html)
     ============================================= */
  function renderCaseStudy() {
    const main = document.getElementById('case-study-main');
    if (!main) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const projects = window.CYFER_DATA?.portfolio || [];
    const project = projects.find(p => p.id === id);
    const loading = document.getElementById('cs-loading');

    if (!project) {
      if (loading) loading.remove();
      main.innerHTML = `
        <div class="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
          <div class="text-6xl mb-6">🔍</div>
          <h1 class="text-3xl font-black mb-4">Case Study Not Found</h1>
          <p class="text-slate-500 mb-8">We couldn't find a project with that ID.</p>
          <a href="portfolio.html" class="cs-back-btn"><i class="fas fa-arrow-left"></i> Back to Portfolio</a>
        </div>`;
      return;
    }

    document.title = `${project.title} Case Study | Cyfer Solutions`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', project.tagline);

    const idx = projects.indexOf(project);
    const prevP = idx > 0 ? projects[idx - 1] : null;
    const nextP = idx < projects.length - 1 ? projects[idx + 1] : null;

    const accentGrad = `linear-gradient(135deg, ${project.accentColor}, ${project.accentLight})`;

    /* Metrics */
    const metricsHtml = (project.results || []).map((r, i) => `
      <div class="cs2-metric" data-aos="fade-up" data-aos-delay="${i * 80}">
        <div class="cs2-metric-value" style="color:${escHtml(project.accentColor)}">${escHtml(r.metric)}</div>
        <div class="cs2-metric-label">${escHtml(r.label)}</div>
      </div>`).join('');

    /* Tech pills */
    const techHtml = (project.technologies || []).map(t =>
      `<span class="cs-tech-pill"><i class="fas fa-check-circle text-xs"></i>${escHtml(t)}</span>`
    ).join('');

    /* Services */
    const servicesHtml = (project.servicesProvided || []).map(s =>
      `<span class="cs2-service-tag">${escHtml(s)}</span>`
    ).join('');

    /* Approach steps */
    const approachHtml = (project.approach || []).map((step, i) => `
      <div class="cs2-step" data-aos="fade-up" data-aos-delay="${i * 90}">
        <div class="cs2-step-num" style="background:${accentGrad}">0${i + 1}</div>
        <div class="cs2-step-icon" style="background:${accentGrad}">
          <i class="${escHtml(step.icon)}"></i>
        </div>
        <div class="cs2-step-body">
          <h4 class="cs2-step-title">${escHtml(step.title)}</h4>
          <p class="cs2-step-desc">${escHtml(step.desc)}</p>
        </div>
      </div>`).join('');

    /* Adjacent navigation */
    const prevHtml = prevP
      ? `<a href="case-study.html?id=${encodeURIComponent(prevP.id)}" class="cs2-nav-btn" id="cs-prev-link">
           <i class="fas fa-arrow-left"></i>
           <span><small>Previous</small><strong>${escHtml(prevP.title)}</strong></span>
         </a>` : '<span></span>';
    const nextHtml = nextP
      ? `<a href="case-study.html?id=${encodeURIComponent(nextP.id)}" class="cs2-nav-btn cs2-nav-btn-right" id="cs-next-link">
           <span><small>Next</small><strong>${escHtml(nextP.title)}</strong></span>
           <i class="fas fa-arrow-right"></i>
         </a>` : '<span></span>';

    /* Website Live URL (optional) */
    const websiteHtml = project.websiteUrl
      ? `<a href="${escHtml(project.websiteUrl)}" target="_blank" rel="noopener noreferrer" class="cs2-hero-btn-ghost" title="Visit Live Website">
           <i class="fas fa-external-link-alt"></i> Visit Website
         </a>` : '';

    const content = `

      <!-- ══ 1. HERO ══ -->
      <div class="cs2-hero" data-aos="fade-in">
        <img src="${escHtml(project.image)}" alt="${escHtml(project.title)} hero" class="cs2-hero-img">
        <div class="cs2-hero-overlay"></div>
        <div class="cs2-hero-content">
          <span class="cs2-hero-cat"><i class="${escHtml(project.categoryIcon)}"></i> ${escHtml(project.category)}</span>
          <h1 class="cs2-hero-title">${escHtml(project.title)}</h1>
          <p class="cs2-hero-tagline">${escHtml(project.tagline)}</p>
          <div class="cs2-hero-cta-row">
            <a href="contact.html" class="cs2-hero-btn" style="background:${accentGrad}" id="cs-hero-cta">
              <i class="fas fa-rocket"></i> Start Your Project
            </a>
            <a href="portfolio.html" class="cs2-hero-btn-ghost" id="cs-hero-back">
              <i class="fas fa-th-large"></i> All Projects
            </a>
            ${websiteHtml}
          </div>
        </div>
      </div>

      <!-- ══ 2. STATS BAR ══ -->
      <div class="cs2-stats-bar" data-aos="fade-up">
        <div class="max-w-6xl mx-auto px-4">
          <div class="cs2-stats-inner">
            <div class="cs2-stat">
              <i class="fas fa-building cs2-stat-icon" style="color:${escHtml(project.accentColor)}"></i>
              <div>
                <div class="cs2-stat-label">Client</div>
                <div class="cs2-stat-value">${escHtml(project.client || 'Confidential')}</div>
              </div>
            </div>
            <div class="cs2-stat-divider"></div>
            <div class="cs2-stat">
              <i class="fas fa-tag cs2-stat-icon" style="color:${escHtml(project.accentColor)}"></i>
              <div>
                <div class="cs2-stat-label">Industry</div>
                <div class="cs2-stat-value">${escHtml(project.industry || project.category)}</div>
              </div>
            </div>
            <div class="cs2-stat-divider"></div>
            <div class="cs2-stat">
              <i class="fas fa-calendar-alt cs2-stat-icon" style="color:${escHtml(project.accentColor)}"></i>
              <div>
                <div class="cs2-stat-label">Duration</div>
                <div class="cs2-stat-value">${escHtml(project.duration || 'Custom')}</div>
              </div>
            </div>
            <div class="cs2-stat-divider"></div>
            <div class="cs2-stat">
              <i class="${escHtml(project.categoryIcon)} cs2-stat-icon" style="color:${escHtml(project.accentColor)}"></i>
              <div>
                <div class="cs2-stat-label">Category</div>
                <div class="cs2-stat-value">${escHtml(project.category)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ══ BREADCRUMB ══ -->
      <div class="max-w-6xl mx-auto px-4 py-5">
        <nav class="cs-breadcrumb" aria-label="Breadcrumb">
          <a href="index.html">Home</a>
          <i class="fas fa-chevron-right text-xs opacity-40"></i>
          <a href="portfolio.html">Portfolio</a>
          <i class="fas fa-chevron-right text-xs opacity-40"></i>
          <span>${escHtml(project.title)}</span>
        </nav>
      </div>

      <!-- ══ 3. TWO-COLUMN LAYOUT ══ -->
      <div class="max-w-6xl mx-auto px-4 pb-4">
        <div class="cs2-layout">

          <!-- Main storytelling column -->
          <div class="cs2-main">

            <!-- Overview -->
            <section class="cs2-section" data-aos="fade-up">
              <div class="cs2-eyebrow"><span class="cs2-eyebrow-line" style="background:${accentGrad}"></span>Project Overview</div>
              <h2 class="cs2-section-title">About This Project</h2>
              <p class="cs2-body-text">${escHtml(project.overview)}</p>
            </section>

            <!-- Problem -->
            <section class="cs2-section" data-aos="fade-up">
              <div class="cs2-eyebrow"><span class="cs2-eyebrow-line" style="background:linear-gradient(135deg,#dc2626,#ea580c)"></span>The Challenge</div>
              <h2 class="cs2-section-title">Problem Statement</h2>
              <div class="cs2-problem-box">
                <div class="cs2-problem-icon">
                  <i class="fas fa-exclamation-triangle"></i>
                </div>
                <div>
                  <h3 class="cs2-problem-heading">What wasn't working</h3>
                  <p class="cs2-body-text">${escHtml(project.problem)}</p>
                </div>
              </div>
            </section>

            <!-- Approach Steps -->
            <section class="cs2-section" data-aos="fade-up">
              <div class="cs2-eyebrow"><span class="cs2-eyebrow-line" style="background:linear-gradient(135deg,#16a34a,#2563eb)"></span>Our Approach</div>
              <h2 class="cs2-section-title">How We Solved It</h2>
              <p class="cs2-body-text">${escHtml(project.solution)}</p>
              <div class="cs2-steps">${approachHtml}</div>
            </section>

            <!-- Visual Showcase -->
            <section class="cs2-section" data-aos="fade-up">
              <div class="cs2-eyebrow"><span class="cs2-eyebrow-line" style="background:${accentGrad}"></span>Visual Showcase</div>
              <h2 class="cs2-section-title">Project in Action</h2>
              <div class="cs2-showcase">
                <div class="cs2-showcase-frame">
                  <div class="cs2-showcase-bar">
                    <span class="cs2-dot" style="background:#ef4444"></span>
                    <span class="cs2-dot" style="background:#f59e0b"></span>
                    <span class="cs2-dot" style="background:#22c55e"></span>
                    <span class="cs2-showcase-url">${escHtml((project.client || project.title).toLowerCase().replace(/[^a-z0-9]/g,''))}.cyfer.app</span>
                  </div>
                  <div class="cs2-showcase-img-wrap">
                    <img src="${escHtml(project.image)}" alt="${escHtml(project.title)} UI screenshot" class="cs2-showcase-img">
                  </div>
                </div>
                <p class="cs2-showcase-caption"><i class="fas fa-camera text-xs mr-1.5 opacity-60"></i>${escHtml(project.title)} — Primary dashboard interface &amp; user-facing screens</p>
              </div>
            </section>

          </div><!-- /cs2-main -->

          <!-- Sticky sidebar -->
          <aside class="cs2-sidebar">

            <!-- Project Details -->
            <div class="cs2-info-card" data-aos="fade-up" data-aos-delay="100">
              <div class="cs2-info-card-header" style="background:${accentGrad}">
                <i class="fas fa-folder-open mr-2"></i> Project Details
              </div>
              <div class="cs2-info-body">
                <div class="cs2-info-row">
                  <span class="cs2-info-label"><i class="fas fa-building"></i> Client</span>
                  <span class="cs2-info-val">${escHtml(project.client || 'Confidential')}</span>
                </div>
                <div class="cs2-info-row">
                  <span class="cs2-info-label"><i class="fas fa-tag"></i> Industry</span>
                  <span class="cs2-info-val">${escHtml(project.industry || project.category)}</span>
                </div>
                <div class="cs2-info-row">
                  <span class="cs2-info-label"><i class="fas fa-clock"></i> Duration</span>
                  <span class="cs2-info-val">${escHtml(project.duration || 'Custom Timeline')}</span>
                </div>
                <div class="cs2-info-row cs2-info-row-block">
                  <span class="cs2-info-label"><i class="fas fa-layer-group"></i> Services</span>
                  <div class="cs2-services-wrap">${servicesHtml}</div>
                </div>
              </div>
            </div>

            <!-- Tech Stack -->
            <div class="cs2-info-card" data-aos="fade-up" data-aos-delay="150">
              <div class="cs2-info-card-header" style="background:${accentGrad}">
                <i class="fas fa-microchip mr-2"></i> Tech Stack
              </div>
              <div class="cs2-info-body">
                <div class="cs-tech-grid">${techHtml}</div>
              </div>
            </div>

            <!-- Sidebar CTA -->
            <div class="cs2-sidebar-cta" data-aos="fade-up" data-aos-delay="200"
                 style="border-color:${escHtml(project.accentColor)}40">
              <div class="cs2-sidebar-cta-icon" style="background:${accentGrad}">
                <i class="${escHtml(project.categoryIcon)}"></i>
              </div>
              <h4 class="cs2-sidebar-cta-heading">Start a Similar Project</h4>
              <p class="cs2-sidebar-cta-text">Want results like these? Let's talk about what we can build for you.</p>
              <a href="contact.html" class="cs2-sidebar-cta-btn" style="background:${accentGrad}" id="cs-sidebar-cta-btn">
                Get in Touch <i class="fas fa-arrow-right"></i>
              </a>
            </div>

          </aside>
        </div>
      </div>

      <!-- ══ 4. RESULTS ══ -->
      <div class="cs2-results-section" data-aos="fade-up">
        <div class="max-w-6xl mx-auto px-4">
          <div class="cs2-results-inner">
            <div class="text-center mb-10">
              <div class="cs2-eyebrow justify-center">
                <span class="cs2-eyebrow-line" style="background:${accentGrad}"></span>
                Impact &amp; Outcomes
                <span class="cs2-eyebrow-line" style="background:${accentGrad}"></span>
              </div>
              <h2 class="cs2-section-title">The Results Speak for Themselves</h2>
            </div>
            <div class="cs2-metrics-grid">${metricsHtml}</div>
          </div>
        </div>
      </div>

      <!-- ══ 5. PREV / NEXT NAV ══ -->
      <div class="max-w-6xl mx-auto px-4 py-10">
        <div class="cs2-project-nav">
          ${prevHtml}
          <a href="portfolio.html" class="cs2-nav-all" id="cs-nav-portfolio">
            <i class="fas fa-th-large"></i><span>All Projects</span>
          </a>
          ${nextHtml}
        </div>
      </div>

      <!-- ══ 6. BOTTOM CTA ══ -->
      <div class="max-w-5xl mx-auto px-4 pb-20">
        <div class="cs2-cta-block" data-aos="zoom-in"
             style="background:linear-gradient(-45deg,#1e3a5f,${escHtml(project.accentColor)},${escHtml(project.accentLight)},#1e3a5f);background-size:300% 300%;animation:gradient-shift 8s ease infinite;">
          <div class="absolute inset-0 rounded-[2.5rem] bg-black/15"></div>
          <div class="relative z-10 text-center">
            <div class="cs2-cta-badge">✦ Ready to build?</div>
            <h2 class="cs2-cta-heading">Inspired by This Project?</h2>
            <p class="cs2-cta-sub">Let's design and build something exceptional together — from concept to launch.</p>
            <div class="cs2-cta-btns">
              <a href="contact.html" class="cs2-cta-btn-primary" id="cs-cta-contact">
                <i class="fas fa-rocket"></i> Start Your Project
              </a>
              <a href="portfolio.html" class="cs2-cta-btn-ghost" id="cs-cta-portfolio">
                <i class="fas fa-th-large"></i> View All Work
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    if (loading) loading.remove();
    main.innerHTML = content;
    if (typeof AOS !== 'undefined') { AOS.refreshHard(); }
  }

  /* =============================================
     HOMEPAGE PORTFOLIO PREVIEW (index.html)
     ============================================= */
  function renderPortfolioPreview() {
    const container = document.getElementById('portfolio-preview-grid');
    if (!container) return;

    const projects = (window.CYFER_DATA?.portfolio || []).slice(0, 3);
    container.innerHTML = projects.map((p, i) => {
      const delay = i > 0 ? ` data-aos-delay="${i * 120}"` : '';
      return `
        <article class="portfolio-preview-card" data-aos="fade-up"${delay}>
          <div class="portfolio-preview-img-wrap">
            <img src="${escHtml(p.image)}" alt="${escHtml(p.title)}" loading="lazy" decoding="async">
            <div class="portfolio-preview-img-overlay"></div>
            <span class="portfolio-card-cat ${escHtml(p.categoryBg)} ${escHtml(p.categoryColor)}" style="font-size:0.66rem;">
              <i class="${escHtml(p.categoryIcon)}"></i>${escHtml(p.category)}
            </span>
          </div>
          <div class="portfolio-preview-body">
            <h3 class="portfolio-preview-title">${escHtml(p.title)}</h3>
            <p class="portfolio-preview-desc">${escHtml(p.tagline)}</p>
            <a href="${p.websiteUrl ? escHtml(p.websiteUrl) : '#'}" target="_blank" rel="noopener noreferrer" class="portfolio-preview-cta" id="preview-site-${escHtml(p.id)}">
              Visit Website <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
        </article>
      `;
    }).join('');
  }

  /* =============================================
     BOOT
     ============================================= */
  function init() {
    renderPortfolioGrid();
    renderCaseStudy();
    renderPortfolioPreview();
  }

  /* Expose to app.js */
  window.CyferPortfolio = { init };

})();
