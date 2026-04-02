// ============================================================
// i18n — ALL TRANSLATABLE TEXT STRINGS
// Add a new language by adding a new key (e.g. 'fr', 'ja').
// Keys must match CONFIG_BASE structure where applicable.
// ============================================================

const TRANSLATIONS = {

  // ── ENGLISH ────────────────────────────────────────────────
  en: {
    site: {
      title:       'Jiani Liu — Web Developer',
      description: 'Specializing in complex UI flows, workflow systems, and interactive web applications.',
    },
    nav: {
      links: [
        { label: 'Experience' },
        { label: 'Projects'   },
        { label: 'Skills'     },
        { label: 'About'      },
      ],
      cta: { label: 'Contact' },
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Jiani Liu',
      title:    'Web Developer',
      location: 'San Jose, CA',
      tagline:  'Specializing in complex UI flows, workflow systems, and interactive web applications.',
      ctas: [
        { label: 'Experiences' },
        { label: 'Resume ↓'    },
      ],
      social: [
        { label: 'Email'    },
        { label: 'LinkedIn' },
        { label: 'GitHub'   },
        { label: 'Phone'    },
      ],
    },
    about: {
      sectionLabel:    'About',
      heading:         'Bridging design thinking and engineering precision.',
      backgroundLabel: 'Background',
      bio: [
        "I'm a web developer with 2+ years of experience building web applications, workflow-driven systems, and reusable UI components. My background combines product-focused engineering with UI/UX design, which helps me translate requirements into clear, reliable user experiences.",
        "I've worked across engineering, product, design, and QA to build features, debug complex UI behavior, and improve maintainability in production environments.",
      ],
      timeline: [
        { detail: 'B.S., Mathematics of Computation',  period: 'Sep 2017 – Jun 2021', location: 'Los Angeles, CA',      type: 'Education'  },
        { detail: 'M.A., Interaction & UI/UX Design',  period: 'Sep 2021 – May 2023', location: 'San Francisco, CA',    type: 'Education'  },
        { detail: 'Volunteer Web Dev Team Lead',        period: 'Jul 2023 – Mar 2024', location: 'Remote',               type: 'Volunteer'  },
        { detail: 'Web Developer',                     period: 'Apr 2024 – Present',  location: 'San Jose, CA',         type: 'Full-time'  },
      ],
    },
    projects: {
      sectionLabel: 'Selected Work',
      heading:      'Projects',
      items: [
        {
          name:   'Jira Workflow Tool',
          detail: 'A workflow management application that streamlines task coordination across distributed teams. Built with React and Ant Design, it maps Jira issue states to a visual workflow canvas with drag-and-drop assignment and real-time status updates.',
        },
        {
          name:   'WordPress Custom Theme',
          detail: 'A fully custom WordPress theme built from scratch with PHP templates, custom post types, Advanced Custom Fields, and a reusable component system. Designed and shipped a design token layer that kept visual consistency across 40+ page templates.',
        },
        {
          name:   'Non-profit Website Rebranding',
          detail: 'Full redesign and development of a non-profit organization website. Rebuilt the information architecture, migrated to a custom WordPress theme, and established a contributor system that allowed 50+ volunteers to maintain content without breaking the design system.',
        },
        {
          name:   'WebGL Games',
          detail: 'A collection of interactive browser-based games built with WebGL and vanilla JavaScript. Explored real-time 3D rendering, GLSL shader programming, collision detection, and interactive storytelling through game mechanics.',
        },
      ],
    },
    experience: {
      sectionLabel: 'Experience',
      heading:      'Work History',
      items: [
        {
          role:     'Web Developer',
          period:   'Apr 2024 - Present',
          location: 'San Jose, CA',
          type:     'Full-time',
          bullets: [
            'Led frontend implementation for key modules in a B2B workflow platform, including workflow builders, runtime flows, onboarding, and state-heavy user interactions.',
            'Built multi-step workflow creation flows with participant invitations, role-based assignment, private messaging, contact search, and synchronized cross-step state.',
            'Improved performance in high-traffic workflows through lazy loading, request deduplication, and caching, reducing unnecessary API calls during repeated interactions.',
            'Enhanced form builder features with drag-and-drop image upload, thumbnail preview, and deferred asset upload, improving responsiveness for media-heavy forms.',
            'Documented technical implementation plans to define feature scope, UI changes, API impacts, edge cases, and regression risks.',
          ],
        },
        {
          role:     'Volunteer Web Dev Team Lead',
          period:   'Jul 2023 - Mar 2024',
          location: 'Remote',
          type:     'Volunteer',
          bullets: [
            'Led a distributed team of 20+ volunteer web contributors and coordinated implementation priorities across multiple website initiatives.',
            'Built documentation for WordPress architecture, plugin management, and deployment workflows — improving contributor onboarding and project continuity.',
            "Created a reusable UI component library and style guidelines to standardize the organization's web presence across projects.",
            'Improved cross-team collaboration by documenting site structure, contributor workflows, and implementation expectations.',
          ],
        },
      ],
    },
    skills: {
      sectionLabel: 'Skills',
      heading:      'What I work with',
      categories: [
        { name: 'Frontend',            items: ['Vue', 'React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'State Management', 'Component Architecture'] },
        { name: 'UI / Product',        items: ['Element UI', 'Accessibility', 'Responsive Layout', 'Figma'] },
        { name: 'Engineering Practice',items: ['Debugging', 'Performance Optimization', 'Technical Documentation', 'Cross-functional Collaboration'] },
        { name: 'Backend / CMS',       items: ['REST APIs', 'WordPress', 'PHP', 'Ruby on Rails'] },
      ],
    },
    contact: {
      sectionLabel: 'Contact',
      heading:      'Contact Me',
      body:         'Open to full-time roles. Feel free to reach out for collaborations, questions, or just to say hi!',
      links: [
        { label: 'Email'    },
        { label: 'LinkedIn' },
        { label: 'GitHub'   },
        { label: 'Phone'    },
      ],
    },
    footer: {
      links: [
        { label: 'Experience' },
        { label: 'Projects'   },
        { label: 'Skills'     },
        { label: 'About'      },
      ],
      social: [
        { label: 'Email'    },
        { label: 'LinkedIn' },
        { label: 'GitHub'   },
      ],
      copyright: '© 2026 Jiani Liu.',
    },
    // Strings used directly in JS renderers / UI controls
    ui: {
      scroll:          'scroll',
      switchLang:      '中文',
    },
  },
  zh: {
    site: {
      title: '刘佳妮｜前端工程师',
      description: '专注于复杂界面流程、工作流系统与交互式 Web 应用',
    },

    nav: {
      links: [
        { label: '经历' },
        { label: '项目' },
        { label: '技能' },
        { label: '关于我' },
      ],
      cta: { label: '联系我' },
    },

    hero: {
      greeting: 'Hi，我是',
      name: '刘佳妮',
      title: '前端工程师',
      location: '美国加州圣何塞',
      tagline: '专注于复杂界面流程、工作流系统与交互式 Web 应用',
      ctas: [
        { label: '查看经历' },
        { label: '下载简历 ↓' },
      ],
      social: [
        { label: '邮箱' },
        { label: 'LinkedIn' },
        { label: 'GitHub' },
        { label: '电话' },
      ],
    },

    about: {
      sectionLabel: '关于我',
      heading: '在设计思维与工程实现之间搭建可靠的连接。',
      backgroundLabel: '背景',
      bio: [
        '我是一名前端工程师，拥有 2 年以上 Web 应用、工作流系统与可复用 UI 组件开发经验。我的背景结合了产品导向的工程实践与 UI/UX 设计训练，能够将需求清晰地转化为稳定、易用的用户体验。',
        '我曾与工程、产品、设计和测试团队协作，负责功能开发、复杂界面问题排查，以及生产环境中的可维护性与稳定性优化。',
      ],
      timeline: [
        {
          detail: '计算数学理学学士',
          period: '2017 年 9 月 – 2021 年 6 月',
          location: '洛杉矶，加州',
          type: '教育',
        },
        {
          detail: '交互设计与 UI/UX 硕士',
          period: '2021 年 9 月 – 2023 年 5 月',
          location: '旧金山，加州',
          type: '教育',
        },
        {
          detail: '志愿者前端工程师',
          period: '2023 年 7 月 – 2024 年 3 月',
          location: '远程',
          type: '志愿经历',
        },
        {
          detail: '前端工程师',
          period: '2024 年 4 月 – 至今',
          location: '圣何塞，加州',
          type: '全职',
        },
      ],
    },

    projects: {
      sectionLabel: '精选作品',
      heading: '项目',
      items: [
        {
          name: '工作流管理工具',
          detail: '面向分布式团队的工作流管理应用。基于 React 构建，将任务状态映射到可视化流程画布中，并支持拖拽分配与状态更新，提升跨团队协作效率。',
        },
        {
          name: 'WordPress 定制主题开发',
          detail: '从零搭建 WordPress 定制主题，包含 PHP 模板、自定义内容类型、ACF 字段配置与可复用组件系统，并通过统一设计规范提升页面一致性与维护效率。',
        },
        {
          name: '非营利组织官网重构',
          detail: '负责非营利组织网站的信息架构重组、视觉重构与前端开发，建立统一组件规范与内容协作流程，支持长期维护。',
        },
        {
          name: 'WebGL 交互游戏实验',
          detail: '使用 WebGL 与原生 JavaScript 开发浏览器端交互游戏，探索实时 3D 渲染、着色器、碰撞检测与基于机制的交互叙事。',
        },
      ],
    },

    experience: {
      sectionLabel: '工作经历',
      heading: '职业经历',
      items: [
        {
          role: '前端工程师',
          period: '2024 年 4 月 - 至今',
          location: '圣何塞，加州',
          type: '全职',
          bullets: [
            '负责 B2B 工作流平台中核心模块的前端实现，包括工作流搭建器、运行时流程、用户引导以及高状态复杂度的交互界面。',
            '开发多步骤工作流创建流程，涵盖参与者邀请、基于角色的分配逻辑、定制信息、联系人搜索以及跨步骤状态同步。',
            '通过懒加载、请求去重、失败重试、缓存与状态重置策略，优化高流量界面的性能与稳定性，减少重复交互中的不必要请求。',
            '优化交互式表单构建器功能，支持拖拽上传图片、缩略图即时同步、客户端缓存及延迟上传资源，提升媒体型表单体验。',
            '在开发前撰写技术实现方案，明确功能范围、界面流程、数据模型变更、API 影响、边界情况与回归风险。',
          ],
        },
        {
          role: '志愿者前端工程师',
          period: '2023 年 7 月 - 2024 年 3 月',
          location: '远程',
          type: '志愿经历',
          bullets: [
            '负责管理由 20 余名志愿者组成的网页开发团队，协调多个网站项目的实现优先级与协作节奏。',
            '编写 WordPress 架构、插件管理与部署流程文档，提升新成员上手效率与项目延续性。',
            '搭建可复用 UI 组件库与样式规范，统一组织各项目的网站视觉与交互表现。',
            '通过梳理网站结构、协作流程与实现规范，提升跨团队协作效率与交付一致性。',
          ],
        },
      ],
    },

    skills: {
      sectionLabel: '技能',
      heading: '技术与能力',
      categories: [
        { name: '前端 / Web 开发',            items: ['Vue', 'React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', '复杂状态界面流程', '组件化架构'] },
        { name: 'UI / 产品',        items: ['Element UI', 'Accessibility', '响应式布局', 'Figma'] },
        { name: '运营支持 / 交付协作',items: ['Debugging', '性能优化', '技术文档', '跨职能实现支持'] },
        { name: '后端 / CMS',       items: ['REST APIs', 'WordPress', 'PHP', 'Ruby on Rails'] },
      ],
    },

    contact: {
      sectionLabel: '联系',
      heading: '联系我',
      body: '欢迎就全职机会、合作、项目或其他交流与我联系。',
      links: [
        { label: '邮箱' },
        { label: 'LinkedIn' },
        { label: 'GitHub' },
        { label: '电话' },
      ],
    },

    footer: {
      links: [
        { label: '经历' },
        { label: '项目' },
        { label: '技能' },
        { label: '关于我' },
      ],
      social: [
        { label: '邮箱' },
        { label: 'LinkedIn' },
        { label: 'GitHub' },
      ],
      copyright: '© 2026 刘佳妮。',
    },

    ui: {
      scroll: '滚动',
      switchLang: 'EN',
    },
  },
};