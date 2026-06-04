import { PACKAGE, type ComponentDocEntry } from "../types";

export const ATOM_DISPLAY_DOCS: ComponentDocEntry[] = [
  {
    id: "text",
    name: "Text",
    layer: "Atom",
    packageExport: true,
    description: "Párrafo con variantes de color, tamaño y selectabilidad.",
    importLine: `import { Text } from "${PACKAGE}";`,
    usage: `<Text variant="muted" size="sm">Texto auxiliar</Text>`,
    props: [
      { name: "children", type: "ReactNode", default: "—", description: "Contenido." },
      {
        name: "variant",
        type: "string",
        default: '"default"',
        description: "default, secondary, muted, accent, highlight.",
      },
      {
        name: "size",
        type: '"sm" | "base" | "lg" | "xl"',
        default: '"base"',
        description: "Tamaño.",
      },
      {
        name: "selectability",
        type: "string",
        default: '"auto"',
        description: "auto, none, text, all.",
      },
      { name: "className", type: "string", default: '""', description: "Clases extra." },
    ],
  },
  {
    id: "tooltip",
    name: "Tooltip",
    layer: "Atom",
    packageExport: true,
    description: "Tooltip al hover sobre el children (no focus trap).",
    importLine: `import { Tooltip } from "${PACKAGE}";`,
    usage: `<Tooltip content="Ayuda" position="top"><Button>?</Button></Tooltip>`,
    props: [
      { name: "children", type: "ReactNode", default: "—", description: "Elemento disparador." },
      { name: "content", type: "ReactNode", default: "—", description: "Texto del tooltip." },
      {
        name: "position",
        type: '"top" | "bottom" | "left" | "right"',
        default: '"top"',
        description: "Posición.",
      },
      {
        name: "variant",
        type: '"default" | "dark" | "highlight"',
        default: '"default"',
        description: "Estilo.",
      },
      { name: "className", type: "string", default: '""', description: "Clases del tooltip." },
    ],
  },
  {
    id: "animation-development",
    name: "AnimationDevelopment",
    layer: "Atom",
    packageExport: true,
    description: "Animación Lottie (DotLottie). El archivo .lottie debe servirse en el consumidor.",
    importLine: `import { AnimationDevelopment } from "${PACKAGE}";`,
    usage: `<AnimationDevelopment />`,
    props: [],
    notes: [
      "Dependencia peer opcional: @lottiefiles/dotlottie-react en el proyecto consumidor.",
      "src apunta a ./AnimationDeveloment.lottie relativo a la ruta pública.",
    ],
  },
];
