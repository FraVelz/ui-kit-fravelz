import { Badge, Card, Grid, Section, Text } from "../../kit";
import { useLocale } from "../../i18n/LocaleContext";
import { STACK_KEYS } from "./landing-data";

const STACK_BADGE = {
  react: "cyan" as const,
  tailwind: "purple" as const,
  typescript: "success" as const,
  tree: "cyan" as const,
};

export default function LandingStack() {
  const { t } = useLocale();

  return (
    <Section
      title={t("landing.stackTitle")}
      subtitle={t("landing.stackSubtitle")}
      variant="default"
      align="center"
      className="border-y border-gray-200/80 dark:border-cyan-500/20"
    >
      <Grid cols={2} gap="lg" responsive>
        {STACK_KEYS.map((key) => (
          <Card key={key} variant="minimal" hoverable>
            <Badge variant={STACK_BADGE[key]} size="sm" className="mb-3">
              {t(`landing.stack.${key}.title`)}
            </Badge>
            <Text variant="secondary" size="sm" className="!py-0">
              {t(`landing.stack.${key}.description`)}
            </Text>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
