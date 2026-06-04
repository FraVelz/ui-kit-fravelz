/** English copy for component documentation entries. */
export interface DocEnEntry {
  description: string;
  notes?: string[];
}

export const DOC_EN: Record<string, DocEnEntry> = {
  cn: {
    description:
      "Merges classes with clsx and resolves Tailwind conflicts via tailwind-merge. " +
      "Handy for custom components in consumer apps.",
  },
  icons: {
    description:
      "Inline SVG icons (no emojis). Used in Alert, Tag, and Code; also exported for Badge, Input, or CallToAction.",
    notes: [
      "Exported: IconInfo, IconSuccess, IconWarning, IconError, IconClose, " +
        "IconCheck, IconCopy, IconArrowRight, alertIcons.",
      "All accept an optional className (Tailwind, e.g. size-4).",
    ],
  },
  alert: {
    description: "Status messages with SVG icon, optional title, and dismissible close.",
  },
  badge: {
    description: "Compact chip with cyan/purple variants and sizes.",
  },
  button: {
    description: "Button with design-system variants and keyboard focus-visible ring.",
  },
  divider: {
    description: "Horizontal or vertical separator with optional center label.",
  },
  "gradient-text": {
    description: "Text with cyan–purple gradient (and other variants).",
  },
  input: {
    description: "Text field with label, icon, error message, and focus-visible styles.",
  },
  link: {
    description: "Link with smooth scroll to anchors (#id) and color variants.",
  },
  "dynamic-link": {
    description: "react-router-dom NavLink with visited and active states.",
    notes: [
      "Requires BrowserRouter (or equivalent) in the consumer app tree.",
      "In the playground, links to routes like /docs/button show active state.",
    ],
  },
  image: {
    description: "Image with dimensions; default alt matches width when height is 0.",
  },
  line: {
    description: "Simple horizontal rule (hr) with border variants.",
  },
  note: {
    description: "Secondary gray paragraph for footnotes or clarifications.",
  },
  tag: {
    description: "Category pill, optionally removable or keyboard-interactive.",
  },
  text: {
    description: "Paragraph with color, size, and text-selection variants.",
  },
  tooltip: {
    description: "Tooltip on hover over children (no focus trap).",
  },
  "animation-development": {
    description: "Lottie animation (DotLottie). The .lottie file must be served by the consumer.",
    notes: [
      "Optional peer dependency: @lottiefiles/dotlottie-react in the consumer project.",
      "src points to ./AnimationDeveloment.lottie relative to the public path.",
    ],
  },
  "call-to-action": {
    description: "Prominent CTA-style link with optional SVG icon.",
  },
  card: {
    description: "Container with title, subtitle, and border/hover variants.",
  },
  code: {
    description: "Code block with Prism.js and copy button (SVG icons).",
    notes: ["Includes code-block.css in the bundle (cyan/purple kit tokens)."],
  },
  container: {
    description: "Centered container with max-width and responsive padding.",
  },
  divided: {
    description: "Two-column layout: main content + secondary slot.",
  },
  grid: {
    description: "CSS grid with fixed columns or responsive breakpoints.",
  },
  list: {
    description: "Ordered or unordered list with kit styles.",
  },
  "progress-bar": {
    description: "Progress bar with optional label and percentage.",
  },
  table: {
    description: "Composable table: Table, TableHeader, TableRow, TableCell.",
  },
  title: {
    description: "h1–h3 heading with optional gradient.",
  },
  section: {
    description: "Page section with title, subtitle, and background variants.",
  },
  structure: {
    description: "Notes layout: Structure, CurriculumAside, and CurriculumFull.",
    notes: ["CurriculumAside is sticky at 2xl; CurriculumFull hides at 2xl."],
  },
  message: {
    description: "Modal via portal with overlay and close button.",
  },
  roadmap: {
    description: "Alternating timeline for learning steps or roadmaps.",
  },
};
