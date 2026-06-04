/** Rutas del playground con prefijo de idioma (/es, /en). Usa useLocalePaths() en componentes. */

export {
  isDocsPath,
  isSiteHomePath,
  parseLocaleFromPathname,
  pathsForLocale,
  readStoredLocale,
  stripLocalePrefix,
  switchLocaleInPathname,
} from "../../i18n/routes";

export { useLocalePaths } from "../../i18n/useLocalePaths";
