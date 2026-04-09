/* ============================================================
   UI-LIB — MAIN.JS
   Theme · Nav · Dropdown · Lightbox · Stats counter · Reveal
   ============================================================ */
(function () {
  'use strict';

  /* Theme toggle
     Reads/writes data-theme="light"|"dark" on <html>
     Persists in localStorage under key 'ui-lib-theme'         */
  const THEME_KEY = 'ui-lib-theme';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelectorAll('[data-theme-icon]').forEach(el => {
      el.textContent = theme === 'dark' ? '◑' : '●';
    });
    localStorage.setItem(THEME_KEY, theme);
  }

  applyTheme(localStorage.getItem(THEME_KEY) || 'light');

  document.addEventListener('click', e => {
    if (e.target.closest('[data-action="toggle-theme"]')) {
      const cur = document.documentElement.getAttribute('data-theme');
      applyTheme(cur === 'dark' ? 'light' : 'dark');
    }
  });


  /* Nav scroll state — adds .scrolled to .nav after 8px */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }


  /* Mobile hamburger — toggles .open on .nav-hamburger + .nav-mobile */
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-action="toggle-mobile-nav"]');
    if (!btn) return;
    const isOpen = btn.classList.toggle('open');
    document.querySelector('.nav-mobile')?.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  document.querySelectorAll('.nav-mobile-link').forEach(l => {
    l.addEventListener('click', () => {
      document.querySelector('.nav-hamburger')?.classList.remove('open');
      document.querySelector('.nav-mobile')?.classList.remove('open');
      document.body.style.overflow = '';
    });
  });


  /* Dropdown menus — [data-action="toggle-dropdown"] toggles .open
     on its sibling .nav-dropdown. Escape closes all.             */
  document.addEventListener('click', e => {
    const trigger = e.target.closest('[data-action="toggle-dropdown"]');
    document.querySelectorAll('.nav-dropdown.open').forEach(d => {
      if (!trigger || d !== trigger.closest('.nav-dropdown-wrapper')?.querySelector('.nav-dropdown')) {
        d.classList.remove('open');
        d.previousElementSibling?.setAttribute('aria-expanded', 'false');
      }
    });
    if (trigger) {
      const dd = trigger.closest('.nav-dropdown-wrapper')?.querySelector('.nav-dropdown');
      if (dd) {
        const open = dd.classList.toggle('open');
        trigger.setAttribute('aria-expanded', open);
      }
      e.stopPropagation();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.nav-dropdown.open').forEach(d => {
        d.classList.remove('open');
        d.previousElementSibling?.setAttribute('aria-expanded', 'false');
        d.previousElementSibling?.focus();
      });
    }
  });


  /* Gallery lightbox — [data-lightbox] opens .lightbox modal */
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = lightbox?.querySelector('img');

  function closeLightbox() {
    lightbox?.classList.remove('open');
    lightbox?.setAttribute('aria-hidden', 'true');
  }

  document.querySelectorAll('[data-lightbox]').forEach(item => {
    item.addEventListener('click', () => {
      if (!lightbox) return;
      const src = item.dataset.lightbox || item.querySelector('img')?.src;
      if (lightboxImg && src) lightboxImg.src = src;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      lightbox.querySelector('.lightbox-close')?.focus();
    });
  });

  document.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && lightbox?.classList.contains('open')) closeLightbox();
  });


  /* Stats counter — animates [data-stat] values on scroll
     Attributes: data-stat="99.9"  data-suffix="%"          */
  function animateCount(el, target, suffix) {
    const dur = 1500, start = performance.now();
    const isFloat = target % 1 !== 0;
    (function step(now) {
      const p = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      el.textContent = (isFloat ? (target * ease).toFixed(1) : Math.round(target * ease)) + suffix;
      if (p < 1) requestAnimationFrame(step);
    })(start);
  }

  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && !e.target.dataset.counted) {
        e.target.dataset.counted = '1';
        animateCount(e.target, parseFloat(e.target.dataset.stat), e.target.dataset.suffix || '');
      }
    });
  }, { threshold: 0.5 }).observe(...(document.querySelectorAll('[data-stat]').length
    ? document.querySelectorAll('[data-stat]') : [document.createElement('span')]));

  document.querySelectorAll('[data-stat]').forEach(el => {
    new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !e.target.dataset.counted) {
          e.target.dataset.counted = '1';
          animateCount(e.target, parseFloat(e.target.dataset.stat), e.target.dataset.suffix || '');
        }
      });
    }, { threshold: 0.5 }).observe(el);
  });


  /* Scroll reveal — [data-reveal] fades in from below on scroll */
  document.querySelectorAll('[data-reveal]').forEach(el => {
    el.style.cssText += 'opacity:0;transform:translateY(20px);transition:opacity .5s ease,transform .5s ease';
  });

  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })
    .observe(...(document.querySelectorAll('[data-reveal]').length
      ? document.querySelectorAll('[data-reveal]') : [document.createElement('span')]));

  document.querySelectorAll('[data-reveal]').forEach(el => {
    new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
          // unobserve after first reveal
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }).observe(el);
  });

})();
