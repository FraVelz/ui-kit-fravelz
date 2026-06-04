import { Link } from "react-router-dom";
import { GradientText, SiteFooter as SiteFooterShell, SiteFooterColumn, Text } from "../../kit";
import { DOCS_HOME, SITE_HOME } from "../../features/docs/paths";
import { useLocale } from "../../i18n/LocaleContext";
import ThemeSwitcher from "../../theme/ThemeSwitcher";
import SiteExternalLink from "./SiteExternalLink";
import SiteNavLink from "./SiteNavLink";

const NPM_URL = "https://www.npmjs.com/package/@fravelz/ui-kit-fravelz";
const GITHUB_URL = "https://github.com/FraVelz/ui-kit-fravelz";
const README_URL = "https://github.com/FraVelz/ui-kit-fravelz#readme";
const LICENSE_URL = "https://opensource.org/licenses/ISC";
const CURRENT_YEAR = new Date().getFullYear();

export default function SiteFooter() {
  const { t } = useLocale();

  return (
    <SiteFooterShell
      brand={
        <>
          <Link
            to={SITE_HOME}
            className="inline-block rounded-md outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80"
          >
            <span className="text-lg font-semibold">
              <GradientText variant="cyan-purple">UI Kit Fravelz</GradientText>
            </span>
          </Link>
          <Text variant="secondary" size="sm" className="!py-0 mt-3 max-w-md">
            {t("footer.tagline")}
          </Text>
        </>
      }
      toolbar={<ThemeSwitcher />}
      legal={
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
              className="text-gray-600 underline decoration-gray-400 underline-offset-2 hover:text-cyan-600 dark:text-gray-400 dark:decoration-gray-700 dark:hover:text-cyan-400"
            >
              ISC
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
      }
    >
      <SiteFooterColumn title={t("footer.documentation")} ariaLabel={t("footer.documentation")}>
        <nav className="flex flex-col gap-1">
          <SiteNavLink to={SITE_HOME} end layout="footer">
            {t("nav.home")}
          </SiteNavLink>
          <SiteNavLink to={DOCS_HOME} layout="footer">
            {t("nav.docs")}
          </SiteNavLink>
          <SiteNavLink to={DOCS_HOME} layout="footer">
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
