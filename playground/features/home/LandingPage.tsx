import {
  Badge,
  CallToAction,
  Card,
  Container,
  GradientText,
  Grid,
  IconArrowRight,
  Section,
  Text,
  Title,
} from "../../kit";
import RouterButtonLink from "../../components/RouterButtonLink";
import { DOCS_HOME } from "../docs/paths";
import { useLocale } from "../../i18n/LocaleContext";
import { countByLayer } from "./landing-data";
import InstallPanel from "./InstallPanel";
import LandingBackground from "./LandingBackground";
import LandingFaq from "./LandingFaq";
import LandingPopular from "./LandingPopular";
import LandingQuickStart from "./LandingQuickStart";
import LandingStack from "./LandingStack";
import LandingStats from "./LandingStats";

const NPM_URL = "https://www.npmjs.com/package/@fravelz/ui-kit-fravelz";

export default function LandingPage() {
  const { t } = useLocale();

  const features = [
    { key: "atoms" as const, badge: "cyan" as const, count: countByLayer("Atom") },
    { key: "molecules" as const, badge: "purple" as const, count: countByLayer("Molecule") },
    { key: "organisms" as const, badge: "success" as const, count: countByLayer("Organism") },
  ];

  const totalDocumented = features.reduce((sum, f) => sum + f.count, 0);

  return (
    <div className="relative isolate">
      <LandingBackground />
      <div className="relative z-10">
        <Container size="md" className="py-12 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="text-center lg:text-left">
              <Badge variant="purple" size="sm" className="mb-6">
                {t("landing.badge")}
              </Badge>
              <Title headingLevel="h1" className="!mb-4 !text-4xl md:!text-5xl">
                <GradientText variant="cyan-purple">UI Kit Fravelz</GradientText>
              </Title>
              <Text size="lg" className="!py-0 mb-8 text-gray-600 dark:text-gray-300">
                {t("landing.hero")}
              </Text>
              <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <RouterButtonLink to={DOCS_HOME} size="lg">
                  {t("landing.ctaExplore")}
                  <IconArrowRight />
                </RouterButtonLink>
                <CallToAction href={NPM_URL} variant="outline" target="_blank" className="!gap-2">
                  npm
                </CallToAction>
              </div>
            </div>

            <InstallPanel />
          </div>
        </Container>

        <LandingStats />

        <Section
          title={t("landing.sectionTitle")}
          subtitle={`${totalDocumented} ${t("landing.sectionSubtitle")}`}
          variant="minimal"
          className="border-t border-gray-200/80 dark:border-gray-800/80"
        >
          <Grid cols={3} gap="lg" responsive={false}>
            {features.map((feature) => (
              <Card
                key={feature.key}
                title={t(`landing.features.${feature.key}.title`)}
                variant="default"
                hoverable
              >
                <Badge variant={feature.badge} size="sm" className="mb-3">
                  {feature.count} {t("landing.componentsCount")}
                </Badge>
                <Text variant="secondary" size="sm" className="!py-0">
                  {t(`landing.features.${feature.key}.description`)}
                </Text>
              </Card>
            ))}
          </Grid>
        </Section>

        <LandingQuickStart />
        <LandingPopular />
        <LandingStack />
        <LandingFaq />

        <Container size="md" className="pb-20">
          <Card variant="gradient" className="text-center">
            <Title headingLevel="h2" className="!mb-2 !text-xl">
              {t("landing.integrateTitle")}
            </Title>
            <Text variant="muted" size="sm" className="!py-0 mb-6">
              {t("landing.integrateText")}
            </Text>
            <RouterButtonLink to={DOCS_HOME} variant="secondary" className="inline-flex gap-2">
              {t("landing.integrateCta")}
              <IconArrowRight className="!size-4" />
            </RouterButtonLink>
          </Card>
        </Container>
      </div>
    </div>
  );
}
