import { cn } from "../kit";
import { useLocale } from "../i18n/LocaleContext";
import { useTheme } from "./ThemeContext";
import type { Theme } from "./types";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const { t } = useLocale();

  return (
    <div
      className="inline-flex items-center rounded-md border border-gray-300 p-0.5 dark:border-gray-700"
      role="group"
      aria-label={t("theme.label")}
    >
      {(["light", "dark"] as Theme[]).map((mode) => (
        <button
          key={mode}
          type="button"
          onClick={() => setTheme(mode)}
          aria-pressed={theme === mode}
          className={cn(
            "rounded px-2 py-1 font-mono text-xs transition-colors outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80",
            theme === mode
              ? "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300"
              : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
          )}
        >
          {t(`theme.${mode}`)}
        </button>
      ))}
    </div>
  );
}
