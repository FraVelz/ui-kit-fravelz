import { Link } from "react-router-dom";
import { cn } from "../../kit";
import { Badge, Card, Grid, IconArrowRight, Section, Text } from "../../kit";
import { useLocalePaths } from "../docs/paths";
import { COMPONENT_DOCS } from "../docs/registry";
import { useLocale } from "../../i18n/LocaleContext";
import { POPULAR_DOC_IDS, type PopularDocId } from "./landing-data";

export default function LandingPopular() {
  const { t } = useLocale();
  const { docsPath } = useLocalePaths();

  return (
    <Section
      title={t("landing.popularTitle")}
      subtitle={t("landing.popularSubtitle")}
      variant="minimal"
      align="center"
    >
      <Grid cols={3} gap="md" responsive={false} className="!grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3">
        {POPULAR_DOC_IDS.map((id) => {
          const entry = COMPONENT_DOCS.find((doc) => doc.id === id);
          const layer = entry?.layer ?? "Molecule";

          return (
            <Card key={id} variant="default" hoverable className="flex flex-col">
              <Badge variant="purple" size="sm" className="mb-3 w-fit">
                {layer}
              </Badge>
              <p className="mb-1 font-mono text-sm font-semibold text-cyan-700 dark:text-cyan-300">
                {entry?.name ?? id}
              </p>
              <Text variant="secondary" size="sm" className="!py-0 mb-4 flex-1">
                {t(`landing.popular.${id as PopularDocId}`)}
              </Text>
              <Link
                to={docsPath(id)}
                className={cn(
                  "inline-flex items-center gap-1 rounded-sm text-sm font-medium",
                  "text-cyan-700 transition-colors hover:text-cyan-900",
                  "outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80",
                  "dark:text-cyan-300 dark:hover:text-cyan-200"
                )}
              >
                {t("landing.viewDoc")}
                <IconArrowRight className="!size-4" />
              </Link>
            </Card>
          );
        })}
      </Grid>
    </Section>
  );
}
