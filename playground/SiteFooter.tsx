import { Link } from "react-router-dom";
import { Container, Text } from "./kit";
import { DOCS_HOME, SITE_HOME } from "./docs/paths";

export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-gray-800 bg-gray-950/50 py-8">
      <Container className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
        <Text variant="muted" size="sm" className="!py-0">
          Playground del UI Kit — desarrollo local
        </Text>
        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm" aria-label="Pie">
          <Link
            to={SITE_HOME}
            className="text-gray-500 transition-colors hover:text-cyan-300 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80"
          >
            Inicio
          </Link>
          <Link
            to={DOCS_HOME}
            className="text-gray-500 transition-colors hover:text-cyan-300 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80"
          >
            Documentación
          </Link>
          <a
            href="https://github.com/FraVelz/ui-kit-fravelz"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 transition-colors hover:text-cyan-300 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80"
          >
            GitHub
          </a>
        </nav>
      </Container>
    </footer>
  );
}
