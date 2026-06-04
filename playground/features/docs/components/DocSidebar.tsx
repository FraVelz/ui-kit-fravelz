import SiteNavLink from "../../../components/layout/SiteNavLink";
import { useLocale } from "../../../i18n/LocaleContext";
import { useLocalePaths } from "../paths";
import type { DocSectionGroup } from "../registry";

export default function DocSidebar({ sections }: { sections: DocSectionGroup[] }) {
  const { t } = useLocale();
  const { docsHome, docsPath } = useLocalePaths();

  return (
    <nav className="pr-2 lg:pr-4" aria-label={t("docs.sidebarAria")}>
      <ul className="mb-6 space-y-1">
        <li>
          <SiteNavLink to={docsHome} end layout="docs">
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
