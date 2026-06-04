import { COMPONENT_DOCS } from "../docs/registry";

export function countByLayer(layer: "Atom" | "Molecule" | "Organism") {
  return COMPONENT_DOCS.filter((entry) => entry.layer === layer).length;
}

export const POPULAR_DOC_IDS = ["button", "card", "code", "section", "call-to-action"] as const;

export type PopularDocId = (typeof POPULAR_DOC_IDS)[number];

export const QUICK_START_STEP_KEYS = ["install", "tailwind", "import", "docs"] as const;

export type QuickStartStepKey = (typeof QUICK_START_STEP_KEYS)[number];

export const STACK_KEYS = ["react", "tailwind", "typescript", "tree"] as const;

export type StackKey = (typeof STACK_KEYS)[number];

export const FAQ_KEYS = ["tailwind", "theme", "playground", "router"] as const;

export type FaqKey = (typeof FAQ_KEYS)[number];

export const LANDING_FEATURES = [
  { key: "atoms" as const, badge: "cyan" as const, count: countByLayer("Atom") },
  { key: "molecules" as const, badge: "purple" as const, count: countByLayer("Molecule") },
  { key: "organisms" as const, badge: "success" as const, count: countByLayer("Organism") },
];
