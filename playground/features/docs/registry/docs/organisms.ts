import { PACKAGE, type ComponentDocEntry } from "../types";

export const ORGANISM_DOCS: ComponentDocEntry[] = [
  {
    id: "section",
    name: "Section",
    layer: "Organism",
    packageExport: true,
    description: "Sección de página con título, subtítulo y variantes de fondo.",
    importLine: `import { Section } from "${PACKAGE}";`,
    usage: `<Section title="Features" subtitle="Resumen" variant="highlighted">{...}</Section>`,
    props: [
      {
        name: "children",
        type: "ReactNode",
        default: "—",
        description: "Contenido (max-w-6xl centrado).",
      },
      { name: "title", type: "string", default: "null", description: "Título de sección." },
      { name: "subtitle", type: "string", default: "null", description: "Subtítulo." },
      {
        name: "variant",
        type: '"default" | "highlighted" | "minimal" | "elevated"',
        default: '"default"',
        description: "Fondo y bordes.",
      },
      { name: "id", type: "string", default: "null", description: "id del section (anclas)." },
      { name: "className", type: "string", default: '""', description: "Clases extra." },
    ],
  },
  {
    id: "structure",
    name: "Structure",
    layer: "Organism",
    packageExport: true,
    description: "Layout para notas: Structure, CurriculumAside y CurriculumFull.",
    importLine: `import { Structure, CurriculumAside, CurriculumFull } from "${PACKAGE}";`,
    usage: `<Structure><CurriculumFull curriculumContent={Ol} />...</Structure>`,
    props: [],
    subComponents: [
      {
        name: "Structure",
        props: [
          {
            name: "children",
            type: "ReactNode",
            default: "—",
            description: "Contenido principal.",
          },
        ],
      },
      {
        name: "CurriculumAside",
        props: [
          { name: "children", type: "ReactNode", default: "—", description: "Items del índice." },
          {
            name: "curriculumContent",
            type: "Component",
            default: "—",
            description: "Componente lista (p. ej. ol).",
          },
        ],
      },
      {
        name: "CurriculumFull",
        props: [
          {
            name: "curriculumContent",
            type: "Component",
            default: "—",
            description: "Índice visible en viewport pequeño.",
          },
        ],
      },
    ],
    notes: ["CurriculumAside es sticky en 2xl; CurriculumFull se oculta en 2xl."],
  },
  {
    id: "message",
    name: "Message",
    layer: "Organism",
    packageExport: true,
    description: "Modal vía portal con overlay y botón cerrar.",
    importLine: `import { Message } from "${PACKAGE}";`,
    usage: `{open && <Message title="Aviso" onClose={() => setOpen(false)}>Texto</Message>}`,
    props: [
      { name: "children", type: "ReactNode", default: "—", description: "Cuerpo del modal." },
      { name: "title", type: "string", default: "—", description: "Título opcional." },
      { name: "onClose", type: "() => void", default: "—", description: "Cierra el modal." },
      {
        name: "variant",
        type: '"default" | "success" | "warning" | "error"',
        default: '"default"',
        description: "Color del borde.",
      },
    ],
  },
  {
    id: "roadmap",
    name: "Roadmap",
    layer: "Organism",
    packageExport: true,
    description: "Timeline alternado para pasos de aprendizaje o roadmap.",
    importLine: `import { Roadmap } from "${PACKAGE}";`,
    usage: `<Roadmap steps={[{ title: "Paso", description: "..." }]} />`,
    props: [
      {
        name: "steps",
        type: "{ title, description, additionalContent? }[]",
        default: "—",
        description: "Array de pasos del timeline.",
      },
    ],
  },
];
