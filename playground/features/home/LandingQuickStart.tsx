import { Card, Grid, IconCheck, Section, Text } from "../../kit";
import { useLocale } from "../../i18n/LocaleContext";
import { QUICK_START_STEP_KEYS } from "./landing-data";

export default function LandingQuickStart() {
  const { t } = useLocale();

  return (
    <Section
      title={t("landing.quickStartTitle")}
      subtitle={t("landing.quickStartSubtitle")}
      variant="elevated"
      align="center"
      className="mx-auto max-w-6xl rounded-xl"
    >
      <Grid cols={2} gap="lg" responsive>
        {QUICK_START_STEP_KEYS.map((key, index) => (
          <Card key={key} variant="default" hoverable={false}>
            <div className="mb-3 flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-full bg-cyan-500/15 font-mono text-sm font-bold text-cyan-700 dark:text-cyan-300">
                {index + 1}
              </span>
              <IconCheck className="size-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <p className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
              {t(`landing.steps.${key}.title`)}
            </p>
            <Text variant="secondary" size="sm" className="!py-0">
              {t(`landing.steps.${key}.description`)}
            </Text>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
