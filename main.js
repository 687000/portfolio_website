// ============================================================
// PORTFOLIO — MAIN JS
// Renderers + Interactions + Animations
// ============================================================

// ── HELPERS ──────────────────────────────────────────────────
// Usage: class="base ${anim()}"  →  class="base anim" style="--delay:0s"
function anim(cls = 'anim', delay = 0) {
  return `${cls}" style="--delay:${delay}s`;
}

const SVG = {
  external: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  github:   `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
  pin:      `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
};

// ── RENDERERS ─────────────────────────────────────────────────
const RENDERERS = {};

// ── NAV ──────────────────────────────────────────────────────
RENDERERS.nav = function (cfg) {
  const { initials, links, cta } = cfg.nav;
  const navLinks    = links.map(l => `<a href="${l.href}" class="nav__link">${l.label}</a>`).join('');
  const mobileLinks = links.map(l => `<a href="${l.href}" class="nav__mobile-link">${l.label}</a>`).join('');
  return `
    <nav class="nav" id="nav">
      <div class="nav__inner">
        <a href="#" class="nav__logo-mark">${initials}</a>
        <div class="nav__links">${navLinks}</div>
        <div class="nav__actions">
          <a href="${cta.href}" class="nav__cta">${cta.label}</a>
        </div>
        <button class="nav__hamburger" id="nav-hamburger" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
    <div class="nav__mobile-menu" id="nav-mobile" role="navigation">
      ${mobileLinks}
      <div class="nav__mobile-cta">
        <a href="${cta.href}" class="btn btn--primary" style="width:100%;justify-content:center">${cta.label}</a>
      </div>
    </div>`;
};

// ── HERO ──────────────────────────────────────────────────────
RENDERERS.hero = function (cfg) {
  const { greeting, name, title, tagline, ctas, social, photo } = cfg.hero;

  const ctaBtns = ctas.map(c =>
    `<a href="${c.href}" class="btn btn--${c.style === 'primary' ? 'primary' : 'outline-inv'}">${c.label}</a>`
  ).join('');

  const socialLinks = social.map(s => `
    <a href="${s.href}" class="hero__social-link">
      <i class="hero__social-icon">${s.icon}</i>${s.label}
    </a>`).join('');

  const avatar = photo
    ? `<img src="${photo}" alt="${name}" class="hero__photo" loading="eager">`
    : `<div class="hero__avatar-placeholder">${cfg.nav.initials}</div>`;

  return `
    <section id="section-hero" class="section section--hero">
      <div class="hero__glow"></div>
      <div class="hero__glow-2"></div>
      <div class="hero__inner">
        <div class="hero__content">
          <p  class="hero__greeting hero-in" style="--delay:.05s">${greeting}</p>
          <h1 class="hero__name    hero-in" style="--delay:.12s">${name}</h1>
          <p  class="hero__title   hero-in" style="--delay:.20s">${title}</p>
          <p  class="hero__tagline hero-in" style="--delay:.28s">${tagline}</p>
          <div class="hero__ctas   hero-in" style="--delay:.36s">${ctaBtns}</div>
          <div class="hero__social hero-in" style="--delay:.44s">${socialLinks}</div>
        </div>
        <div class="hero-in" style="--delay:.22s">${avatar}</div>
      </div>
      <div class="hero__scroll" aria-hidden="true">
        <span>scroll</span><div class="hero__scroll-arrow"></div>
      </div>
    </section>`;
};

// ── PROJECTS ──────────────────────────────────────────────────
RENDERERS.projects = function (cfg) {
  const { sectionLabel, heading, items } = cfg.projects;

  const cards = items.map((item, i) => {
    const thumb = item.thumbnailUrl
      ? `<img src="${item.thumbnailUrl}" alt="${item.name}" class="project-card__thumb-img" loading="lazy">`
      : `<div class="project-card__thumb-bg" style="background:${item.thumbnailBg}">
           <span>Image placeholder</span>
         </div>`;

    const tags  = item.tags.map(t => `<span class="project-card__tag">${t}</span>`).join('');

    const demoLink = item.links.demo && item.links.demo !== '#'
      ? `<a href="${item.links.demo}" target="_blank" rel="noopener" class="project-link project-link--demo">${SVG.external} Live Demo</a>`
      : `<span class="project-link project-link--demo" style="opacity:.35;pointer-events:none">${SVG.external} Demo TBD</span>`;

    const codeLink = item.links.code && item.links.code !== '#'
      ? `<a href="${item.links.code}" target="_blank" rel="noopener" class="project-link project-link--code">${SVG.github} Code</a>`
      : `<span class="project-link project-link--code" style="opacity:.35;pointer-events:none">${SVG.github} Code TBD</span>`;

    // --i drives the CSS stagger delay
    return `
      <article class="project-card" style="--i:${i}">
        <div class="project-card__thumb">
          ${thumb}
          <span class="project-card__badge">0${i + 1}</span>
        </div>
        <div class="project-card__body">
          <h3 class="project-card__name">${item.name}</h3>
          <p  class="project-card__detail">${item.detail}</p>
          <div class="project-card__tags">${tags}</div>
          <div class="project-card__links">${demoLink}${codeLink}</div>
        </div>
      </article>`;
  }).join('');

  return `
    <section id="section-projects" class="section section--projects">
      <div class="container">
        <div class="projects__header ${anim()}">
          <span class="section-label label--inv">${sectionLabel}</span>
          <h2 class="section-heading" style="color:#fff;margin-top:6px">${heading}</h2>
        </div>
        <div class="projects__grid" id="projects-grid">${cards}</div>
      </div>
    </section>`;
};

