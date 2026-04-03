// ============================================================
// PORTFOLIO CONFIG — Non-translatable data only (URLs, colors,
// images, icons, hrefs).  All text lives in i18n.js.
// To change displayed text, edit TRANSLATIONS in i18n.js.
// ============================================================

const CONFIG_BASE = {

  // ----------------------------------------------------------
  // NAVIGATION
  // ----------------------------------------------------------
  nav: {
    initials:      'JL',
    name:          'Jiani Liu',
    logoImage:     'http://www.liujiani.net/assets/template/cropped-logo-bkg.png',
    links: [
      { href: '#section-experience' },
      { href: '#section-projects'   },
      { href: '#section-skills'     },
      { href: '#section-about'      },
    ],
    cta: { href: 'mailto:jianiliu33@gmail.com' },
  },

  // ----------------------------------------------------------
  // HERO
  // ----------------------------------------------------------
  hero: {
    photo:          '',
    heroImage:      'http://www.liujiani.net/assets/images/waves.png',
    darkHeroImage:  'https://images.unsplash.com/photo-1544961371-516024f8e267',
    bgImage:        'http://www.liujiani.net/assets/images/fernando-garcia-zuPXH2Nrzpg-unsplash.jpg',
    ctas: [
      { href: '#section-experience', style: 'primary'  },
      { href: 'http://www.liujiani.net/assets/Jiani_Liu_Web_Dev.pdf', style: 'outline', download: true },
    ],
    social: [
      { href: 'mailto:jianiliu33@gmail.com',                       icon: 'email'    },
      { href: 'https://www.linkedin.com/in/jiani-liu-547662192/',  icon: 'linkedin' },
      { href: 'https://github.com/687000',                         icon: 'github'   },
      { href: 'tel:4085152977',                                    icon: 'phone'    },
    ]
  },

  // ----------------------------------------------------------
  // ABOUT  (org names are proper nouns — not translated)
  // ----------------------------------------------------------
  about: {
    timeline: [
      { org: 'UCLA'                             },
      { org: 'Academy of Art University'        },
      { org: 'Bright Mind Enrichment & Schooling'},
      { org: 'Moxo'                             },
    ],
  },

  // ----------------------------------------------------------
  // PROJECTS
  // ----------------------------------------------------------
  projects: {
    items: [
      {
        thumbnailUrl: 'http://www.liujiani.net/personal_website/wp-content/uploads/2023/04/react-jira-e1682181050148.png',
        thumbnailBg:  'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)',
        tags:         ['React', 'Ant Design', 'Figma'],
        links: { demo: 'https://687000.github.io', code: 'https://github.com/687000/React_Jira_Project', detail: '#' },
      },
      {
        thumbnailUrl: 'http://www.liujiani.net/personal_website/wp-content/uploads/2023/05/Screenshot-2023-05-05-at-11.17.13-AM.png',
        thumbnailBg:  'linear-gradient(135deg, #10b981 0%, #047857 100%)',
        tags:         ['WordPress', 'PHP', 'CSS'],
        links: { demo: 'http://www.liujiani.net/dessert-delights/', code: 'https://github.com/687000/dessert_delights_wordpress_theme', detail: '#' },
      },
      {
        thumbnailUrl: 'http://www.liujiani.net/personal_website/wp-content/uploads/2024/01/Screenshot-2024-01-17-at-4.56.24%E2%80%AFPM.png',
        thumbnailBg:  'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
        tags:         ['WordPress', 'PHP', 'Figma'],
        links: { demo: '#', code: '#', detail: '#' },
      },
      {
        thumbnailUrl: 'http://www.liujiani.net/personal_website/wp-content/uploads/2023/04/Screenshot-2023-04-22-at-9.33.43-AM-e1682181248611.png',
        thumbnailBg:  'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)',
        tags:         ['WebGL', 'JavaScript', 'GLSL'],
        links: { demo: 'https://jiani-liu-profile.netlify.app/images/project-thumbnail/Cave_Escape_Demo.mp4', code: 'https://github.com/687000/Cave-Escape', detail: '#' },
      },
    ],
  },

  // ----------------------------------------------------------
  // EXPERIENCE  (company names are proper nouns — not translated)
  // ----------------------------------------------------------
  experience: {
    items: [
      { company: 'Moxo',                          url: 'https://www.moxo.com/'                 },
      { company: 'Bright Mind Enrichment & Schooling', url: 'https://brightmindenrichment.org/' },
    ],
  },

  // ----------------------------------------------------------
  // SKILLS  (category colors only — names/items are in i18n.js)
  // ----------------------------------------------------------
  skills: {
    categories: [
      { color: '#6366f1' },
      { color: '#ec4899' },
      { color: '#f59e0b' },
      { color: '#10b981' },
    ],
  },

  // ----------------------------------------------------------
  // CONTACT
  // ----------------------------------------------------------
  contact: {
    bgImage:         'http://www.liujiani.net/assets/images/fernando-garcia-zuPXH2Nrzpg-unsplash.jpg',
    darkContactBgImage: 'https://images.unsplash.com/photo-1544961371-516024f8e267',
    links: [
      { href: 'mailto:jianiliu33@gmail.com',                      icon: 'email',    primary: true  },
      { href: 'https://www.linkedin.com/in/jiani-liu-547662192/', icon: 'linkedin', primary: false },
      { href: 'https://github.com/687000',                        icon: 'github',   primary: false },
      { href: 'tel:4085152977',                                   icon: 'phone',    primary: false },
    ],
  },

  // ----------------------------------------------------------
  // FOOTER
  // ----------------------------------------------------------
  footer: {
    name: 'Jiani Liu',
    links: [
      { href: '#section-experience' },
      { href: '#section-projects'   },
      { href: '#section-skills'     },
      { href: '#section-about'      },
    ],
    social: [
      { href: 'mailto:jianiliu33@gmail.com'                       },
      { href: 'https://www.linkedin.com/in/jiani-liu-547662192/'  },
      { href: 'https://github.com/687000'                         },
    ],
  },

};

