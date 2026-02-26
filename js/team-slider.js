(function registerTeamSliderModule() {
  function initTeamSlider() {
    const section = document.getElementById('team-section');
    const track = document.getElementById('team-slider-track');
    const prevBtn = document.getElementById('team-slider-prev');
    const nextBtn = document.getElementById('team-slider-next');
    const dotsWrap = document.getElementById('team-slider-dots');
    if (!track || !prevBtn || !nextBtn || !dotsWrap || track.dataset.ready === '1') return;
    track.dataset.ready = '1';

    const slides = Array.from(track.querySelectorAll('.team-slide'));
    if (!slides.length) return;

    const step = () => {
      const firstSlide = slides[0];
      if (!firstSlide) return Math.max(160, Math.round(track.clientWidth * 0.68));
      const trackStyles = window.getComputedStyle(track);
      const gap = parseFloat(trackStyles.columnGap || trackStyles.gap || '0') || 0;
      return Math.round(firstSlide.getBoundingClientRect().width + gap);
    };
    const jump = () => Math.max(step(), Math.round(step() * 1.2));
    const getActiveIndex = () => {
      const center = track.scrollLeft + (track.clientWidth / 2);
      let active = 0;
      let minDistance = Number.POSITIVE_INFINITY;
      slides.forEach((slide, idx) => {
        const slideCenter = slide.offsetLeft + (slide.offsetWidth / 2);
        const distance = Math.abs(slideCenter - center);
        if (distance < minDistance) {
          minDistance = distance;
          active = idx;
        }
      });
      return active;
    };

    const dots = slides.map((_, idx) => {
      const dot = document.createElement('button');
      dot.className = 'team-slider-dot';
      dot.type = 'button';
      dot.setAttribute('aria-label', `Go to slide ${idx + 1}`);
      dot.addEventListener('click', () => {
        stopAuto();
        track.scrollTo({ left: slides[idx].offsetLeft, behavior: 'smooth' });
        queueAutoRestart();
      });
      dotsWrap.appendChild(dot);
      return dot;
    });

    const updateState = () => {
      const maxScrollLeft = Math.max(0, track.scrollWidth - track.clientWidth - 2);
      prevBtn.disabled = track.scrollLeft <= 2;
      nextBtn.disabled = track.scrollLeft >= maxScrollLeft;
      const active = getActiveIndex();
      dots.forEach((dot, idx) => dot.classList.toggle('active', idx === active));
    };

    let autoTimer = null;
    let autoRestartTimer = null;
    const stopAuto = () => {
      if (autoTimer) clearInterval(autoTimer);
      autoTimer = null;
    };
    const startAuto = () => {
      stopAuto();
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (modal && modal.getAttribute('aria-hidden') === 'false') return;
      autoTimer = setInterval(() => {
        const maxScrollLeft = Math.max(0, track.scrollWidth - track.clientWidth - 4);
        if (track.scrollLeft >= maxScrollLeft) {
          track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          track.scrollBy({ left: step(), behavior: 'smooth' });
        }
      }, 4200);
    };
    const queueAutoRestart = () => {
      if (autoRestartTimer) clearTimeout(autoRestartTimer);
      autoRestartTimer = setTimeout(startAuto, 5500);
    };

    prevBtn.addEventListener('click', () => {
      stopAuto();
      track.scrollBy({ left: -jump(), behavior: 'smooth' });
      queueAutoRestart();
    });
    nextBtn.addEventListener('click', () => {
      stopAuto();
      track.scrollBy({ left: jump(), behavior: 'smooth' });
      queueAutoRestart();
    });

    let scrollTicking = false;
    const scheduleUpdateState = () => {
      if (scrollTicking) return;
      scrollTicking = true;
      window.requestAnimationFrame(() => {
        updateState();
        scrollTicking = false;
      });
    };

    track.addEventListener('scroll', scheduleUpdateState, { passive: true });
    window.addEventListener('resize', scheduleUpdateState);
    (section || track).addEventListener('mouseenter', stopAuto);
    (section || track).addEventListener('mouseleave', startAuto);
    (section || track).addEventListener('focusin', stopAuto);
    (section || track).addEventListener('focusout', queueAutoRestart);
    track.addEventListener('touchstart', stopAuto, { passive: true });
    track.addEventListener('touchend', queueAutoRestart, { passive: true });
    track.addEventListener(
      'wheel',
      (e) => {
        const verticalIntent = Math.abs(e.deltaY) > Math.abs(e.deltaX);
        const wantsHorizontal = !verticalIntent || e.shiftKey;
        if (!wantsHorizontal) return;

        const delta = Math.abs(e.deltaX) > 0 ? e.deltaX : e.deltaY;
        if (!delta) return;

        const maxScrollLeft = Math.max(0, track.scrollWidth - track.clientWidth);
        const targetLeft = track.scrollLeft + (delta * 1.45);
        const hittingStart = targetLeft <= 0 && delta < 0;
        const hittingEnd = targetLeft >= maxScrollLeft && delta > 0;
        if (hittingStart || hittingEnd) return;

        e.preventDefault();
        stopAuto();
        track.scrollLeft = Math.max(0, Math.min(maxScrollLeft, targetLeft));
        queueAutoRestart();
      },
      { passive: false }
    );

    const modal = document.getElementById('team-modal');
    const modalImage = document.getElementById('team-modal-image');
    const modalName = document.getElementById('team-modal-name');
    const modalRole = document.getElementById('team-modal-role');
    const modalBio = document.getElementById('team-modal-bio');
    const modalCloseEls = document.querySelectorAll('[data-team-modal-close]');
    const profileButtons = track.querySelectorAll('.team-slide-profile');
    const closeModal = () => {
      if (!modal) return;
      modal.classList.add('hidden');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      queueAutoRestart();
    };
    if (modal && modalImage && modalName && modalRole && modalBio) {
      profileButtons.forEach((button) => {
        button.addEventListener('click', () => {
          stopAuto();
          if (autoRestartTimer) clearTimeout(autoRestartTimer);
          modalImage.src = button.dataset.photo || '';
          modalImage.alt = `${button.dataset.name || 'Team member'} portrait`;
          modalName.textContent = button.dataset.name || 'Team Member';
          modalRole.textContent = `${button.dataset.role || 'Team Role'}${button.dataset.city ? `, ${button.dataset.city}` : ''}`;
          modalBio.textContent = button.dataset.bio || '';
          modal.classList.remove('hidden');
          modal.setAttribute('aria-hidden', 'false');
          document.body.style.overflow = 'hidden';
        });
      });
      modalCloseEls.forEach((el) => el.addEventListener('click', closeModal));
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal();
      });
    }

    updateState();
    startAuto();
  }

  window.CyferTeamSlider = { initTeamSlider };
})();
