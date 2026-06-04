export const es = {
  nav: {
    home: "Inicio",
    docs: "Documentación",
    components: "Componentes",
    npm: "npm",
    github: "GitHub",
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
      "Biblioteca React con atoms, molecules y organisms para proyectos del portfolio. " +
      "Tipos TypeScript y estilos Tailwind en el consumidor.",
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
      "Biblioteca de componentes para sitios de notas y proyectos del portfolio. " +
      "Diseño oscuro con acentos cyan y púrpura, tipos TypeScript y publicación en npm.",
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
        a:
          "Tailwind debe escanear node_modules/@fravelz/ui-kit-fravelz/dist. " +
          "Sin eso, las utilidades del kit no se generan.",
      },
      theme: {
        q: "¿El kit trae tema claro?",
        a:
          "Los componentes usan paleta oscura por defecto. " +
          "En tu app puedes envolverlos y añadir variantes dark: en Tailwind.",
      },
      playground: {
        q: "¿Qué es este sitio?",
        a: "Es un playground Vite para probar el paquete. La librería publicada solo incluye dist/, no esta web.",
      },
      router: {
        q: "¿Funciona con React Router?",
        a:
          "Sí. Los enlaces internos de tu app los defines tú; " +
          "DynamicLink y los organismos SiteHeader/SiteFooter aceptan slots.",
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
