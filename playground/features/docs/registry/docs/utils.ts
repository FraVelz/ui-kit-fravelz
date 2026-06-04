import { PACKAGE, type ComponentDocEntry } from "../types";

export const UTILS_DOCS: ComponentDocEntry[] = [
  {
    id: "cn",
    name: "cn",
    layer: "Utilidad",
    packageExport: true,
    description:
      "Combina clases con clsx y resuelve conflictos de Tailwind mediante tailwind-merge. " +
      "Útil en componentes personalizados del consumidor.",
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
      "Iconos inline sin emojis. Usados internamente en Alert, Tag y Code; " +
      "también exportados para Badge, Input o CallToAction.",
    importLine: `import { IconArrowRight, IconCheck, alertIcons } from "${PACKAGE}";`,
    usage: `<CallToAction icon={<IconArrowRight />}>Continuar</CallToAction>`,
    props: [],
    notes: [
      "Exportados: IconInfo, IconSuccess, IconWarning, IconError, IconClose, " +
        "IconCheck, IconCopy, IconArrowRight, alertIcons.",
      "Todos aceptan className opcional (Tailwind, p. ej. size-4).",
    ],
  },
];
