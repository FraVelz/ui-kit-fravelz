import type { Locale } from "./types";

const es = {
  nav: {
    home: "Inicio",
    docs: "Documentación",
    components: "Componentes",
    npm: "npm",
    presentation: "Presentación",
    docsBadge: "documentación",
    index: "Índice",
    prev: "anterior",
    next: "siguiente",
    componentIndex: "Índice de componentes",
    menu: "Menú",
  },
  footer: {
    tagline:
      "Biblioteca React con atoms, molecules y organisms para proyectos del portfolio. Tipos TypeScript y estilos Tailwind en el consumidor.",
    documentation: "Documentación",
    project: "Proyecto",
    navigation: "Navegación",
    resources: "Recursos",
    readme: "README",
    documented: "componentes documentados",
    playground: "Playground Vite",
    copyright: "Fravelz",
    license: "Licencia",
  },
  landing: {
    badge: "React 18+ · Tailwind CSS",
    hero:
      "Biblioteca de componentes para sitios de notas y proyectos del portfolio. Diseño oscuro con acentos cyan y púrpura, tipos TypeScript y publicación en npm.",
    ctaExplore: "Explorar documentación",
    installTitle: "Instalación",
    installSubtitle: "Elige tu gestor de paquetes. Requiere React 18+ y Tailwind en el proyecto.",
    peersTitle: "Peer dependencies",
    importExampleTitle: "Importar",
    tailwindNote:
      "Configura Tailwind en tu app para que las clases de los componentes se apliquen correctamente.",
    sectionTitle: "Qué incluye",
    sectionSubtitle: "piezas documentadas con vistas previas interactivas",
    componentsCount: "componentes",
    features: {
      atoms: {
        title: "Atoms",
        description: "Botones, inputs, enlaces, alertas y tipografía listos para Tailwind.",
      },
      molecules: {
        title: "Molecules",
        description: "Cards, tablas, código con copiar, grids y bloques compuestos.",
      },
      organisms: {
        title: "Organisms",
        description: "Secciones, mensajes, roadmap y layouts de página.",
      },
    },
    integrateTitle: "Listo para integrar",
    integrateText:
      "Instala el paquete, configura Tailwind en tu app e importa solo lo que necesitas.",
    integrateCta: "Ir a la documentación",
    stats: {
      version: "Versión publicada",
      documented: "Piezas documentadas",
      typescript: "Tipos incluidos",
      license: "Licencia abierta",
    },
    quickStartTitle: "Empezar en minutos",
    quickStartSubtitle: "Cuatro pasos desde cero hasta el primer componente en pantalla",
    steps: {
      install: {
        title: "Instalar el paquete",
        description: "Añade @fravelz/ui-kit-fravelz con npm, pnpm, bun o yarn junto a react y react-dom.",
      },
      tailwind: {
        title: "Configurar Tailwind",
        description:
          "Incluye el paquete en el content de Tailwind para que escanee las clases de dist/.",
      },
      import: {
        title: "Importar componentes",
        description: "Importa solo lo que uses desde el entry público; el bundle admite tree-shaking.",
      },
      docs: {
        title: "Explorar la documentación",
        description: "Revisa props, ejemplos y vistas previas interactivas en /docs.",
      },
    },
    popularTitle: "Componentes más consultados",
    popularSubtitle: "Acceso directo a fichas con demo en vivo",
    popular: {
      button: "Botones con variantes y tamaños",
      card: "Cards para bloques de contenido",
      code: "Bloques de código con copiar",
      section: "Secciones de página con título",
      "call-to-action": "CTAs con gradiente cyan–púrpura",
    },
    viewDoc: "Ver ficha",
    stackTitle: "Requisitos del proyecto",
    stackSubtitle: "Pensado para apps React modernas con utilidades Tailwind",
    stack: {
      react: {
        title: "React 18+",
        description: "Peer dependencies: react y react-dom en tu aplicación.",
      },
      tailwind: {
        title: "Tailwind CSS v4",
        description: "Las clases viven en los componentes; tu app debe compilar Tailwind.",
      },
      typescript: {
        title: "TypeScript",
        description: "Definiciones .d.ts publicadas en npm para autocompletado seguro.",
      },
      tree: {
        title: "Importaciones modulares",
        description: "Sin estilos globales obligatorios; importa átomos o organismos sueltos.",
      },
    },
    faqTitle: "Preguntas frecuentes",
    faq: {
      tailwind: {
        q: "¿Por qué no veo los estilos?",
        a: "Tailwind debe escanear node_modules/@fravelz/ui-kit-fravelz/dist. Sin eso, las utilidades del kit no se generan.",
      },
      theme: {
        q: "¿El kit trae tema claro?",
        a: "Los componentes usan paleta oscura por defecto. En tu app puedes envolverlos y añadir variantes dark: en Tailwind.",
      },
      playground: {
        q: "¿Qué es este sitio?",
        a: "Es un playground Vite para probar el paquete. La librería publicada solo incluye dist/, no esta web.",
      },
      router: {
        q: "¿Funciona con React Router?",
        a: "Sí. Los enlaces internos de tu app los defines tú; DynamicLink y los organismos SiteHeader/SiteFooter aceptan slots.",
      },
    },
  },
  docs: {
    homeTitle: "Documentación del UI Kit",
    homeIntro:
      "Índice de componentes en /docs y una página por pieza en /docs/:id. En móvil, elige un componente abajo.",
    entriesCount: "entradas documentadas",
    sidebarHome: "Inicio",
    sidebarAria: "Índice de componentes",
    import: "Importación",
    usage: "Uso",
    props: "Props",
    preview: "Vista previa",
    noProps: "Sin props documentadas.",
    tableProp: "Prop",
    tableType: "Tipo",
    tableDefault: "Por defecto",
    tableDescription: "Descripción",
    mobileNav: "Componentes",
    pagerAria: "Documentación anterior y siguiente",
    noPreview: "Sin vista previa.",
  },
  sections: {
    utils: "Utilidades",
    atoms: "Atoms",
    molecules: "Molecules",
    organisms: "Organisms",
  },
  layers: {
    Utilidad: "Utilidad",
    Atom: "Atom",
    Molecule: "Molecule",
    Organism: "Organism",
  },
  items: {
    icons: "Iconos SVG",
  },
  lang: {
    label: "Idioma",
    es: "ES",
    en: "EN",
  },
  theme: {
    label: "Tema",
    light: "Claro",
    system: "Sistema",
    dark: "Oscuro",
  },
} as const;

const en = {
  nav: {
    home: "Home",
    docs: "Documentation",
    components: "Components",
    npm: "npm",
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
      "React library with atoms, molecules, and organisms for portfolio projects. TypeScript types and Tailwind styles in the consumer app.",
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
      "Component library for notes sites and portfolio projects. Dark theme with cyan and purple accents, TypeScript types, and npm publishing.",
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
        a: "Tailwind must scan node_modules/@fravelz/ui-kit-fravelz/dist. Without that, kit utilities won't be generated.",
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
};

export const messages: Record<Locale, typeof es> = { es, en: en as typeof es };

export type MessageKey = string;

function getByPath(obj: Record<string, unknown>, path: string): string | undefined {
  const parts = path.split(".");
  let cur: unknown = obj;
  for (const part of parts) {
    if (cur == null || typeof cur !== "object") return undefined;
    cur = (cur as Record<string, unknown>)[part];
  }
  return typeof cur === "string" ? cur : undefined;
}

export function translate(locale: Locale, key: MessageKey): string {
  return getByPath(messages[locale] as Record<string, unknown>, key) ?? key;
}
