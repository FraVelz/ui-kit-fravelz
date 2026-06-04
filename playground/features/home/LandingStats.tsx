import packageJson from "../../../package.json";
import { Card, Container, Grid, Text } from "../../kit";
import { COMPONENT_DOCS } from "../docs/registry";
import { useLocale } from "../../i18n/LocaleContext";

export default function LandingStats() {
  const { t } = useLocale();

  const items = [
    { label: t("landing.stats.version"), value: `v${packageJson.version}` },
    { label: t("landing.stats.documented"), value: String(COMPONENT_DOCS.length) },
    { label: t("landing.stats.typescript"), value: ".d.ts" },
    { label: t("landing.stats.license"), value: "ISC" },
  ];

  return (
    <Container size="md" className="!py-0 pb-12">
      <Grid cols={4} gap="md" responsive={false} className="!grid-cols-2 lg:!grid-cols-4">
        {items.map((item) => (
          <Card key={item.label} variant="minimal" hoverable={false} className="text-center">
            <p className="font-mono text-2xl font-bold text-cyan-700 dark:text-cyan-300">{item.value}</p>
            <Text variant="muted" size="sm" className="!py-0 mt-1">
              {item.label}
            </Text>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}
