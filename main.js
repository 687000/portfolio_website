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

const svgAssets = {
  github: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
  </svg>`,

  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>`,

  email: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mailbox-flag" viewBox="0 0 16 16">
  <path d="M10.5 8.5V3.707l.854-.853A.5.5 0 0 0 11.5 2.5v-2A.5.5 0 0 0 11 0H9.5a.5.5 0 0 0-.5.5v8zM5 7c0 .334-.164.264-.415.157C4.42 7.087 4.218 7 4 7s-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0"/>
  <path d="M4 3h4v1H6.646A4 4 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3V3a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4m0 1a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3"/>
</svg>`,

  phone: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg>`,

  wechat: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wechat" viewBox="0 0 16 16">
  <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.32.32 0 0 0-.12.366l.218.81a.6.6 0 0 1 .029.117.166.166 0 0 1-.162.162.2.2 0 0 1-.092-.03l-1.057-.61a.5.5 0 0 0-.256-.074.5.5 0 0 0-.142.021 5.7 5.7 0 0 1-1.576.22M9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.6.6 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.63.63 0 0 0 .098.356"/>
  <path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.5.5 0 0 0-.032.14.19.19 0 0 0 .193.193q.06 0 .111-.029l1.268-.733a.6.6 0 0 1 .308-.088q.088 0 .171.025a6.8 6.8 0 0 0 1.625.26 4.5 4.5 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02l.15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826m4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0m3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0"/>
</svg>`,

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
      <div class="nav__outer">
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
  const { greeting, name, title, tagline, ctas, social, heroImage, bgImage } = cfg.hero;

  const ctaBtns = ctas.map(c =>
    `<a href="${c.href}" class="btn btn--${c.style === 'primary' ? 'primary' : 'outline-inv'}">${c.label}</a>`
  ).join('');

  // Icon-only pills — show all links including phone
  const socialLinks = social.map(s =>
    `<a href="${s.href}" class="hero__social-link" target="_blank" title="${s.label}" aria-label="${s.label}">
      <i class="hero__social-icon">${svgAssets[s.icon]}</i>
    </a>`
  ).join('');

  // Preload hint so the browser starts fetching the image immediately
  if (heroImage && !document.querySelector(`link[href="${heroImage}"]`)) {
    const pre = document.createElement('link');
    pre.rel = 'preload'; pre.as = 'image'; pre.href = heroImage;
    document.head.appendChild(pre);
  }

  const bgLayer = heroImage
    ? `<div class="hero__bg" style="background-image:url('${heroImage}')">
         <div class="hero__bg-tint"></div>
       </div>`
    : `<div class="hero__bg hero__bg--gradient style="background-image: linear-gradient(rgba(80, 140, 145, 0.38), rgba(80, 140, 145, 0.38)), url('${bgImage}')""></div>`;

  return `
    <section id="section-hero" class="section section--hero">
      ${bgLayer}
      <div class="hero__panel">
        <div class="hero__panel-content">
          <p  class="hero__greeting hero-in" style="--delay:.90s">${greeting}</p>
          <h1 class="hero__name    hero-in" style="--delay:1.06s">${name}</h1>
          <p  class="hero__title   hero-in" style="--delay:1.22s">${title}</p>
          <p  class="hero__tagline hero-in" style="--delay:1.38s">${tagline}</p>
          <div class="hero__ctas   hero-in" style="--delay:1.54s">${ctaBtns}</div>
          <div class="hero__social hero-in" style="--delay:1.68s">${socialLinks}</div>
        </div>
      </div>
      <div class="hero__scroll" aria-hidden="true">
        <span>scroll</span><div class="hero__scroll-arrow"></div>
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
            <span class="exp-card__type exp-card__type--${item.type.toLowerCase().replace(/\s+/g,'-')}">${item.type}</span>
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
      <div class="skill-category glass-soft ${anim('anim', 0.08 * i)}">
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
  const { sectionLabel, heading, bio, timeline } = cfg.about;
  const paras = bio.map(p => `<p>${p}</p>`).join('');

  const tlItems = timeline.map((item, i) => `
    <div class="about-tl-item" style="--i:${i}">
      <div class="about-tl-dot"></div>
      <div class="about-tl-card">
        <div class="about-tl-card__top">
          <span class="about-tl-card__org">${item.org}</span>
          <span class="about-tl-badge about-tl-badge--${item.type.toLowerCase()}">${item.type}</span>
        </div>
        <div class="about-tl-card__detail">${item.detail}</div>
        <div class="about-tl-card__period">${item.period} · ${item.location}</div>
      </div>
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
            <div class="about__edu-heading">Background</div>
            <div class="about-timeline">${tlItems}</div>
          </div>
        </div>
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
      : ``

    const codeLink = item.links.code && item.links.code !== '#'
      ? `<a href="${item.links.code}" target="_blank" rel="noopener" class="project-link project-link--code">${SVG.github} Code</a>`
      : ``

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
          <h2 class="section-heading">${heading}</h2>
        </div>
        <div class="projects__grid" id="projects-grid">${cards}</div>
      </div>
    </section>`;
};

// ── CONTACT ───────────────────────────────────────────────────
RENDERERS.contact = function (cfg) {
  const { heading, body, links, bgImage } = cfg.contact;

  const contactLinks = links.map(l => `
    <a href="${l.href}" target="_blank" class="contact__link contact__link--${l.primary ? 'primary' : 'secondary'}">
      <i class="contact__link-icon">${svgAssets[l.icon]}</i>${l.label}
    </a>
  `).join('');

  return `
    <section
      id="section-contact"
      class="section section--contact"
      style="background-image: linear-gradient(rgba(80, 140, 145, 0.38), rgba(80, 140, 145, 0.38)), url('${bgImage}')"
    >
      <div class="contact__inner">
        <div class="contact__glass glass-soft ${anim()}">
          <h2 class="contact__heading">${heading}</h2>
          <p class="contact__body">${body}</p>
          <div class="contact__links">${contactLinks}</div>
        </div>
      </div>
    </section>
  `;
};

// ── FOOTER ────────────────────────────────────────────────────
RENDERERS.footer = function (cfg) {
  const { name, links, social, copyright } = cfg.footer;
  const footLinks = links.map(l => `<a href="${l.href}" target="_blank" class="footer__link">${l.label}</a>`).join('');
  const socLinks  = social.map(l => `<a href="${l.href}" target="_blank" class="footer__social-link">${l.label}</a>`).join('');
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

// ── THEME TOGGLE ──────────────────────────────────────────────
function initThemeToggle() {
  const btn = document.createElement('button');
  btn.id = 'theme-toggle';
  btn.setAttribute('aria-label', 'Toggle dark mode');

  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = saved === 'dark' || (!saved && prefersDark);

  if (isDark) document.documentElement.setAttribute('data-theme', 'dark');
  btn.textContent = isDark ? '☀' : '☽';

  btn.addEventListener('click', () => {
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (dark) {
      document.documentElement.removeAttribute('data-theme');
      btn.textContent = '☽';
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      btn.textContent = '☀';
      localStorage.setItem('theme', 'dark');
    }
  });

  document.body.appendChild(btn);
}

// ── BOOT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  initNav();
  initProjectAnimations();
  initExperienceAnimations();
  initScrollAnimations();
  initSmoothScroll();
  initThemeToggle();
});
