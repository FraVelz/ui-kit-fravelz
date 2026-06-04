export const en = {
  nav: {
    home: "Home",
    docs: "Documentation",
    components: "Components",
    npm: "npm",
    github: "GitHub",
    presentation: "Presentation",
    docsBadge: "documentation",
    index: "Index",
    prev: "previous",
    next: "next",
    componentIndex: "Component index",
    menu: "Menu",
  },
  footer: {
    tagline:
      "React library with atoms, molecules, and organisms for portfolio projects. " +
      "TypeScript types and Tailwind styles in the consumer app.",
    documentation: "Documentation",
    project: "Project",
    navigation: "Navigation",
    resources: "Resources",
    readme: "README",
    documented: "documented components",
    playground: "Vite playground",
    copyright: "Fravelz",
    license: "License",
  },
  landing: {
    badge: "React 18+ · Tailwind CSS",
    hero:
      "Component library for notes sites and portfolio projects. " +
      "Dark theme with cyan and purple accents, TypeScript types, and npm publishing.",
    ctaExplore: "Browse documentation",
    installTitle: "Installation",
    installSubtitle: "Pick your package manager. Requires React 18+ and Tailwind in the app.",
    peersTitle: "Peer dependencies",
    importExampleTitle: "Import",
    tailwindNote: "Configure Tailwind in your app so component utility classes apply correctly.",
    sectionTitle: "What's included",
    sectionSubtitle: "documented pieces with interactive previews",
    componentsCount: "components",
    features: {
      atoms: {
        title: "Atoms",
        description: "Buttons, inputs, links, alerts, and typography ready for Tailwind.",
      },
      molecules: {
        title: "Molecules",
        description: "Cards, tables, copyable code, grids, and composed blocks.",
      },
      organisms: {
        title: "Organisms",
        description: "Sections, messages, roadmap, and page layouts.",
      },
    },
    integrateTitle: "Ready to integrate",
    integrateText: "Install the package, configure Tailwind, and import only what you need.",
    integrateCta: "Go to documentation",
    stats: {
      version: "Published version",
      documented: "Documented pieces",
      typescript: "Types included",
      license: "Open license",
    },
    quickStartTitle: "Get started in minutes",
    quickStartSubtitle: "Four steps from zero to your first component on screen",
    steps: {
      install: {
        title: "Install the package",
        description: "Add @fravelz/ui-kit-fravelz with npm, pnpm, bun, or yarn plus react and react-dom.",
      },
      tailwind: {
        title: "Configure Tailwind",
        description: "Include the package in Tailwind content so it scans classes from dist/.",
      },
      import: {
        title: "Import components",
        description: "Import only what you need from the public entry; the bundle supports tree-shaking.",
      },
      docs: {
        title: "Browse the docs",
        description: "Check props, examples, and live previews at /docs.",
      },
    },
    popularTitle: "Popular components",
    popularSubtitle: "Jump straight to docs with live demos",
    popular: {
      button: "Buttons with variants and sizes",
      card: "Cards for content blocks",
      code: "Syntax-highlighted code with copy",
      section: "Page sections with titles",
      "call-to-action": "CTAs with cyan–purple gradient",
    },
    viewDoc: "View docs",
    stackTitle: "Project requirements",
    stackSubtitle: "Built for modern React apps using Tailwind utilities",
    stack: {
      react: {
        title: "React 18+",
        description: "Peer dependencies: react and react-dom in your application.",
      },
      tailwind: {
        title: "Tailwind CSS v4",
        description: "Classes ship with components; your app must compile Tailwind.",
      },
      typescript: {
        title: "TypeScript",
        description: ".d.ts definitions published on npm for safe autocomplete.",
      },
      tree: {
        title: "Modular imports",
        description: "No mandatory global CSS; import individual atoms or organisms.",
      },
    },
    faqTitle: "FAQ",
    faq: {
      tailwind: {
        q: "Why don't I see any styles?",
        a:
          "Tailwind must scan node_modules/@fravelz/ui-kit-fravelz/dist. " +
          "Without that, kit utilities won't be generated.",
      },
      theme: {
        q: "Does the kit include a light theme?",
        a: "Components default to a dark palette. Wrap them in your app and add dark: variants in Tailwind if needed.",
      },
      playground: {
        q: "What is this site?",
        a: "A Vite playground to try the package. The published library only ships dist/, not this website.",
      },
      router: {
        q: "Does it work with React Router?",
        a: "Yes. You wire internal links; DynamicLink and SiteHeader/SiteFooter organisms accept custom slots.",
      },
    },
  },
  docs: {
    homeTitle: "UI Kit documentation",
    homeIntro:
      "Component index at /docs and one page per piece at /docs/:id. On mobile, pick a component below.",
    entriesCount: "documented entries",
    sidebarHome: "Home",
    sidebarAria: "Component index",
    import: "Import",
    usage: "Usage",
    props: "Props",
    preview: "Preview",
    noProps: "No documented props.",
    tableProp: "Prop",
    tableType: "Type",
    tableDefault: "Default",
    tableDescription: "Description",
    mobileNav: "Components",
    pagerAria: "Previous and next documentation",
    noPreview: "No preview available.",
  },
  sections: {
    utils: "Utilities",
    atoms: "Atoms",
    molecules: "Molecules",
    organisms: "Organisms",
  },
  layers: {
    Utilidad: "Utility",
    Atom: "Atom",
    Molecule: "Molecule",
    Organism: "Organism",
  },
  items: {
    icons: "SVG icons",
  },
  lang: {
    label: "Language",
    es: "ES",
    en: "EN",
  },
  theme: {
    label: "Theme",
    light: "Light",
    system: "System",
    dark: "Dark",
  },
} as const;
