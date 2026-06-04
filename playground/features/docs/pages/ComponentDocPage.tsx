import { Link, Navigate, NavLink, useParams } from "react-router-dom";
import { useLocale } from "../../../i18n/LocaleContext";
import { ComponentPreview } from "../components/Previews";
import { DocSection } from "../components/ui";
import { useLocalePaths } from "../paths";
import type { ComponentDocEntry } from "../registry";
import { COMPONENT_DOCS, DOC_BY_ID } from "../registry";

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
  const { t } = useLocale();
  const { docsHome, docsPath } = useLocalePaths();

  if (!componentId) {
    return <Navigate to={docsHome} replace />;
  }

  const entry = DOC_BY_ID[componentId];

  if (!entry) {
    return <Navigate to={docsHome} replace />;
  }

  const { prev, next } = neighborDocs(componentId);

  return (
    <>
      <nav className="mb-6 flex flex-wrap gap-2 lg:hidden" aria-label={t("docs.mobileNav")}>
        {COMPONENT_DOCS.map((doc) => (
          <NavLink
            key={doc.id}
            to={docsPath(doc.id)}
            className={({ isActive }) =>
              `rounded-full border px-3 py-1 text-xs transition-colors ${
                isActive
                  ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300"
                  : "border-gray-300 text-gray-700 dark:border-gray-700 dark:text-gray-300"
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
        className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-6 dark:border-gray-800"
        aria-label={t("docs.pagerAria")}
      >
        {prev ? (
          <Link
            to={docsPath(prev.id)}
            className="text-sm text-cyan-700 hover:text-cyan-900 dark:text-cyan-300 dark:hover:text-cyan-200 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80"
          >
            ← {prev.name}
          </Link>
        ) : (
          <span />
        )}
        <Link
          to={docsHome}
          className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-300 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80"
        >
          {t("nav.index")}
        </Link>
        {next ? (
          <Link
            to={docsPath(next.id)}
            className="text-sm text-cyan-700 hover:text-cyan-900 dark:text-cyan-300 dark:hover:text-cyan-200 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80"
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
