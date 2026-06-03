import React from "react";
import { Container, GradientText, Text, Title } from "../kit.js";
import { ComponentPreview } from "./Previews.jsx";
import { COMPONENT_DOCS, DOC_SECTIONS, PACKAGE } from "./registry.js";
import { DocSection, DocSidebar } from "./ui.jsx";

export default function DocsPage() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-cyan-500/20 bg-gray-950/95 backdrop-blur">
        <Container className="py-4">
          <Title headingLevel="h1" className="text-2xl !mb-1">
            <GradientText>UI Kit Fravelz</GradientText>
          </Title>
          <Text variant="muted" className="text-sm !py-0">
            Documentación de componentes — paquete{" "}
            <code className="text-cyan-400">{PACKAGE}</code>
          </Text>
        </Container>
      </header>

      <Container size="lg" className="py-10">
        <div className="mb-10 rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-6">
          <Title headingLevel="h2" className="!text-xl !mb-2">
            Cómo usar esta documentación
          </Title>
          <Text className="text-sm !py-0">
            Cada entrada incluye descripción, importación, ejemplo de código, tabla de props y vista
            previa en vivo. Los estilos requieren Tailwind CSS en el proyecto consumidor. Navega con
            el índice lateral o desplázate por la página; usa Tab para probar el foco de teclado en
            controles interactivos.
          </Text>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-300 border border-gray-800">
            {`npm install ${PACKAGE}
npm run dev   # en este repo: playground con Vite`}
          </pre>
        </div>

        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          <aside className="hidden lg:block">
            <DocSidebar sections={DOC_SECTIONS} />
          </aside>

          <div className="min-w-0">
            <nav className="mb-8 flex flex-wrap gap-2 lg:hidden" aria-label="Índice móvil">
              {DOC_SECTIONS.flatMap((g) =>
                g.items.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-300 hover:border-cyan-500/50"
                  >
                    {item.name}
                  </a>
                ))
              )}
            </nav>

            {COMPONENT_DOCS.map((entry) => (
              <DocSection key={entry.id} entry={entry}>
                <ComponentPreview id={entry.id} />
              </DocSection>
            ))}
          </div>
        </div>
      </Container>

      <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
        <code>npm run dev</code> — documentación en <code>playground/docs/</code>
      </footer>
    </div>
  );
}
