import { NavLink } from "react-router-dom";
import { Code, Text, Title } from "../../../kit";
import { useLocale } from "../../../i18n/LocaleContext";
import { getDocSections, localizeDocEntry } from "../../../i18n/localize-doc";
import { docsPath } from "../paths";
import { COMPONENT_DOCS, PACKAGE } from "../registry";

export default function DocHomePage() {
  const { locale, t } = useLocale();
  const sections = getDocSections(locale);

  return (
    <>
      <div className="mb-10 rounded-lg border border-cyan-500/25 bg-cyan-500/10 p-6 dark:border-cyan-500/20 dark:bg-cyan-500/5">
        <Title headingLevel="h2" className="!text-xl !mb-2">
          {t("docs.homeTitle")}
        </Title>
        <Text className="text-sm !py-0 mb-4">{t("docs.homeIntro")}</Text>
        <Code
          codeContent={`npm install ${PACKAGE}\nnpm run dev`}
          language="bash"
          className="!my-0"
        />
      </div>

      <nav className="mb-8 flex flex-wrap gap-2 lg:hidden" aria-label={t("docs.mobileNav")}>
        {sections.flatMap((group) =>
          group.items.map((item) => (
            <NavLink
              key={item.id}
              to={docsPath(item.id)}
              className={({ isActive }) =>
                `rounded-full border px-3 py-1 text-xs transition-colors ${
                  isActive
                    ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300"
                    : "border-gray-300 text-gray-700 hover:border-cyan-500/50 dark:border-gray-700 dark:text-gray-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))
        )}
      </nav>

      <div className="space-y-8">
        {sections.map((group) => (
          <section key={group.id}>
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-purple-400">
              {group.label}
            </p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {group.items.map((item) => {
                const raw = COMPONENT_DOCS.find((d) => d.id === item.id);
                const doc = raw ? localizeDocEntry(raw, locale) : null;
                return (
                  <li key={item.id}>
                    <NavLink
                      to={docsPath(item.id)}
                      className={({ isActive }) =>
                        `block rounded-lg border p-4 transition-colors ${
                          isActive
                            ? "border-cyan-500/40 bg-cyan-500/10"
                            : "border-gray-200 bg-white hover:border-cyan-500/30 dark:border-gray-800 dark:bg-gray-900/50"
                        }`
                      }
                    >
                      <span className="font-mono text-sm text-cyan-700 dark:text-cyan-300">{item.name}</span>
                      {doc && (
                        <p className="mt-1 line-clamp-2 text-xs text-gray-500">{doc.description}</p>
                      )}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-10 text-sm text-gray-500">
        {COMPONENT_DOCS.length} {t("docs.entriesCount")}
      </p>
    </>
  );
}
