import { useMemo } from "react";
import { useLocale } from "./LocaleContext";
import { pathsForLocale } from "./routes";

export function useLocalePaths() {
  const { locale } = useLocale();
  return useMemo(() => pathsForLocale(locale), [locale]);
}
