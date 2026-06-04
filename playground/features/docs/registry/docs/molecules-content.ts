import { PACKAGE, type ComponentDocEntry } from "../types";

export const MOLECULE_CONTENT_DOCS: ComponentDocEntry[] = [
  {
    id: "list",
    name: "List",
    layer: "Molecule",
    packageExport: true,
    description: "Lista ordenada o desordenada con estilos del kit.",
    importLine: `import { List } from "${PACKAGE}";`,
    usage: `<List listType="ul"><li>Item</li></List>`,
    props: [
      { name: "children", type: "ReactNode", default: "—", description: "Elementos li." },
      { name: "listType", type: '"ul" | "ol"', default: '"ul"', description: "Tipo de lista." },
      { name: "className", type: "string", default: '""', description: "Clases extra." },
    ],
  },
  {
    id: "progress-bar",
    name: "ProgressBar",
    layer: "Molecule",
    packageExport: true,
    description: "Barra de progreso con etiqueta y porcentaje opcional.",
    importLine: `import { ProgressBar } from "${PACKAGE}";`,
    usage: `<ProgressBar value={40} max={100} label="Carga" variant="gradient" />`,
    props: [
      { name: "value", type: "number", default: "0", description: "Valor actual." },
      { name: "max", type: "number", default: "100", description: "Valor máximo." },
      { name: "label", type: "string", default: "null", description: "Etiqueta izquierda." },
      {
        name: "showPercentage",
        type: "boolean",
        default: "true",
        description: "Muestra % a la derecha.",
      },
      {
        name: "variant",
        type: "string",
        default: '"cyan"',
        description: "cyan, purple, gradient, success.",
      },
      {
        name: "size",
        type: '"sm" | "md" | "lg" | "xl"',
        default: '"md"',
        description: "Altura de la barra.",
      },
      {
        name: "animated",
        type: "boolean",
        default: "true",
        description: "Transición al cambiar value.",
      },
      { name: "className", type: "string", default: '""', description: "Clases del contenedor." },
    ],
  },
  {
    id: "table",
    name: "Table",
    layer: "Molecule",
    packageExport: true,
    description: "Tabla compuesta: Table, TableHeader, TableRow, TableCell.",
    importLine: `import { Table, TableHeader, TableRow, TableCell } from "${PACKAGE}";`,
    usage: `<Table><TableHeader headers={["A","B"]} /><tbody><TableRow>...</TableRow></tbody></Table>`,
    props: [],
    subComponents: [
      {
        name: "Table",
        props: [
          { name: "children", type: "ReactNode", default: "—", description: "thead + tbody." },
          { name: "className", type: "string", default: '""', description: "Clases del wrapper." },
        ],
      },
      {
        name: "TableHeader",
        props: [
          { name: "headers", type: "string[]", default: "[]", description: "Textos de columnas." },
        ],
      },
      {
        name: "TableRow",
        props: [
          { name: "children", type: "ReactNode", default: "—", description: "Celdas TableCell." },
          { name: "enableHover", type: "boolean", default: "true", description: "Hover en fila." },
        ],
      },
      {
        name: "TableCell",
        props: [
          { name: "children", type: "ReactNode", default: "—", description: "Contenido celda." },
          {
            name: "alignment",
            type: '"left" | "center" | "right"',
            default: '"left"',
            description: "Alineación.",
          },
        ],
      },
    ],
  },
  {
    id: "title",
    name: "Title",
    layer: "Molecule",
    packageExport: true,
    description: "Encabezado h1–h3 con degradado opcional.",
    importLine: `import { Title } from "${PACKAGE}";`,
    usage: `<Title headingLevel="h2" id="intro" variant="gradient">Sección</Title>`,
    props: [
      {
        name: "headingLevel",
        type: '"h1" | "h2" | "h3"',
        default: "—",
        description: "Nivel semántico.",
      },
      { name: "children", type: "ReactNode", default: "—", description: "Texto del título." },
      {
        name: "variant",
        type: "string",
        default: '"gradient"',
        description: "gradient u otro estilo.",
      },
      { name: "id", type: "string", default: '""', description: "id del heading." },
      { name: "className", type: "string", default: '""', description: "Clases extra." },
    ],
  },
];
