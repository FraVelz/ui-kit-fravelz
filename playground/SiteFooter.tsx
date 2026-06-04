import { Link, NavLink } from "react-router-dom";
import packageJson from "../package.json";
import { cn, Container, GradientText, Line, Text } from "./kit";
import { COMPONENT_DOCS, PACKAGE } from "./docs/registry";
import { DOCS_HOME, SITE_HOME } from "./docs/paths";

const footerLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "block rounded-md py-1 text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80",
    isActive ? "text-cyan-300" : "text-gray-500 hover:text-gray-300"
  );

const externalLinkClass = cn(
  "block rounded-md py-1 text-sm text-gray-500 transition-colors",
  "hover:text-purple-300 outline-none focus-visible:ring-2 focus-visible:ring-purple-400/80"
);

const CURRENT_YEAR = new Date().getFullYear();

export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-cyan-500/20 bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900/80">
      <Container className="py-10 md:py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              to={SITE_HOME}
              className="inline-block rounded-md outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80"
            >
              <span className="text-lg font-semibold">
                <GradientText variant="cyan-purple">UI Kit Fravelz</GradientText>
              </span>
            </Link>
            <Text variant="secondary" size="sm" className="!py-0 mt-3 max-w-md">
              Biblioteca React con atoms, molecules y organisms para proyectos del portfolio.
              Tipos TypeScript y estilos Tailwind en el consumidor.
            </Text>
            <p className="mt-4 font-mono text-xs text-gray-500">
              <code className="text-cyan-400/90">{PACKAGE}</code>
              <span className="mx-2 text-gray-700">·</span>
              <span>v{packageJson.version}</span>
              <span className="mx-2 text-gray-700">·</span>
              <span>{COMPONENT_DOCS.length} componentes documentados</span>
            </p>
          </div>

          <div>
            <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-wider text-purple-400">
              Navegación
            </p>
            <nav className="flex flex-col gap-0.5" aria-label="Pie — navegación">
              <NavLink to={SITE_HOME} end className={footerLinkClass}>
                Inicio
              </NavLink>
              <NavLink to={DOCS_HOME} className={footerLinkClass}>
                Documentación
              </NavLink>
              <NavLink to={DOCS_HOME} className={footerLinkClass}>
                Índice de componentes
              </NavLink>
            </nav>
          </div>

          <div>
            <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-wider text-purple-400">
              Recursos
            </p>
            <nav className="flex flex-col gap-0.5" aria-label="Pie — recursos">
              <a
                href="https://www.npmjs.com/package/@fravelz/ui-kit-fravelz"
                target="_blank"
                rel="noreferrer"
                className={externalLinkClass}
              >
                npm
              </a>
              <a
                href="https://github.com/FraVelz/ui-kit-fravelz"
                target="_blank"
                rel="noreferrer"
                className={externalLinkClass}
              >
                GitHub
              </a>
              <a
                href="https://github.com/FraVelz/ui-kit-fravelz#readme"
                target="_blank"
                rel="noreferrer"
                className={externalLinkClass}
              >
                README
              </a>
            </nav>
          </div>
        </div>

        <Line variant="subtle" className="!my-8" />

        <div className="flex flex-col gap-3 text-center text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {CURRENT_YEAR} Fravelz · Licencia{" "}
            <a
              href="https://opensource.org/licenses/ISC"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 underline decoration-gray-700 underline-offset-2 hover:text-cyan-400"
            >
              ISC
            </a>
          </p>
          <p>
            Playground Vite — <code className="text-gray-600">npm run dev</code>
          </p>
        </div>
      </Container>
    </footer>
  );
}
