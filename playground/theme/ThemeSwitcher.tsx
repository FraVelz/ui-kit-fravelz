import { useLocale } from "../i18n/LocaleContext";
import { IconMonitor, IconMoon, IconSun } from "./ThemeIcons";
import { useTheme } from "./ThemeContext";
import "./theme-toggle.css";
import type { Theme } from "./types";

const OPTIONS: { id: Theme; Icon: typeof IconSun }[] = [
  { id: "light", Icon: IconSun },
  { id: "system", Icon: IconMonitor },
  { id: "dark", Icon: IconMoon },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const { t } = useLocale();

  return (
    <div className="fz-theme-segment" role="radiogroup" aria-label={t("theme.label")}>
      {OPTIONS.map(({ id, Icon }) => {
        const active = theme === id;
        return (
          <button
            key={id}
            type="button"
            role="radio"
            aria-checked={active}
            title={t(`theme.${id}`)}
            onClick={() => setTheme(id)}
            className={`fz-theme-segment-btn${active ? " fz-theme-segment-btn--active" : ""}`}
          >
            <Icon />
            <span className="fz-theme-segment-sr-only">{t(`theme.${id}`)}</span>
          </button>
        );
      })}
    </div>
  );
}
