import type { ComponentDocEntry, DocPropRow, DocSectionGroup } from "../docs/registry";
import { DOC_SECTIONS } from "../docs/registry";
import type { Locale } from "./types";
import { DOC_EN } from "./doc-en";
import { PROP_LABELS_EN } from "./prop-labels-en";
import { messages } from "./messages";

function localizeProp(row: DocPropRow, locale: Locale): DocPropRow {
  if (locale === "es") return row;
  return {
    ...row,
    description: PROP_LABELS_EN[row.name] ?? row.description,
  };
}

export function localizeDocEntry(entry: ComponentDocEntry, locale: Locale): ComponentDocEntry {
  if (locale === "es") return entry;

  const en = DOC_EN[entry.id];
  return {
    ...entry,
    layer: messages.en.layers[entry.layer as keyof typeof messages.en.layers] ?? entry.layer,
    description: en?.description ?? entry.description,
    notes: en?.notes ?? entry.notes,
    props: entry.props?.map((p) => localizeProp(p, locale)),
    subComponents: entry.subComponents?.map((sub) => ({
      ...sub,
      props: sub.props.map((p) => localizeProp(p, locale)),
    })),
  };
}

export function getDocSections(locale: Locale): DocSectionGroup[] {
  if (locale === "es") return DOC_SECTIONS;

  return DOC_SECTIONS.map((group) => ({
    ...group,
    label: messages.en.sections[group.id as keyof typeof messages.en.sections] ?? group.label,
    items: group.items.map((item) => ({
      ...item,
      name: (messages.en.items as Record<string, string>)[item.id] ?? item.name,
    })),
  }));
}
