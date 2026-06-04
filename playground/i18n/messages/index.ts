import type { Locale } from "../types";
import { en } from "./en";
import { es } from "./es";

export const messages: Record<Locale, typeof es> = { es, en: en as unknown as typeof es };

export type MessageKey = string;

function getByPath(obj: Record<string, unknown>, path: string): string | undefined {
  const parts = path.split(".");
  let cur: unknown = obj;
  for (const part of parts) {
    if (cur == null || typeof cur !== "object") return undefined;
    cur = (cur as Record<string, unknown>)[part];
  }
  return typeof cur === "string" ? cur : undefined;
}

export function translate(locale: Locale, key: MessageKey): string {
  return getByPath(messages[locale] as Record<string, unknown>, key) ?? key;
}
