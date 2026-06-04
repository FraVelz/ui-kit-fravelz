import { Link } from "react-router-dom";
import {
  Badge,
  Card,
  cn,
  Container,
  GradientText,
  Grid,
  IconArrowRight,
  Section,
  Text,
  Title,
} from "../../kit";
import { DOCS_HOME } from "../docs/paths";
import { COMPONENT_DOCS } from "../docs/registry";
import { useLocale } from "../../i18n/LocaleContext";
import InstallPanel from "./InstallPanel";

const linkPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full cursor-pointer transition-all duration-300 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold hover:from-cyan-500 hover:to-purple-500 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950";

export default function LandingPage() {
  const { t } = useLocale();

  const features = [
    { key: "atoms" as const, badge: "cyan" as const, count: 14 },
    { key: "molecules" as const, badge: "purple" as const, count: 9 },
    { key: "organisms" as const, badge: "success" as const, count: 4 },
  ];

  return (
    <>
      <Container size="md" className="py-12 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="text-center lg:text-left">
            <Badge variant="purple" size="sm" className="mb-6">
              {t("landing.badge")}
            </Badge>
            <Title headingLevel="h1" className="!mb-4 !text-4xl md:!text-5xl">
              <GradientText variant="cyan-purple">UI Kit Fravelz</GradientText>
            </Title>
            <Text size="lg" className="!py-0 mb-8 text-gray-300">
              {t("landing.hero")}
            </Text>
            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link to={DOCS_HOME} className={cn(linkPrimary, "px-6 py-3 text-lg")}>
                {t("landing.ctaExplore")}
                <IconArrowRight />
              </Link>
              <a
                href="https://www.npmjs.com/package/@fravelz/ui-kit-fravelz"
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "inline-flex items-center justify-center rounded-full px-6 py-3 text-lg transition-all",
                  "border border-purple-500/40 text-purple-300",
                  "hover:border-purple-400/60 hover:text-purple-200",
                  "outline-none focus-visible:ring-2 focus-visible:ring-purple-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                )}
              >
                npm
              </a>
            </div>
          </div>

          <InstallPanel />
        </div>
      </Container>

      <Section
        title={t("landing.sectionTitle")}
        subtitle={`${COMPONENT_DOCS.length} ${t("landing.sectionSubtitle")}`}
        variant="minimal"
        className="border-t border-gray-800/80"
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

      <Container size="md" className="pb-20">
        <Card variant="gradient" className="text-center">
          <Title headingLevel="h2" className="!mb-2 !text-xl">
            {t("landing.integrateTitle")}
          </Title>
          <Text variant="muted" size="sm" className="!py-0 mb-6">
            {t("landing.integrateText")}
          </Text>
          <Link
            to={DOCS_HOME}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-4 py-2 transition-all",
              "bg-gray-900 border border-cyan-500/40 text-cyan-300",
              "hover:border-cyan-400/60 hover:text-cyan-200",
              "outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80"
            )}
          >
            {t("landing.integrateCta")}
            <IconArrowRight className="!size-4" />
          </Link>
        </Card>
      </Container>
    </>
  );
}