// ============================================================
// SECTION ORDER — Reorder keys to rearrange the page layout
// ============================================================
const SECTION_ORDER = [
  'hero',
  'about',
  'experience',
  'skills',
  'projects',
  'contact',
];

// ============================================================
// getConfig(lang) — Merges CONFIG_BASE with TRANSLATIONS[lang]
// to produce a complete CONFIG object for the renderers.
// ============================================================
function getConfig(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const b = CONFIG_BASE;

  return {
    site: t.site,

    nav: {
      initials:  b.nav.initials,
      name:      b.nav.name,
      logoImage: b.nav.logoImage,
      links:     b.nav.links.map((l, i) => ({ ...l, label: t.nav.links[i].label })),
      cta:       { ...b.nav.cta, label: t.nav.cta.label },
    },

    hero: {
      ...b.hero,
      name: t.hero.name,
      greeting: t.hero.greeting,
      title:    t.hero.title,
      location: t.hero.location,
      tagline:  t.hero.tagline,
      ctas:     b.hero.ctas.map((c, i) => ({ ...c, label: t.hero.ctas[i].label })),
      social:   b.hero.social.map((s, i) => ({ ...s, label: t.hero.social[i].label })),
    },

    about: {
      sectionLabel:    t.about.sectionLabel,
      heading:         t.about.heading,
      backgroundLabel: t.about.backgroundLabel,
      bio:             t.about.bio,
      timeline:        b.about.timeline.map((item, i) => ({
        org:      item.org,
        detail:   t.about.timeline[i].detail,
        period:   t.about.timeline[i].period,
        location: t.about.timeline[i].location,
        type:     t.about.timeline[i].type,
      })),
    },

    projects: {
      sectionLabel: t.projects.sectionLabel,
      heading:      t.projects.heading,
      items:        b.projects.items.map((item, i) => ({
        ...item,
        name:   t.projects.items[i].name,
        detail: t.projects.items[i].detail,
      })),
    },

    experience: {
      sectionLabel: t.experience.sectionLabel,
      heading:      t.experience.heading,
      items:        b.experience.items.map((item, i) => ({
        ...item,
        role:     t.experience.items[i].role,
        period:   t.experience.items[i].period,
        location: t.experience.items[i].location,
        type:     t.experience.items[i].type,
        bullets:  t.experience.items[i].bullets,
      })),
    },

    skills: {
      sectionLabel: t.skills.sectionLabel,
      heading:      t.skills.heading,
      categories:   b.skills.categories.map((cat, i) => ({
        color: cat.color,
        name:  t.skills.categories[i].name,
        items: t.skills.categories[i].items,
      })),
    },

    contact: {
      ...b.contact,
      sectionLabel: t.contact.sectionLabel,
      heading:      t.contact.heading,
      body:         t.contact.body,
      links:        b.contact.links.map((l, i) => ({ ...l, label: t.contact.links[i].label })),
    },

    footer: {
      name:      b.footer.name,
      links:     b.footer.links.map((l, i) => ({ ...l, label: t.footer.links[i].label })),
      social:    b.footer.social.map((l, i) => ({ ...l, label: t.footer.social[i].label })),
      copyright: t.footer.copyright,
    },

    ui: t.ui,
  };
}
