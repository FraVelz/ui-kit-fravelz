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
import {
  parseLocaleFromPathname,
  readStoredLocale,
  switchLocaleInPathname,
} from "./routes";
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

  const [locale, setLocaleState] = useState<Locale>(() => urlLocale ?? readStoredLocale());

  useEffect(() => {
    if (urlLocale && urlLocale !== locale) {
      setLocaleState(urlLocale);
      persistLocale(urlLocale);
    }
  }, [urlLocale, locale]);

  const setLocale = useCallback(
    (next: Locale) => {
      if (next === locale && urlLocale === next) return;

      setLocaleState(next);
      persistLocale(next);

      const pathname = switchLocaleInPathname(location.pathname, next);
      if (pathname !== location.pathname) {
        navigate({ pathname, search: location.search, hash: location.hash });
      }
    },
    [locale, urlLocale, location.pathname, location.search, location.hash, navigate]
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

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
