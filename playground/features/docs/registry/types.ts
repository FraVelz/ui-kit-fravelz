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
