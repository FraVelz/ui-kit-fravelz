import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Container, GradientText, Text, Title } from "../kit.js";
import { DOC_SECTIONS, PACKAGE } from "./registry.js";
import { DocSidebar } from "./ui.jsx";
import { DOCS_HOME } from "./paths.js";

export default function DocsLayout() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-cyan-500/20 bg-gray-950/95 backdrop-blur">
        <Container className="py-4">
          <Link to={DOCS_HOME} className="block rounded-md outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80">
            <Title headingLevel="h1" className="text-2xl !mb-1">
              <GradientText>UI Kit Fravelz</GradientText>
            </Title>
          </Link>
          <Text variant="muted" className="text-sm !py-0">
            Documentación —{" "}
            <code className="text-cyan-400">{PACKAGE}</code>
          </Text>
        </Container>
      </header>

      <Container size="lg" className="py-10">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          <aside className="hidden lg:block">
            <DocSidebar sections={DOC_SECTIONS} />
          </aside>

          <div className="min-w-0">
            <Outlet />
          </div>
        </div>
      </Container>

      <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
        <code>npm run dev</code> — rutas con React Router en <code>playground/docs/</code>
      </footer>
    </div>
  );
}
