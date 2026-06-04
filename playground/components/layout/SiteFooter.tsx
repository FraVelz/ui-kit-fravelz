import { useMemo } from "react";
import { cn, SiteFooter as SiteFooterShell, SiteFooterColumn, Text } from "../../kit";
import SiteBrandLogo from "./SiteBrandLogo";
import { useLocalePaths } from "../../i18n/useLocalePaths";
import { useLocale } from "../../i18n/LocaleContext";
import ThemeSwitcher from "../../theme/ThemeSwitcher";
import SiteExternalLink from "./SiteExternalLink";
import SiteNavLink from "./SiteNavLink";

const NPM_URL = "https://www.npmjs.com/package/@fravelz/ui-kit-fravelz";
const GITHUB_URL = "https://github.com/FraVelz/ui-kit-fravelz";
const README_URL = "https://github.com/FraVelz/ui-kit-fravelz#readme";
const LICENSE_URL = "https://www.apache.org/licenses/LICENSE-2.0";
const CURRENT_YEAR = new Date().getFullYear();

export default function SiteFooter() {
  const { t } = useLocale();
  const { siteHome, docsHome } = useLocalePaths();

  const brand = useMemo(
    () => (
      <>
        <SiteBrandLogo to={siteHome} end titleClassName="truncate text-lg font-semibold" />
        <Text variant="secondary" size="sm" className="!py-0 mt-3 max-w-md">
          {t("footer.tagline")}
        </Text>
      </>
    ),
    [siteHome, t]
  );

  const legal = useMemo(
    () => (
      <>
        <p>
          © {CURRENT_YEAR} {t("footer.copyright")}
        </p>
        <p>
          {t("footer.license")}{" "}
          <a
            href={LICENSE_URL}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "text-gray-600 underline decoration-gray-400 underline-offset-2 hover:text-cyan-600",
              "dark:text-gray-400 dark:decoration-gray-700 dark:hover:text-cyan-400"
            )}
          >
            Apache-2.0
          </a>
          {" · "}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-400"
          >
            Fravelz
          </a>
        </p>
      </>
    ),
    [t]
  );

  return (
    <SiteFooterShell brand={brand} toolbar={<ThemeSwitcher />} legal={legal}>
      <SiteFooterColumn title={t("footer.documentation")} ariaLabel={t("footer.documentation")}>
        <nav className="flex flex-col gap-1">
          <SiteNavLink to={siteHome} end layout="footer">
            {t("nav.home")}
          </SiteNavLink>
          <SiteNavLink to={docsHome} layout="footer">
            {t("nav.docs")}
          </SiteNavLink>
          <SiteNavLink to={docsHome} layout="footer">
            {t("nav.componentIndex")}
          </SiteNavLink>
        </nav>
      </SiteFooterColumn>

      <SiteFooterColumn title={t("footer.project")} ariaLabel={t("footer.project")}>
        <nav className="flex flex-col gap-1">
          <SiteExternalLink href={NPM_URL}>{t("nav.npm")}</SiteExternalLink>
          <SiteExternalLink href={GITHUB_URL}>GitHub</SiteExternalLink>
          <SiteExternalLink href={README_URL}>{t("footer.readme")}</SiteExternalLink>
        </nav>
      </SiteFooterColumn>
    </SiteFooterShell>
  );
}