// ── EXPERIENCE ────────────────────────────────────────────────
RENDERERS.experience = function (cfg) {
  const { sectionLabel, heading, items } = cfg.experience;

  const cards = items.map((item, i) => {
    const bullets = item.bullets.map(b => `<li class="exp-card__bullet">${b}</li>`).join('');
    return `
      <article class="exp-card" style="--i:${i}">
        <div class="exp-card__top">
          <div>
            <div class="exp-card__company">${item.company}</div>
            <div class="exp-card__role">${item.role}</div>
          </div>
          <div class="exp-card__meta">
            <span class="exp-card__period">${item.period}</span>
            <span class="exp-card__type">${item.type}</span>
          </div>
        </div>
        <div class="exp-card__location">${SVG.pin} ${item.location}</div>
        <ul class="exp-card__bullets">${bullets}</ul>
      </article>`;
  }).join('');

  return `
    <section id="section-experience" class="section section--experience">
      <div class="container">
        <div class="experience__header ${anim()}">
          <span class="section-label label--dim">${sectionLabel}</span>
          <h2 class="section-heading" style="margin-top:6px">${heading}</h2>
        </div>
        <div class="experience__list" id="exp-list">${cards}</div>
      </div>
    </section>`;
};

// ── SKILLS ────────────────────────────────────────────────────
RENDERERS.skills = function (cfg) {
  const { sectionLabel, heading, categories } = cfg.skills;

  const cats = categories.map((cat, i) => {
    const chips = cat.items.map(item => `<span class="skill-chip">${item}</span>`).join('');
    return `
      <div class="skill-category ${anim('anim', 0.08 * i)}">
        <div class="skill-category__header">
          <span class="skill-category__dot" style="background:${cat.color}"></span>
          <span class="skill-category__name">${cat.name}</span>
        </div>
        <div class="skill-chips">${chips}</div>
      </div>`;
  }).join('');

  return `
    <section id="section-skills" class="section section--skills">
      <div class="container">
        <div class="skills__header ${anim()}">
          <span class="section-label label--dim">${sectionLabel}</span>
          <h2 class="section-heading" style="margin-top:6px">${heading}</h2>
        </div>
        <div class="skills__grid">${cats}</div>
      </div>
    </section>`;
};

// ── ABOUT ─────────────────────────────────────────────────────
RENDERERS.about = function (cfg) {
  const { sectionLabel, heading, bio, education } = cfg.about;
  const paras   = bio.map(p => `<p>${p}</p>`).join('');
  const eduItems = education.map(e => `
    <div class="edu-item">
      <div class="edu-item__school">${e.school}</div>
      <div class="edu-item__degree">${e.degree}</div>
      <div class="edu-item__period">${e.period} · ${e.location}</div>
    </div>`).join('');

  return `
    <section id="section-about" class="section section--about">
      <div class="container">
        <div class="about__grid">
          <div class="${anim('anim-left')}">
            <span class="section-label label--dim">${sectionLabel}</span>
            <h2 class="section-heading about__bio-heading" style="margin-top:6px">${heading}</h2>
            <div class="about__bio">${paras}</div>
          </div>
          <div class="${anim('anim-right', 0.14)}">
            <div class="about__edu-heading">Education</div>
            <div class="about__edu-list">${eduItems}</div>
          </div>
        </div>
      </div>
    </section>`;
};

// ── CONTACT ───────────────────────────────────────────────────
RENDERERS.contact = function (cfg) {
  const { sectionLabel, heading, body, links } = cfg.contact;
  const contactLinks = links.map(l => `
    <a href="${l.href}" class="contact__link contact__link--${l.primary ? 'primary' : 'secondary'}">
      <i class="contact__link-icon">${l.icon}</i>${l.label}
    </a>`).join('');

  return `
    <section id="section-contact" class="section section--contact">
      <div class="contact__inner">
        <div class="contact__glass ${anim()}">
          <span class="section-label label--inv">${sectionLabel}</span>
          <h2 class="contact__heading">${heading}</h2>
          <p  class="contact__body">${body}</p>
          <div class="contact__links">${contactLinks}</div>
        </div>
      </div>
    </section>`;
};

