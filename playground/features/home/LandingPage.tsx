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
  cn,
} from "../../kit";
import RouterButtonLink from "../../components/RouterButtonLink";
import siteMeta from "../../site-meta.json";
import { useLocalePaths } from "../docs/paths";
import { PACKAGE } from "../docs/registry";
import { useLocale } from "../../i18n/LocaleContext";
import { LANDING_FEATURES } from "./landing-data";
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
  const { docsHome } = useLocalePaths();

  const totalDocumented = LANDING_FEATURES.reduce((sum, f) => sum + f.count, 0);

  return (
    <div className="relative isolate">
      <LandingBackground />
      <div className="relative z-10">
        <Container size="md" className="py-10 sm:py-12 md:py-20">
          <div className="grid min-w-0 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="text-center lg:text-left">
              <img
                src={siteMeta.logoPath}
                alt={siteMeta.name}
                width={72}
                height={72}
                draggable={false}
                className="mx-auto mb-6 size-16 rounded-xl object-contain sm:size-[4.5rem] lg:mx-0"
              />
              <Badge variant="purple" size="sm" className="mb-6">
                {t("landing.badge")}
              </Badge>
              <Title headingLevel="h1" className="!mb-4 !text-3xl sm:!text-4xl md:!text-5xl">
                <GradientText variant="cyan-purple">{siteMeta.name}</GradientText>
              </Title>
            <Text size="lg" className="!py-0 mb-4 text-gray-600 dark:text-gray-300">
              {t("landing.hero")}
            </Text>
            <p className="mb-8 font-mono text-xs text-gray-500 sm:text-sm">
              <code className="text-cyan-700 dark:text-cyan-400/90">{PACKAGE}</code>
            </p>
              <div
                className={cn(
                  "flex w-full max-w-md flex-col gap-3 sm:max-w-none",
                  "sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
                )}
              >
                <RouterButtonLink to={docsHome} size="lg" className="w-full sm:w-auto">
                  {t("landing.ctaExplore")}
                  <IconArrowRight />
                </RouterButtonLink>
                <CallToAction
                  href={NPM_URL}
                  variant="outline"
                  target="_blank"
                  className="!w-full !justify-center !gap-2 sm:!w-auto"
                >
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
          align="center"
          className="border-t border-gray-200/80 dark:border-gray-800/80"
        >
          <Grid cols={3} gap="lg" responsive={false} className="!grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3">
            {LANDING_FEATURES.map((feature) => (
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
            <RouterButtonLink
              to={docsHome}
              variant="secondary"
              className="inline-flex w-full gap-2 sm:w-auto"
            >
              {t("landing.integrateCta")}
              <IconArrowRight className="!size-4" />
            </RouterButtonLink>
          </Card>
        </Container>
      </div>
    </div>
  );
}
