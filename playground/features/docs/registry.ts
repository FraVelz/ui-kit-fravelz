/** Metadatos de documentación del UI Kit (playground). */

export const PACKAGE = "@fravelz/ui-kit-fravelz";

export interface DocPropRow {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export interface SubComponentDoc {
  name: string;
  props: DocPropRow[];
}

export interface ComponentDocEntry {
  id: string;
  name: string;
  layer: string;
  packageExport?: boolean;
  description: string;
  importLine?: string;
  usage?: string;
  props?: DocPropRow[];
  notes?: string[];
  subComponents?: SubComponentDoc[];
}

export interface DocSectionGroup {
  id: string;
  label: string;
  items: { id: string; name: string }[];
}

export const DOC_SECTIONS: DocSectionGroup[] = [
  {
    id: "utils",
    label: "Utilidades",
    items: [
      { id: "cn", name: "cn" },
      { id: "icons", name: "Iconos SVG" },
    ],
  },
  {
    id: "atoms",
    label: "Atoms",
    items: [
      { id: "alert", name: "Alert" },
      { id: "badge", name: "Badge" },
      { id: "button", name: "Button" },
      { id: "divider", name: "Divider" },
      { id: "gradient-text", name: "GradientText" },
      { id: "input", name: "Input" },
      { id: "link", name: "Link" },
      { id: "dynamic-link", name: "DynamicLink" },
      { id: "image", name: "Image" },
      { id: "line", name: "Line" },
      { id: "note", name: "Note" },
      { id: "tag", name: "Tag" },
      { id: "text", name: "Text" },
      { id: "tooltip", name: "Tooltip" },
      { id: "animation-development", name: "AnimationDevelopment" },
    ],
  },
  {
    id: "molecules",
    label: "Molecules",
    items: [
      { id: "call-to-action", name: "CallToAction" },
      { id: "card", name: "Card" },
      { id: "code", name: "Code" },
      { id: "container", name: "Container" },
      { id: "divided", name: "Divided" },
      { id: "grid", name: "Grid" },
      { id: "list", name: "List" },
      { id: "progress-bar", name: "ProgressBar" },
      { id: "table", name: "Table" },
      { id: "title", name: "Title" },
    ],
  },
  {
    id: "organisms",
    label: "Organisms",
    items: [
      { id: "section", name: "Section" },
      { id: "structure", name: "Structure" },
      { id: "message", name: "Message" },
      { id: "roadmap", name: "Roadmap" },
    ],
  },
];

export const COMPONENT_DOCS: ComponentDocEntry[] = [
  {
    id: "cn",
    name: "cn",
    layer: "Utilidad",
    packageExport: true,
    description:
      "Combina clases con clsx y resuelve conflictos de Tailwind mediante tailwind-merge. Útil en componentes personalizados del consumidor.",
    importLine: `import { cn } from "${PACKAGE}";`,
    usage: `className={cn("px-4", isActive && "bg-cyan-500/10", className)}`,
    props: [
      {
        name: "...inputs",
        type: "ClassValue[]",
        default: "—",
        description: "Clases condicionales o literales pasadas a clsx.",
      },
    ],
  },
  {
    id: "icons",
    name: "Iconos SVG",
    layer: "Utilidad",
    packageExport: true,
    description:
      "Iconos inline sin emojis. Usados internamente en Alert, Tag y Code; también exportados para Badge, Input o CallToAction.",
    importLine: `import { IconArrowRight, IconCheck, alertIcons } from "${PACKAGE}";`,
    usage: `<CallToAction icon={<IconArrowRight />}>Continuar</CallToAction>`,
    props: [],
    notes: [
      "Exportados: IconInfo, IconSuccess, IconWarning, IconError, IconClose, IconCheck, IconCopy, IconArrowRight, alertIcons.",
      "Todos aceptan className opcional (Tailwind, p. ej. size-4).",
    ],
  },
  {
    id: "alert",
    name: "Alert",
    layer: "Atom",
    packageExport: true,
    description: "Mensajes de estado con icono SVG, título opcional y cierre dismissible.",
    importLine: `import { Alert } from "${PACKAGE}";`,
    usage: `<Alert type="success" title="Listo">Cambios guardados.</Alert>`,
    props: [
      { name: "children", type: "ReactNode", default: "—", description: "Contenido del mensaje." },
      {
        name: "type",
        type: '"info" | "success" | "warning" | "error"',
        default: '"info"',
        description: "Estilo e icono.",
      },
      { name: "title", type: "string", default: "null", description: "Título opcional." },
      {
        name: "dismissible",
        type: "boolean",
        default: "false",
        description: "Muestra botón cerrar.",
      },
      {
        name: "onDismiss",
        type: "() => void",
        default: "null",
        description: "Callback al cerrar.",
      },
      { name: "className", type: "string", default: '""', description: "Clases Tailwind extra." },
    ],
  },
  {
    id: "badge",
    name: "Badge",
    layer: "Atom",
    packageExport: true,
    description: "Chip o etiqueta compacta con variantes cyan/purple y tamaños.",
    importLine: `import { Badge } from "${PACKAGE}";`,
    usage: `<Badge variant="success" size="sm" icon={<IconCheck />}>Activo</Badge>`,
    props: [
      { name: "children", type: "ReactNode", default: "—", description: "Texto del badge." },
      {
        name: "variant",
        type: '"cyan" | "purple" | "success" | "highlight"',
        default: '"cyan"',
        description: "Paleta.",
      },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Tamaño." },
      {
        name: "icon",
        type: "ReactNode",
        default: "null",
        description: "Icono SVG opcional a la izquierda.",
      },
      { name: "className", type: "string", default: '""', description: "Clases extra." },
    ],
  },
  {
    id: "button",
    name: "Button",
    layer: "Atom",
    packageExport: true,
    description: "Botón con variantes del design system y anillo focus-visible para teclado.",
    importLine: `import { Button } from "${PACKAGE}";`,
    usage: `<Button variant="primary" size="md" onClick={handleSave}>Guardar</Button>`,
    props: [
      { name: "children", type: "ReactNode", default: "—", description: "Etiqueta del botón." },
      {
        name: "variant",
        type: '"primary" | "secondary" | "outline" | "ghost"',
        default: '"primary"',
        description: "Estilo visual.",
      },
      {
        name: "size",
        type: '"sm" | "md" | "lg"',
        default: '"md"',
        description: "Padding y tipografía.",
      },
      { name: "className", type: "string", default: '""', description: "Clases extra." },
    ],
  },
  {
    id: "divider",
    name: "Divider",
    layer: "Atom",
    packageExport: true,
    description: "Separador horizontal o vertical con etiqueta central opcional.",
    importLine: `import { Divider } from "${PACKAGE}";`,
    usage: `<Divider label="o continúa" variant="cyan" size="md" />`,
    props: [
      {
        name: "variant",
        type: '"default" | "cyan" | "purple" | "dotted" | "gradient"',
        default: '"default"',
        description: "Estilo de línea.",
      },
      {
        name: "orientation",
        type: '"horizontal" | "vertical"',
        default: '"horizontal"',
        description: "Dirección.",
      },
      {
        name: "label",
        type: "string",
        default: "null",
        description: "Texto entre líneas (solo horizontal).",
      },
      {
        name: "size",
        type: '"sm" | "md" | "lg"',
        default: '"md"',
        description: "Margen vertical.",
      },
      { name: "className", type: "string", default: '""', description: "Clases extra." },
    ],
  },
  {
    id: "gradient-text",
    name: "GradientText",
    layer: "Atom",
    packageExport: true,
    description: "Texto con degradado cyan–purple (u otras variantes).",
    importLine: `import { GradientText } from "${PACKAGE}";`,
    usage: `<GradientText as="h1" variant="cyan-purple">Título</GradientText>`,
    props: [
      { name: "children", type: "ReactNode", default: "—", description: "Contenido." },
      {
        name: "variant",
        type: "string",
        default: '"cyan-purple"',
        description: "cyan-purple, purple-cyan, cyan-only, purple-only, blue-cyan.",
      },
      {
        name: "as",
        type: "string",
        default: '"span"',
        description: "Elemento HTML (span, h1, p…).",
      },
      { name: "className", type: "string", default: '""', description: "Clases extra." },
    ],
  },
  {
    id: "input",
    name: "Input",
    layer: "Atom",
    packageExport: true,
    description: "Campo de texto con label, icono, error y estilos focus-visible.",
    importLine: `import { Input } from "${PACKAGE}";`,
    usage: `<Input label="Email" variant="default" placeholder="tu@email.com" />`,
    props: [
      {
        name: "placeholder",
        type: "string",
        default: '"Enter text..."',
        description: "Placeholder.",
      },
      {
        name: "variant",
        type: '"default" | "purple" | "minimal"',
        default: '"default"',
        description: "Estilo del campo.",
      },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Tamaño." },
      { name: "label", type: "string", default: "null", description: "Etiqueta superior." },
      {
        name: "icon",
        type: "ReactNode",
        default: "null",
        description: "Icono SVG a la izquierda.",
      },
      {
        name: "error",
        type: "string",
        default: "null",
        description: "Mensaje de error bajo el campo.",
      },
      { name: "disabled", type: "boolean", default: "false", description: "Estado deshabilitado." },
      { name: "className", type: "string", default: '""', description: "Clases en el input." },
      {
        name: "...props",
        type: "input attrs",
        default: "—",
        description: "Resto de atributos nativos (value, onChange, type…).",
      },
    ],
  },
  {
    id: "link",
    name: "Link",
    layer: "Atom",
    packageExport: true,
    description: "Enlace con scroll suave a anclas (#id) y variantes de color.",
    importLine: `import { Link } from "${PACKAGE}";`,
    usage: `<Link href="#seccion" variant="default">Ir a sección</Link>`,
    props: [
      { name: "href", type: "string", default: "—", description: "URL o ancla." },
      { name: "children", type: "ReactNode", default: "—", description: "Texto del enlace." },
      { name: "target", type: "string", default: '"_self"', description: "Target del anchor." },
      {
        name: "variant",
        type: '"default" | "purple" | "accent"',
        default: '"default"',
        description: "Color y focus ring.",
      },
      { name: "className", type: "string", default: "—", description: "Clases extra." },
    ],
  },
  {
    id: "dynamic-link",
    name: "DynamicLink",
    layer: "Atom",
    packageExport: true,
    description: "NavLink de react-router-dom con estado visitado y activo.",
    importLine: `import { DynamicLink } from "${PACKAGE}";`,
    usage: `<DynamicLink to="/docs">Documentación</DynamicLink>`,
    props: [
      { name: "to", type: "string", default: "—", description: "Ruta de React Router." },
      { name: "children", type: "ReactNode", default: "—", description: "Texto del enlace." },
      {
        name: "className",
        type: "string",
        default: '""',
        description: "Clases extra en el NavLink.",
      },
    ],
    notes: [
      "Requiere BrowserRouter (o equivalente) en el árbol de la app consumidora.",
      "En el playground, enlaza a rutas como /docs/button para ver estado activo.",
    ],
  },
  {
    id: "image",
    name: "Image",
    layer: "Atom",
    packageExport: true,
    description: "Imagen con dimensiones y alt por defecto igual al ancho si height es 0.",
    importLine: `import { Image } from "${PACKAGE}";`,
    usage: `<Image source="/logo.png" alternateText="Logo" width={120} />`,
    props: [
      { name: "source", type: "string", default: "—", description: "src de la imagen." },
      { name: "alternateText", type: "string", default: "—", description: "Texto alternativo." },
      { name: "width", type: "number", default: "100", description: "Ancho en px." },
      { name: "height", type: "number", default: "0", description: "Alto; 0 usa width como alto." },
      { name: "className", type: "string", default: '""', description: "Clases extra." },
    ],
  },
  {
    id: "line",
    name: "Line",
    layer: "Atom",
    packageExport: true,
    description: "Línea horizontal simple (hr) con variantes de borde.",
    importLine: `import { Line } from "${PACKAGE}";`,
    usage: `<Line variant="cyan" className="my-8" />`,
    props: [
      {
        name: "variant",
        type: '"default" | "cyan" | "purple" | "subtle"',
        default: '"default"',
        description: "Color del borde.",
      },
      { name: "className", type: "string", default: '""', description: "Clases extra." },
    ],
  },
  {
    id: "note",
    name: "Note",
    layer: "Atom",
    packageExport: true,
    description: "Párrafo secundario en gris para notas al pie o aclaraciones.",
    importLine: `import { Note } from "${PACKAGE}";`,
    usage: `<Note id="nota-1">Requiere Tailwind en el proyecto.</Note>`,
    props: [
      { name: "children", type: "ReactNode", default: "—", description: "Contenido." },
      { name: "id", type: "string", default: '""', description: "id del párrafo." },
      { name: "className", type: "string", default: '""', description: "Clases extra." },
    ],
  },
  {
    id: "tag",
    name: "Tag",
    layer: "Atom",
    packageExport: true,
    description: "Pill de categoría, opcionalmente removable o interactivo (teclado).",
    importLine: `import { Tag } from "${PACKAGE}";`,
    usage: `<Tag variant="cyan" removable onRemove={() => {}}>React</Tag>`,
    props: [
      { name: "children", type: "ReactNode", default: "—", description: "Etiqueta." },
      {
        name: "variant",
        type: '"cyan" | "purple" | "gray" | "gradient"',
        default: '"cyan"',
        description: "Estilo.",
      },
      {
        name: "removable",
        type: "boolean",
        default: "false",
        description: "Botón cerrar con IconClose.",
      },
      { name: "onRemove", type: "() => void", default: "null", description: "Al pulsar cerrar." },
      {
        name: "interactive",
        type: "boolean",
        default: "false",
        description: "role=button y tabIndex para foco.",
      },
      { name: "className", type: "string", default: '""', description: "Clases extra." },
    ],
  },
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
  {
    id: "call-to-action",
    name: "CallToAction",
    layer: "Molecule",
    packageExport: true,
    description: "Enlace destacado tipo CTA con icono SVG opcional.",
    importLine: `import { CallToAction, IconArrowRight } from "${PACKAGE}";`,
    usage: `<CallToAction href="/signup" icon={<IconArrowRight />}>Empezar</CallToAction>`,
    props: [
      { name: "children", type: "ReactNode", default: "—", description: "Texto del CTA." },
      { name: "href", type: "string", default: '"#"', description: "URL destino." },
      {
        name: "variant",
        type: '"primary" | "secondary" | "outline" | "ghost"',
        default: '"primary"',
        description: "Igual que Button.",
      },
      { name: "icon", type: "ReactNode", default: "null", description: "Icono a la izquierda." },
      { name: "target", type: "string", default: '"_self"', description: "Target del anchor." },
      { name: "className", type: "string", default: '""', description: "Clases extra." },
    ],
  },
  {
    id: "card",
    name: "Card",
    layer: "Molecule",
    packageExport: true,
    description: "Contenedor con título, subtítulo y variantes de borde/hover.",
    importLine: `import { Card } from "${PACKAGE}";`,
    usage: `<Card title="Proyecto" variant="elevated">Contenido</Card>`,
    props: [
      { name: "children", type: "ReactNode", default: "—", description: "Cuerpo de la card." },
      { name: "title", type: "string", default: "null", description: "Título opcional." },
      {
        name: "subtitle",
        type: "string",
        default: "null",
        description: "Subtítulo bajo el título.",
      },
      {
        name: "variant",
        type: '"default" | "elevated" | "gradient" | "minimal"',
        default: '"default"',
        description: "Estilo.",
      },
      {
        name: "hoverable",
        type: "boolean",
        default: "true",
        description: "Efectos hover en borde/sombra.",
      },
      { name: "className", type: "string", default: '""', description: "Clases extra." },
    ],
  },
  {
    id: "code",
    name: "Code",
    layer: "Molecule",
    packageExport: true,
    description: "Bloque de código con Prism.js y botón copiar (iconos SVG).",
    importLine: `import { Code } from "${PACKAGE}";`,
    usage: '<Code codeContent="npm install pkg" language="bash" />',
    props: [
      { name: "codeContent", type: "string", default: "—", description: "Código a mostrar." },
      {
        name: "language",
        type: "string",
        default: '"javascript"',
        description: "Lenguaje Prism (javascript, bash…).",
      },
      {
        name: "compact",
        type: "boolean",
        default: "false",
        description: "Sin barra de lenguaje; botón copiar en la esquina (ideal para imports).",
      },
    ],
    notes: ["Incluye code-block.css en el bundle (tokens cyan/púrpura del kit)."],
  },
  {
    id: "container",
    name: "Container",
    layer: "Molecule",
    packageExport: true,
    description: "Contenedor centrado con max-width y padding responsivo.",
    importLine: `import { Container } from "${PACKAGE}";`,
    usage: `<Container size="lg" variant="section">{children}</Container>`,
    props: [
      { name: "children", type: "ReactNode", default: "—", description: "Contenido." },
      {
        name: "size",
        type: '"sm" | "md" | "lg" | "xl" | "full"',
        default: '"md"',
        description: "Ancho máximo.",
      },
      {
        name: "variant",
        type: '"default" | "compact" | "relaxed" | "section"',
        default: '"default"',
        description: "Padding.",
      },
      { name: "className", type: "string", default: '""', description: "Clases extra." },
    ],
  },
  {
    id: "divided",
    name: "Divided",
    layer: "Molecule",
    packageExport: true,
    description: "Layout dos columnas: contenido principal + slot secundario.",
    importLine: `import { Divided } from "${PACKAGE}";`,
    usage: `<Divided secondaryContent={<Image ... />}>Texto</Divided>`,
    props: [
      { name: "children", type: "ReactNode", default: "—", description: "Columna principal." },
      {
        name: "secondaryContent",
        type: "ReactNode",
        default: "—",
        description: "Columna lateral.",
      },
      {
        name: "hasBorder",
        type: "boolean",
        default: "false",
        description: "Borde exterior opcional.",
      },
    ],
  },
  {
    id: "grid",
    name: "Grid",
    layer: "Molecule",
    packageExport: true,
    description: "CSS grid con columnas fijas o breakpoints responsivos.",
    importLine: `import { Grid } from "${PACKAGE}";`,
    usage: `<Grid cols={3} gap="md" responsive={false}>{items}</Grid>`,
    props: [
      { name: "children", type: "ReactNode", default: "—", description: "Celdas." },
      {
        name: "cols",
        type: "number",
        default: "3",
        description: "Columnas si responsive=false (1,2,3,4,6).",
      },
      {
        name: "gap",
        type: '"sm" | "md" | "lg" | "xl"',
        default: '"md"',
        description: "Espacio entre celdas.",
      },
      {
        name: "responsive",
        type: "boolean",
        default: "true",
        description: "Grid adaptativo sm→lg.",
      },
      { name: "className", type: "string", default: '""', description: "Clases extra." },
    ],
  },
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

export const DOC_BY_ID: Record<string, ComponentDocEntry> = Object.fromEntries(
  COMPONENT_DOCS.map((doc) => [doc.id, doc])
);
