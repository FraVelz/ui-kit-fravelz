import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { translate, type MessageKey } from "./messages";
import { parseLocaleFromPathname, readStoredLocale, switchLocaleInPathname } from "./routes";
import { LOCALE_STORAGE_KEY, type Locale } from "./types";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: MessageKey) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

function persistLocale(locale: Locale) {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    /* ignore */
  }
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const urlLocale = parseLocaleFromPathname(location.pathname);
  const [fallbackLocale, setFallbackLocale] = useState<Locale>(readStoredLocale);
  const { pathname, search, hash } = location;

  const locale = urlLocale ?? fallbackLocale;

  useEffect(() => {
    persistLocale(locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback(
    (next: Locale) => {
      if (next === locale) return;

      setFallbackLocale(next);

      const nextPathname = switchLocaleInPathname(pathname, next);
      if (nextPathname !== pathname) {
        navigate({ pathname: nextPathname, search, hash });
      }
    },
    [locale, navigate, pathname, search, hash]
  );

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: (key: MessageKey) => translate(locale, key),
    }),
    [locale, setLocale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
