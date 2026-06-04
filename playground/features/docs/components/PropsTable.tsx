import { Text } from "../../../kit";
import { useLocale } from "../../../i18n/LocaleContext";
import type { DocPropRow } from "../registry";

const EMPTY_PROPS: DocPropRow[] = [];

export default function PropsTable({ props = EMPTY_PROPS }: { props?: DocPropRow[] }) {
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
