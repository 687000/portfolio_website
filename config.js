// ============================================================
// PORTFOLIO CONFIGURATION — Update all content & assets here
// ============================================================

const CONFIG = {
  // ----------------------------------------------------------
  // SITE META
  // ----------------------------------------------------------
  site: {
    title:       'Jiani Liu — Web Developer',
    description: 'Web developer specializing in complex UI flows, workflow systems, and interactive web experiences.',
  },

  // ----------------------------------------------------------
  // NAVIGATION
  // ----------------------------------------------------------
  nav: {
    initials: 'JL',
    name:     'Jiani Liu',
    links: [
      { label: 'Experience', href: '#section-experience' },
      { label: 'Projects', href: '#section-projects'   },
      { label: 'Skills',   href: '#section-skills'     },
      { label: 'About',    href: '#section-about'      },
    ],
    cta: { label: 'Contact', href: 'mailto:jianiliu33@gmail.com' },
  },

  // ----------------------------------------------------------
  // HERO
  // ----------------------------------------------------------
  hero: {
    greeting: "Hi, I'm",
    name:     'Jiani Liu',
    title:    'Web Developer',
    location: 'San Jose, CA',
    tagline:  'I build complex, production-grade web applications, coordinating workflows, automations, and user experiences at scale.',
    ctas: [
      { label: 'Experiences', href: '#section-experience', style: 'primary'  },
      { label: 'Resume ↓',    href: 'http://www.liujiani.net/assets/Jiani_Liu_Web_Developer.pdf', style: 'outline', download: true },
    ],
    social: [
      { label: 'Email', href: 'mailto:jianiliu33@gmail.com', icon: 'email' },
      { label: 'LinkedIn',             href: 'https://www.linkedin.com/in/jiani-liu-547662192/', icon: 'linkedin' },
      { label: 'GitHub',               href: 'https://github.com/687000',                     icon: 'github' },
      { label: 'Phone',       href: 'tel:4085152977',               icon: 'phone' },
      { label: 'WeChat',       href: '#',               icon: 'wechat' },
    ],
    photo: '',
    heroImage: 'http://www.liujiani.net/assets/images/waves.png',
  },

  // ----------------------------------------------------------
  // ABOUT
  // ----------------------------------------------------------
  about: {
    sectionLabel: 'About',
    heading:      'Bridging design thinking and engineering precision.',
    bio: [
      "I'm a 2 years experience web developer with experience building complex web applications, workflow-driven systems, and reusable UI systems. Strong background in Vue/TypeScript product development, technical design translation, debugging, and cross-functional collaboration across engineering, product, design, and QA.",
      "I studied Interaction & UI/UX Design at Academy of Art and Mathematics of Computation at UCLA. That combination — analytical rigor paired with visual craft — shapes how I approach every interface problem.",
    ],
    timeline: [
      {
        org:      'UCLA',
        detail:   'B.S., Mathematics of Computation',
        period:   'Sep 2017 – Jun 2021',
        location: 'Los Angeles, CA',
        type:     'Education',
      },
      {
        org:      'Academy of Art University',
        detail:   'M.A., Interaction & UI/UX Design',
        period:   'Sep 2021 – May 2023',
        location: 'San Francisco, CA',
        type:     'Education',
      },
      {
        org:      'Bright Mind Enrichment & Schooling',
        detail:   'Volunteer Web Dev Team Lead',
        period:   'Jul 2023 – Mar 2024',
        location: 'Remote',
        type:     'Volunteer',
      },
      {
        org:      'Moxo',
        detail:   'Web Developer',
        period:   'Apr 2024 – Present',
        location: 'San Jose, CA',
        type:     'Full-time',
      },
    ],
  },

  // ----------------------------------------------------------
  // PROJECTS
  // ----------------------------------------------------------
  projects: {
    sectionLabel: 'Selected Work',
    heading:      'Projects',
    items: [
      {
        name:         'Non-profit Website Revamp',
        detail:       'Full redesign and development of a non-profit organization website. Rebuilt the information architecture, migrated to a custom WordPress theme, and established a contributor system that allowed 50+ volunteers to maintain content without breaking the design system.',
        thumbnailUrl: '', // PLACEHOLDER — replace with screenshot image URL
        thumbnailBg:  'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
        tags:         ['WordPress', 'PHP', 'Figma'],
        links: {
          demo: '#', // PLACEHOLDER — add live site URL
          code: '#', // PLACEHOLDER — add GitHub repo URL
        },
      },
      {
        name:         'Jira Workflow Tool',
        detail:       'A workflow management application that streamlines task coordination across distributed teams. Built with React and Ant Design, it maps Jira issue states to a visual workflow canvas with drag-and-drop assignment and real-time status updates.',
        thumbnailUrl: '', // PLACEHOLDER — replace with screenshot image URL
        thumbnailBg:  'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)',
        tags:         ['React', 'Ant Design', 'Figma'],
        links: {
          demo: '#', // PLACEHOLDER — add live demo URL
          code: '#', // PLACEHOLDER — add GitHub repo URL
        },
      },
      {
        name:         'WordPress Custom Theme',
        detail:       'A fully custom WordPress theme built from scratch with PHP templates, custom post types, Advanced Custom Fields, and a reusable component system. Designed and shipped a design token layer that kept visual consistency across 40+ page templates.',
        thumbnailUrl: '', // PLACEHOLDER — replace with screenshot image URL
        thumbnailBg:  'linear-gradient(135deg, #10b981 0%, #047857 100%)',
        tags:         ['WordPress', 'PHP', 'CSS'],
        links: {
          demo: '#', // PLACEHOLDER — add live site URL
          code: '#', // PLACEHOLDER — add GitHub repo URL
        },
      },
      {
        name:         'WebGL Games',
        detail:       'A collection of interactive browser-based games built with WebGL and vanilla JavaScript. Explored real-time 3D rendering, GLSL shader programming, collision detection, and interactive storytelling through game mechanics.',
        thumbnailUrl: '', // PLACEHOLDER — replace with screenshot image URL
        thumbnailBg:  'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)',
        tags:         ['WebGL', 'JavaScript', 'GLSL'],
        links: {
          demo: '#', // PLACEHOLDER — add live demo URL
          code: '#', // PLACEHOLDER — add GitHub repo URL
        },
      },
    ],
  },

  // ----------------------------------------------------------
  // EXPERIENCE
  // ----------------------------------------------------------
  experience: {
    sectionLabel: 'Experience',
    heading:      'Work History',
    items: [
      {
        company:  'Moxo',
        role:     'Web Developer',
        period:   'Apr 2024 - Present',
        location: 'San Jose, CA',
        type:     'Full-time',
        url:      'https://www.moxo.com/',
        bullets: [
          'Owned frontend implementation of complex product features for a B2B workflow platform — including workflow builders, runtime flows, onboarding, and state-heavy user interactions.',
          'Designed and built multi-step workflow creation flows with participant invitations, role-based assignment logic, private messaging, contact search, and cross-step state synchronization.',
          'Improved performance and reliability in high-traffic interfaces through lazy loading, request deduplication, retry handling, caching, and state reset strategies.',
          'Delivered form-builder enhancements including drag-and-drop image upload, immediate thumbnail synchronization, client-side caching, and deferred asset upload on final save.',
          'Documented technical implementation plans — analyzing feature scope, affected UI flows, data model changes, API impacts, edge cases, and regression risks before development.',
        ],
      },
      {
        company:  'Bright Mind Enrichment & Schooling',
        role:     'Volunteer Web Dev Team Lead',
        period:   'Jul 2023 - Mar 2024',
        location: 'Remote',
        type:     'Volunteer',
        url:      'https://brightmindenrichment.org/',
        bullets: [
          'Led a distributed team of 50+ volunteer web contributors and coordinated implementation priorities across multiple website initiatives.',
          'Built documentation for WordPress architecture, plugin management, and deployment workflows — improving contributor onboarding and project continuity.',
          "Created a reusable UI component library and style guidelines to standardize the organization's web presence across projects.",
          'Improved cross-team collaboration by documenting site structure, contributor workflows, and implementation expectations.',
        ],
      },
    ],
  },

  // ----------------------------------------------------------
  // SKILLS
  // ----------------------------------------------------------
  skills: {
    sectionLabel: 'Skills',
    heading:      'What I work with',
    categories: [
      {
        name:  'Frontend',
        color: '#6366f1',
        items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue', 'React', 'WebGL', 'Component Architecture', 'State Management'],
      },
      {
        name:  'Design & UI',
        color: '#ec4899',
        items: ['Figma', 'UI/UX Design', 'Design Systems', 'Ant Design', 'Responsive Layout', 'Accessibility'],
      },
      {
        name:  'Backend & Integration',
        color: '#10b981',
        items: ['Ruby on Rails', 'PHP', 'AJAX', 'REST APIs', 'WordPress', 'API-integrated Features'],
      },
      {
        name:  'Process & Delivery',
        color: '#f59e0b',
        items: ['Technical Documentation', 'Performance Optimization', 'UI QA', 'Debugging', 'Code Review', 'Implementation Planning'],
      },
    ],
  },

  // ----------------------------------------------------------
  // CONTACT
  // ----------------------------------------------------------
  contact: {
    sectionLabel: 'Contact',
    heading:      "Contact Me",
    body:         "Open to full-time roles. Feel free to reach out for collaborations, questions, or just to say hi!",
    links: [
      { label: 'Email', href: 'mailto:jianiliu33@gmail.com', icon: 'email',  primary: true  },
      { label: 'LinkedIn',             href: 'https://www.linkedin.com/in/jiani-liu-547662192/', icon: 'linkedin', primary: false },
      { label: 'GitHub',               href: 'https://github.com/687000',     icon: 'github', primary: false },
      { label: 'Phone',       href: 'tel:4085152977',               icon: 'phone',  primary: false },
    ],
    bgImage: 'http://www.liujiani.net/assets/images/fernando-garcia-zuPXH2Nrzpg-unsplash.jpg',
  },

  // ----------------------------------------------------------
  // FOOTER
  // ----------------------------------------------------------
  footer: {
    name: 'Jiani Liu',
    links: [
      { label: 'Experience', href: '#section-experience' },
      { label: 'Projects', href: '#section-projects'   },
      { label: 'Skills',   href: '#section-skills'     },
      { label: 'About',    href: '#section-about'      },
    ],
    social: [
      { label: 'Email',    href: 'mailto:jianiliu33@gmail.com' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jiani-liu-547662192/' },
      { label: 'GitHub',   href: 'https://github.com/687000' },
    ],
    copyright: '© 2026 Jiani Liu.',
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
