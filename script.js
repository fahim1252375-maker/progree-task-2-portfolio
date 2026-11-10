(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Mobile navigation disclosure with keyboard focus management.
  const toggle = $('#menuToggle');
  const nav = $('#primaryNav');
  const closeMenu = ({ returnFocus = false } = {}) => {
    nav?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.setAttribute('aria-label', 'Open navigation');
    if (returnFocus) toggle?.focus();
  };

  toggle?.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu();
      return;
    }

    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close navigation');
    nav?.classList.add('open');
    nav?.querySelector('a[href]')?.focus();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') {
      event.preventDefault();
      closeMenu({ returnFocus: true });
    }
  });

  $$('#primaryNav a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
      const destination = link.getAttribute('href');
      if (destination?.startsWith('#')) {
        const target = $(destination);
        if (target) {
          if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
          window.requestAnimationFrame(() => target.focus({ preventScroll: true }));
        }
      }
    });
  });

  // Reset the disclosure state when moving back to the desktop layout.
  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 651px)').matches) closeMenu();
  }, { passive: true });

  // Scroll progress and back-to-top control.
  const progress = $('#scrollProgress');
  const backTop = $('#backTop');
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = max > 0 ? (window.scrollY / max) * 100 : 0;
    if (progress) progress.style.width = `${Math.min(100, percentage)}%`;
    backTop?.classList.toggle('visible', window.scrollY > 550);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  backTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });

  // Reveal elements only when they enter the viewport.
  const revealItems = $$('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('in-view'));
  }

  // Project category filters expose their selected state to assistive technology.
  const filterButtons = $$('.filter-btn');
  const projectCards = $$('.project-card');
  const emptyState = $('#emptyState');
  filterButtons.forEach(button => {
    button.setAttribute('aria-pressed', String(button.classList.contains('active')));
    button.addEventListener('click', () => {
      filterButtons.forEach(item => {
        const selected = item === button;
        item.classList.toggle('active', selected);
        item.setAttribute('aria-pressed', String(selected));
      });

      const filter = button.dataset.filter;
      let visible = 0;
      projectCards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.hidden = !show;
        if (show) visible += 1;
      });
      if (emptyState) emptyState.hidden = visible > 0;
    });
  });

  // Subtle pointer tilt on larger screens, disabled for touch and reduced motion.
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  if (!prefersReducedMotion && finePointer) {
    $$('.tilt-card').forEach(card => {
      card.addEventListener('pointermove', event => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(900px) rotateX(${(-y * 2.2).toFixed(2)}deg) rotateY(${(x * 2.2).toFixed(2)}deg) translateY(-2px)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
  }

  // Copy email address with a safe fallback for browsers without Clipboard API access.
  const copyButton = $('#copyEmail');
  const copyStatus = $('#copyStatus');
  copyButton?.addEventListener('click', async () => {
    const email = copyButton.dataset.email;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const field = document.createElement('textarea');
        field.value = email;
        field.setAttribute('readonly', '');
        field.style.position = 'absolute';
        field.style.left = '-9999px';
        document.body.appendChild(field);
        field.select();
        const copied = document.execCommand('copy');
        field.remove();
        if (!copied) throw new Error('Copy command unavailable');
      }
      if (copyStatus) copyStatus.textContent = 'Copied';
    } catch {
      if (copyStatus) copyStatus.textContent = 'Use the email link above';
    }
    window.setTimeout(() => {
      if (copyStatus) copyStatus.textContent = '';
    }, 2400);
  });

  const year = $('#year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
