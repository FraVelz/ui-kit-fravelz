import type { ReactNode } from "react";
import { Code, Text, Title } from "../../../kit";
import SiteNavLink from "../../../components/layout/SiteNavLink";
import { useLocale } from "../../../i18n/LocaleContext";
import { localizeDocEntry } from "../../../i18n/localize-doc";
import { docsPath, DOCS_HOME } from "../paths";
import type { ComponentDocEntry, DocPropRow, DocSectionGroup } from "../registry";

export function DocSidebar({ sections }: { sections: DocSectionGroup[] }) {
  const { t } = useLocale();

  return (
    <nav
      className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-4"
      aria-label={t("docs.sidebarAria")}
    >
      <ul className="mb-6 space-y-1">
        <li>
          <SiteNavLink to={DOCS_HOME} end layout="docs">
            {t("docs.sidebarHome")}
          </SiteNavLink>
        </li>
      </ul>
      {sections.map((group) => (
        <div key={group.id} className="mb-6">
          <p className="mb-2 font-mono text-xs uppercase tracking-wider text-purple-400">
            {group.label}
          </p>
          <ul className="space-y-1">
            {group.items.map((item) => (
              <li key={item.id}>
                <SiteNavLink to={docsPath(item.id)} layout="docs">
                  {item.name}
                </SiteNavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}

export function PropsTable({ props = [] }: { props?: DocPropRow[] }) {
  const { t } = useLocale();

  if (props.length === 0) {
    return (
      <Text variant="muted" className="text-sm">
        {t("docs.noProps")}
      </Text>
    );
  }

  return (
    <div className="my-4 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-100 text-cyan-800 dark:bg-gray-800/80 dark:text-cyan-300">
          <tr>
            <th className="px-4 py-3 font-semibold">{t("docs.tableProp")}</th>
            <th className="px-4 py-3 font-semibold">{t("docs.tableType")}</th>
            <th className="px-4 py-3 font-semibold">{t("docs.tableDefault")}</th>
            <th className="px-4 py-3 font-semibold">{t("docs.tableDescription")}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-gray-700 dark:divide-gray-800 dark:text-gray-300">
          {props.map((row) => (
            <tr key={row.name} className="hover:bg-gray-50 dark:hover:bg-gray-800/40">
              <td className="px-4 py-3 font-mono text-cyan-700 dark:text-cyan-200">{row.name}</td>
              <td className="px-4 py-3 font-mono text-xs text-purple-300">{row.type}</td>
              <td className="px-4 py-3 font-mono text-xs text-gray-500">{row.default ?? "—"}</td>
              <td className="px-4 py-3">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DocSection({ entry, children }: { entry: ComponentDocEntry; children: ReactNode }) {
  const { locale, t } = useLocale();
  const doc = localizeDocEntry(entry, locale);

  return (
    <article className="pb-8">
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 font-mono text-xs text-cyan-300">
          {doc.layer}
        </span>
        {entry.packageExport && (
          <span className="font-mono text-xs text-gray-500">@fravelz/ui-kit-fravelz</span>
        )}
      </div>
      <Title headingLevel="h2" className="!mb-2">
        {doc.name}
      </Title>
      <Text className="!py-0 mb-4 max-w-6xl">{doc.description}</Text>

      {doc.importLine && (
        <div className="mb-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
            {t("docs.import")}
          </p>
          <Code codeContent={doc.importLine} language="javascript" compact />
        </div>
      )}

      {doc.usage && (
        <div className="mb-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
            {t("docs.usage")}
          </p>
          <Code codeContent={doc.usage} language="markup" />
        </div>
      )}

      {doc.notes && doc.notes.length > 0 && (
        <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-gray-400">
          {doc.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      )}

      {doc.props && doc.props.length > 0 && (
        <>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
            {t("docs.props")}
          </p>
          <PropsTable props={doc.props} />
        </>
      )}

      {doc.subComponents && doc.subComponents.length > 0 && (
        <div className="mb-4 space-y-6">
          {doc.subComponents.map((sub) => (
            <div key={sub.name}>
              <p className="mb-2 font-mono text-sm text-purple-300">{sub.name}</p>
              <PropsTable props={sub.props} />
            </div>
          ))}
        </div>
      )}

      <p className="mb-3 mt-6 text-xs font-semibold uppercase tracking-wide text-gray-500">
        {t("docs.preview")}
      </p>
      <div className="rounded-lg border border-gray-200 bg-gray-100/80 p-6 dark:border-gray-800 dark:bg-gray-900/50">
        {children}
      </div>
    </article>
  );
}
