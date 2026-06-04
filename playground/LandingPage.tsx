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
} from "./kit";
import { COMPONENT_DOCS, DOC_SECTIONS } from "./docs/registry";
import { DOCS_HOME } from "./docs/paths";

const linkPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full cursor-pointer transition-all duration-300 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold hover:from-cyan-500 hover:to-purple-500 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950";

const FEATURES = [
  {
    title: "Atoms",
    description: "Botones, inputs, enlaces, alertas y tipografía listos para Tailwind.",
    badge: "cyan" as const,
    count: DOC_SECTIONS.find((g) => g.id === "atoms")?.items.length ?? 0,
  },
  {
    title: "Molecules",
    description: "Cards, tablas, código con copiar, grids y bloques compuestos.",
    badge: "purple" as const,
    count: DOC_SECTIONS.find((g) => g.id === "molecules")?.items.length ?? 0,
  },
  {
    title: "Organisms",
    description: "Secciones, mensajes, roadmap y layouts de página.",
    badge: "success" as const,
    count: DOC_SECTIONS.find((g) => g.id === "organisms")?.items.length ?? 0,
  },
];

export default function LandingPage() {
  return (
    <>
        <Container size="lg" className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="purple" size="sm" className="mb-6">
              React 18+ · Tailwind CSS
            </Badge>
            <Title headingLevel="h1" className="!mb-4 !text-4xl md:!text-5xl">
              <GradientText variant="cyan-purple">UI Kit Fravelz</GradientText>
            </Title>
            <Text size="lg" className="!py-0 mb-8 text-gray-300">
              Biblioteca de componentes para sitios de notas y proyectos del portfolio. Diseño oscuro
              con acentos cyan y púrpura, tipos TypeScript y publicación en npm.
            </Text>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to={DOCS_HOME} className={cn(linkPrimary, "px-6 py-3 text-lg")}>
                Explorar documentación
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
        </Container>

        <Section
          title="Qué incluye"
          subtitle={`${COMPONENT_DOCS.length} piezas documentadas con vistas previas interactivas`}
          variant="minimal"
          className="border-t border-gray-800/80"
        >
          <Grid cols={3} gap="lg" responsive={false}>
            {FEATURES.map((feature) => (
              <Card key={feature.title} title={feature.title} variant="default" hoverable>
                <Badge variant={feature.badge} size="sm" className="mb-3">
                  {feature.count} componentes
                </Badge>
                <Text variant="secondary" size="sm" className="!py-0">
                  {feature.description}
                </Text>
              </Card>
            ))}
          </Grid>
        </Section>

        <Container className="pb-20">
          <Card variant="gradient" className="text-center">
            <Title headingLevel="h2" className="!mb-2 !text-xl">
              Listo para integrar
            </Title>
            <Text variant="muted" size="sm" className="!py-0 mb-6">
              Instala el paquete, configura Tailwind en tu app e importa solo lo que necesitas.
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
              Ir a la documentación
              <IconArrowRight className="!size-4" />
            </Link>
          </Card>
        </Container>
    </>
  );
}
