import { SegmentedControl } from "../kit";
import { useLocale } from "./LocaleContext";
import type { Locale } from "./types";

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();

  return (
    <SegmentedControl<Locale>
      value={locale}
      onChange={setLocale}
      aria-label={t("lang.label")}
      options={[
        { value: "es", label: t("lang.es") },
        { value: "en", label: t("lang.en") },
      ]}
    />
  );
}
