import { NavLink, useLocation } from "react-router-dom";
import { cn, Container, GradientText, IconArrowRight, Text, Title } from "./kit";
import { PACKAGE } from "./docs/registry";
import { DOCS_HOME, SITE_HOME } from "./docs/paths";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "rounded-md px-3 py-1.5 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80",
    isActive
      ? "bg-cyan-500/15 text-cyan-300"
      : "text-gray-400 hover:bg-gray-800/80 hover:text-gray-200"
  );

const ctaClass = cn(
  "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all",
  "bg-gradient-to-r from-cyan-600 to-purple-600 text-white",
  "hover:from-cyan-500 hover:to-purple-500 shadow-md shadow-cyan-500/25",
  "outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
);

export default function SiteHeader() {
  const { pathname } = useLocation();
  const onDocs = pathname === DOCS_HOME || pathname.startsWith(`${DOCS_HOME}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-500/20 bg-gray-950/95 backdrop-blur-md">
      <Container className="py-3 md:py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="min-w-0">
            <NavLink
              to={SITE_HOME}
              className="block rounded-md outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80"
              end
            >
              <Title headingLevel="h1" className="!mb-0 !text-xl md:!text-2xl">
                <GradientText variant="cyan-purple">UI Kit Fravelz</GradientText>
              </Title>
            </NavLink>
            <Text variant="muted" className="!py-0 mt-0.5 truncate text-xs md:text-sm">
              <code className="text-cyan-400/90">{PACKAGE}</code>
              {onDocs && (
                <span className="text-gray-500">
                  {" "}
                  · <span className="text-gray-400">documentación</span>
                </span>
              )}
            </Text>
          </div>

          <nav
            className="flex flex-wrap items-center gap-1 sm:gap-2"
            aria-label="Navegación principal"
          >
            <NavLink to={SITE_HOME} end className={navLinkClass}>
              Inicio
            </NavLink>
            <NavLink to={DOCS_HOME} className={navLinkClass}>
              Documentación
            </NavLink>
            <a
              href="https://www.npmjs.com/package/@fravelz/ui-kit-fravelz"
              target="_blank"
              rel="noreferrer"
              className={cn(
                "rounded-md px-3 py-1.5 text-sm text-gray-500 transition-colors",
                "hover:text-purple-300 outline-none focus-visible:ring-2 focus-visible:ring-purple-400/80"
              )}
            >
              npm
            </a>
            {!onDocs && (
              <NavLink to={DOCS_HOME} className={ctaClass}>
                Componentes
                <IconArrowRight className="!size-4" />
              </NavLink>
            )}
          </nav>
        </div>
      </Container>
    </header>
  );
}
