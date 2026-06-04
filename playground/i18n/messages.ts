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
  },
  footer: {
    tagline:
      "Biblioteca React con atoms, molecules y organisms para proyectos del portfolio. Tipos TypeScript y estilos Tailwind en el consumidor.",
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
  },
  footer: {
    tagline:
      "React library with atoms, molecules, and organisms for portfolio projects. TypeScript types and Tailwind styles in the consumer app.",
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
