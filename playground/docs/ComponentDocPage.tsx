import { Link, Navigate, NavLink, useParams } from "react-router-dom";
import { ComponentPreview } from "./Previews";
import type { ComponentDocEntry } from "./registry";
import { COMPONENT_DOCS, DOC_BY_ID } from "./registry";
import { DocSection } from "./ui";
import { docsPath, DOCS_HOME } from "./paths";

function neighborDocs(componentId: string): {
  prev: ComponentDocEntry | null;
  next: ComponentDocEntry | null;
} {
  const index = COMPONENT_DOCS.findIndex((doc) => doc.id === componentId);
  if (index < 0) {
    return { prev: null, next: null };
  }
  return {
    prev: index > 0 ? COMPONENT_DOCS[index - 1] : null,
    next: index < COMPONENT_DOCS.length - 1 ? COMPONENT_DOCS[index + 1] : null,
  };
}

export default function ComponentDocPage() {
  const { componentId } = useParams<{ componentId: string }>();
  if (!componentId) {
    return <Navigate to={DOCS_HOME} replace />;
  }

  const entry = DOC_BY_ID[componentId];

  if (!entry) {
    return <Navigate to={DOCS_HOME} replace />;
  }

  const { prev, next } = neighborDocs(componentId);

  return (
    <>
      <nav className="mb-6 flex flex-wrap gap-2 lg:hidden" aria-label="Componentes">
        {COMPONENT_DOCS.map((doc) => (
          <NavLink
            key={doc.id}
            to={docsPath(doc.id)}
            className={({ isActive }) =>
              `rounded-full border px-3 py-1 text-xs transition-colors ${
                isActive
                  ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-300"
                  : "border-gray-700 text-gray-300"
              }`
            }
          >
            {doc.name}
          </NavLink>
        ))}
      </nav>

      <DocSection entry={entry}>
        <ComponentPreview id={entry.id} />
      </DocSection>

      <nav
        className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-gray-800 pt-6"
        aria-label="Documentación anterior y siguiente"
      >
        {prev ? (
          <Link
            to={docsPath(prev.id)}
            className="text-sm text-cyan-300 hover:text-cyan-200 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80"
          >
            ← {prev.name}
          </Link>
        ) : (
          <span />
        )}
        <Link
          to={DOCS_HOME}
          className="text-sm text-gray-500 hover:text-gray-300 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80"
        >
          Índice
        </Link>
        {next ? (
          <Link
            to={docsPath(next.id)}
            className="text-sm text-cyan-300 hover:text-cyan-200 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80"
          >
            {next.name} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </>
  );
}
