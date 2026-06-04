import type { ReactNode } from "react";
import { cn, Code, Text, Title } from "../../../kit";
import { useLocale } from "../../../i18n/LocaleContext";
import { localizeDocEntry } from "../../../i18n/localize-doc";
import type { ComponentDocEntry } from "../registry";
import PropsTable from "./PropsTable";

export default function DocSection({
  entry,
  children,
}: {
  entry: ComponentDocEntry;
  children: ReactNode;
}) {
  const { locale, t } = useLocale();
  const doc = localizeDocEntry(entry, locale);

  return (
    <article className="pb-8">
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span
          className={cn(
            "rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5",
            "font-mono text-xs text-cyan-300"
          )}
        >
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
      <div
        className={cn(
          "min-w-0 overflow-x-auto rounded-lg border border-gray-200 bg-gray-100/80 p-4 sm:p-6",
          "dark:border-gray-800 dark:bg-gray-900/50"
        )}
      >
        {children}
      </div>
    </article>
  );
}
