export * from "./types";
export { DOC_SECTIONS } from "./sections";

import type { ComponentDocEntry } from "./types";
import { ATOM_DOCS } from "./docs/atoms/index";
import { MOLECULE_DOCS } from "./docs/molecules/index";
import { ORGANISM_DOCS } from "./docs/organisms";
import { UTILS_DOCS } from "./docs/utils";

export const COMPONENT_DOCS: ComponentDocEntry[] = [
  ...UTILS_DOCS,
  ...ATOM_DOCS,
  ...MOLECULE_DOCS,
  ...ORGANISM_DOCS,
];

export const DOC_BY_ID: Record<string, ComponentDocEntry> = Object.fromEntries(
  COMPONENT_DOCS.map((doc) => [doc.id, doc])
);
