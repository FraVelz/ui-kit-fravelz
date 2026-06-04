import { Card, Grid, Section, Text, Title } from "../../kit";
import { useLocale } from "../../i18n/LocaleContext";
import { FAQ_KEYS } from "./landing-data";

export default function LandingFaq() {
  const { t } = useLocale();

  return (
    <Section title={t("landing.faqTitle")} variant="minimal">
      <Grid cols={2} gap="md" responsive>
        {FAQ_KEYS.map((key) => (
          <Card key={key} variant="default" hoverable={false}>
            <Title headingLevel="h3" className="!mb-2 !text-base">
              {t(`landing.faq.${key}.q`)}
            </Title>
            <Text variant="secondary" size="sm" className="!py-0">
              {t(`landing.faq.${key}.a`)}
            </Text>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
