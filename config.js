// ============================================================
// PORTFOLIO CONFIGURATION — Update all content & assets here
// ============================================================

const CONFIG = {
  // ----------------------------------------------------------
  // SITE META
  // ----------------------------------------------------------
  site: {
    title:       'Jiani Liu — Web Developer',
    description: 'Web developer specializing in complex UI flows, workflow systems, and interactive web applications.',
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
    tagline:  'Web developer specializing in complex UI flows, workflow systems, and interactive web applications.',
    ctas: [
      { label: 'Experiences', href: '#section-experience', style: 'primary'  },
      { label: 'Resume ↓',    href: 'http://www.liujiani.net/assets/Jiani_Liu_Web_Dev.pdf', style: 'outline', download: true },
    ],
    social: [
      { label: 'Email', href: 'mailto:jianiliu33@gmail.com', icon: 'email' },
      { label: 'LinkedIn',             href: 'https://www.linkedin.com/in/jiani-liu-547662192/', icon: 'linkedin' },
      { label: 'GitHub',               href: 'https://github.com/687000',                     icon: 'github' },
      { label: 'Phone',       href: 'tel:4085152977',               icon: 'phone' },
    ],
    photo: '',
    heroImage: 'http://www.liujiani.net/assets/images/waves.png',
    bgImage: 'http://www.liujiani.net/assets/images/fernando-garcia-zuPXH2Nrzpg-unsplash.jpg'
  },

  // ----------------------------------------------------------
  // ABOUT
  // ----------------------------------------------------------
  about: {
    sectionLabel: 'About',
    heading:      'Bridging design thinking and engineering precision.',
    bio: [
      "I'm a web developer with 2+ years of experience building web applications, workflow-driven systems, and reusable UI components. My background combines product-focused engineering with UI/UX design, which helps me translate requirements into clear, reliable user experiences.",
      "I've worked across engineering, product, design, and QA to build features, debug complex UI behavior, and improve maintainability in production environments.",
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
        name:         'Jira Workflow Tool',
        detail:       'A workflow management application that streamlines task coordination across distributed teams. Built with React and Ant Design, it maps Jira issue states to a visual workflow canvas with drag-and-drop assignment and real-time status updates.',
        thumbnailUrl: 'http://www.liujiani.net/personal_website/wp-content/uploads/2023/04/react-jira-e1682181050148.png',
        thumbnailBg:  'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)',
        tags:         ['React', 'Ant Design', 'Figma'],
        links: {
          demo: 'https://687000.github.io',
          code: 'https://github.com/687000/React_Jira_Project',
          detail: '#'
        },
      },
      {
        name:         'WordPress Custom Theme',
        detail:       'A fully custom WordPress theme built from scratch with PHP templates, custom post types, Advanced Custom Fields, and a reusable component system. Designed and shipped a design token layer that kept visual consistency across 40+ page templates.',
        thumbnailUrl: 'http://www.liujiani.net/personal_website/wp-content/uploads/2023/05/Screenshot-2023-05-05-at-11.17.13-AM.png', // PLACEHOLDER — replace with screenshot image URL
        thumbnailBg:  'linear-gradient(135deg, #10b981 0%, #047857 100%)',
        tags:         ['WordPress', 'PHP', 'CSS'],
        links: {
          demo: 'http://www.liujiani.net/dessert-delights/',
          code: 'https://github.com/687000/dessert_delights_wordpress_theme',
          detail: '#'
        },
      },
      {
        name:         'Non-profit Website Rebranding',
        detail:       'Full redesign and development of a non-profit organization website. Rebuilt the information architecture, migrated to a custom WordPress theme, and established a contributor system that allowed 50+ volunteers to maintain content without breaking the design system.',
        thumbnailUrl: 'http://www.liujiani.net/personal_website/wp-content/uploads/2024/01/Screenshot-2024-01-17-at-4.56.24%E2%80%AFPM.png', // PLACEHOLDER — replace with screenshot image URL
        thumbnailBg:  'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
        tags:         ['WordPress', 'PHP', 'Figma'],
        links: {
          demo: '#', // PLACEHOLDER — add live site URL
          code: '#', // PLACEHOLDER — add GitHub repo URL
          detail: '#'
        },
      },
      {
        name:         'WebGL Games',
        detail:       'A collection of interactive browser-based games built with WebGL and vanilla JavaScript. Explored real-time 3D rendering, GLSL shader programming, collision detection, and interactive storytelling through game mechanics.',
        thumbnailUrl: 'http://www.liujiani.net/personal_website/wp-content/uploads/2023/04/Screenshot-2023-04-22-at-9.33.43-AM-e1682181248611.png', // PLACEHOLDER — replace with screenshot image URL
        thumbnailBg:  'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)',
        tags:         ['WebGL', 'JavaScript', 'GLSL'],
        links: {
          demo: 'https://jiani-liu-profile.netlify.app/images/project-thumbnail/Cave_Escape_Demo.mp4', // PLACEHOLDER — add live demo URL
          code: 'https://github.com/687000/Cave-Escape', // PLACEHOLDER — add GitHub repo URL
          detail: '#'
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
          'Led frontend implementation for key modules in a B2B workflow platform, including workflow builders, runtime flows, onboarding, and state-heavy user interactions.',
          'Built multi-step workflow creation flows with participant invitations, role-based assignment, private messaging, contact search, and synchronized cross-step state.',
          'Improved performance in high-traffic workflows through lazy loading, request deduplication, and caching, reducing unnecessary API calls during repeated interactions.',
          'Enhanced form builder features with drag-and-drop image upload, thumbnail preview, and deferred asset upload, improving responsiveness for media-heavy forms.',
          'Documented technical implementation plans to define feature scope, UI changes, API impacts, edge cases, and regression risks.'
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
          'Led a distributed team of 20+ volunteer web contributors and coordinated implementation priorities across multiple website initiatives.',
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
        items: ['Vue', 'React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'State Management', 'Component Architecture'],
      },
      {
        name:  'UI / Product',
        color: '#ec4899',
        items: ['Element UI', 'Accessibility', 'Responsive Layout', 'Figma'],
      },
      {
        name:  'Engineering Practice',
        color: '#f59e0b',
        items: ['Debugging', 'Performance Optimization', 'Technical Documentation', 'Cross-functional Collaboration'],
      },
      {
        name:  'Backend / CMS',
        color: '#10b981',
        items: ['REST APIs', 'WordPress', 'PHP', 'Ruby on Rails'],
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
