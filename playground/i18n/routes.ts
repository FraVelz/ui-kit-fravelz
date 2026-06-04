import { DEFAULT_LOCALE, LOCALE_STORAGE_KEY, type Locale } from "./types";

export function readStoredLocale(): Locale {
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored === "es" || stored === "en") return stored;
  } catch {
    /* ignore */
  }
  return DEFAULT_LOCALE;
}

export function parseLocaleFromPathname(pathname: string): Locale | null {
  const [first] = pathname.split("/").filter(Boolean);
  if (first === "es" || first === "en") return first;
  return null;
}

export function stripLocalePrefix(pathname: string): string {
  const locale = parseLocaleFromPathname(pathname);
  if (!locale) return pathname;
  const rest = pathname.slice(`/${locale}`.length);
  return rest === "" ? "/" : rest;
}

export function switchLocaleInPathname(pathname: string, next: Locale): string {
  const logical = stripLocalePrefix(pathname);
  return logical === "/" ? `/${next}` : `/${next}${logical}`;
}

export function isSiteHomePath(pathname: string): boolean {
  return stripLocalePrefix(pathname) === "/";
}

export function isDocsPath(pathname: string): boolean {
  const logical = stripLocalePrefix(pathname);
  return logical === "/docs" || logical.startsWith("/docs/");
}

export function pathsForLocale(locale: Locale) {
  return {
    siteHome: `/${locale}`,
    docsHome: `/${locale}/docs`,
    docsPath: (componentId: string) => `/${locale}/docs/${componentId}`,
  };
}
