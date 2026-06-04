import type { DocSectionGroup } from "./types";

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