// ── FOOTER ────────────────────────────────────────────────────
RENDERERS.footer = function (cfg) {
  const { name, links, social, copyright } = cfg.footer;
  const footLinks = links.map(l => `<a href="${l.href}" class="footer__link">${l.label}</a>`).join('');
  const socLinks  = social.map(l => `<a href="${l.href}" class="footer__social-link">${l.label}</a>`).join('');
  return `
    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__left">
          <span class="footer__name">${name}</span>
          <nav class="footer__links">${footLinks}</nav>
        </div>
        <div class="footer__right">
          <div class="footer__social">${socLinks}</div>
          <span class="footer__copyright">${copyright}</span>
        </div>
      </div>
    </footer>`;
};

// ── RENDER APP ────────────────────────────────────────────────
function renderApp() {
  const app = document.getElementById('app');
  let html  = RENDERERS.nav(CONFIG);
  html     += '<main>';
  SECTION_ORDER.forEach(key => {
    html += RENDERERS[key] ? RENDERERS[key](CONFIG) : '';
  });
  html += '</main>';
  html += RENDERERS.footer(CONFIG);
  app.innerHTML = html;
}

// ── NAV ──────────────────────────────────────────────────────
function initNav() {
  const nav       = document.getElementById('nav');
  const hamburger = document.getElementById('nav-hamburger');
  const mobile    = document.getElementById('nav-mobile');
  const hero      = document.getElementById('section-hero');
  if (!nav) return;

  // Pre-compute threshold — avoid forced layout inside scroll/RAF
  const computeThreshold = () => hero ? hero.offsetHeight - 80 : window.innerHeight;
  let threshold = computeThreshold();
  window.addEventListener('resize', () => { threshold = computeThreshold(); }, { passive: true });

  // Switch to frosted-glass state once past the hero
  let raf = false;
  const onScroll = () => {
    if (raf) return;
    raf = true;
    requestAnimationFrame(() => {
      nav.classList.toggle('is-scrolled', window.scrollY > threshold);
      raf = false;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile toggle
  if (!hamburger || !mobile) return;
  const spans = hamburger.querySelectorAll('span');

  hamburger.addEventListener('click', () => {
    const open = mobile.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', open);
    spans[0].style.transform = open ? 'translateY(7px) rotate(45deg)'  : '';
    spans[1].style.opacity   = open ? '0' : '';
    spans[2].style.transform = open ? 'translateY(-7px) rotate(-45deg)' : '';
  });

  const closeMenu = () => {
    mobile.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  };

  document.addEventListener('click', e => {
    if (!nav.contains(e.target) && !mobile.contains(e.target)) closeMenu();
  });
  mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
}

// ── PROJECT CARD ANIMATIONS ────────────────────────────────────
// Triggered once when the grid enters the viewport — stagger via CSS --i var
function initProjectAnimations() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const io = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    const cards = grid.querySelectorAll('.project-card');

    cards.forEach(card => {
      card.classList.add('card-visible');
      // Swap to hover-friendly transitions exactly when this card's entrance ends
      card.addEventListener('transitionend', function settle(e) {
        if (e.propertyName === 'transform') {
          card.classList.add('card-settled');
          card.removeEventListener('transitionend', settle);
        }
      });
    });

    io.disconnect();
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

  io.observe(grid);
}

// ── EXPERIENCE ANIMATIONS ──────────────────────────────────────
// Draws the timeline line, pops dots, slides cards left→right
function initExperienceAnimations() {
  const list = document.getElementById('exp-list');
  if (!list) return;

  // 1. Observe the list container to draw the vertical line
  const lineIo = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    list.classList.add('line-visible');
    lineIo.disconnect();
  }, { threshold: 0.05 });
  lineIo.observe(list);

  // 2. Observe each card individually (stagger via CSS --i)
  const cardIo = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const card = entry.target;
      card.classList.add('card-visible');
      cardIo.unobserve(card);

      // After entrance completes, swap to hover-friendly transitions
      card.addEventListener('transitionend', function settle(e) {
        if (e.propertyName === 'transform') {
          card.classList.add('card-settled');
          card.removeEventListener('transitionend', settle);
        }
      });
    });
  }, { threshold: 0.15 });

  list.querySelectorAll('.exp-card').forEach(card => cardIo.observe(card));
}

// ── GENERIC SCROLL ANIMATIONS ──────────────────────────────────
// For headers, about, skills, contact panel, etc.
function initScrollAnimations() {
  const els = document.querySelectorAll('.anim, .anim-left, .anim-right');
  if (!els.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.10, rootMargin: '0px 0px -36px 0px' });

  els.forEach(el => io.observe(el));
}

// ── SMOOTH SCROLL ─────────────────────────────────────────────
function initSmoothScroll() {
  const NAV_H = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 62;
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - NAV_H, behavior: 'smooth' });
  });
}

// ── BOOT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  initNav();
  initProjectAnimations();
  initExperienceAnimations();
  initScrollAnimations();
  initSmoothScroll();
});
