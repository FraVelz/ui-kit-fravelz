import { cn } from "../kit";
import { useLocale } from "./LocaleContext";
import type { Locale } from "./types";

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      className="inline-flex items-center rounded-md border border-gray-300 p-0.5 dark:border-gray-700"
      role="group"
      aria-label={t("lang.label")}
    >
      {(["es", "en"] as Locale[]).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={cn(
            "rounded px-2 py-1 font-mono text-xs transition-colors outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80",
            locale === code
              ? "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300"
              : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
          )}
        >
          {t(`lang.${code}`)}
        </button>
      ))}
    </div>
  );
}
