import { Link } from "react-router-dom";
import packageJson from "../../../package.json";
import { GradientText, SiteFooter as SiteFooterShell, SiteFooterColumn, Text } from "../../kit";
import { DOCS_HOME, SITE_HOME } from "../../features/docs/paths";
import { COMPONENT_DOCS, PACKAGE } from "../../features/docs/registry";
import { useLocale } from "../../i18n/LocaleContext";
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
          <p className="mt-4 font-mono text-xs text-gray-600 dark:text-gray-500">
            <code className="text-cyan-700 dark:text-cyan-400/90">{PACKAGE}</code>
            <span className="mx-2 text-gray-400 dark:text-gray-700">·</span>
            <span>v{packageJson.version}</span>
            <span className="mx-2 text-gray-400 dark:text-gray-700">·</span>
            <span>
              {COMPONENT_DOCS.length} {t("footer.documented")}
            </span>
          </p>
        </>
      }
      bottom={
        <>
          <p>
            © {CURRENT_YEAR} {t("footer.copyright")} · {t("footer.license")}{" "}
            <a
              href={LICENSE_URL}
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 underline decoration-gray-400 underline-offset-2 hover:text-cyan-600 dark:text-gray-400 dark:decoration-gray-700 dark:hover:text-cyan-400"
            >
              ISC
            </a>
          </p>
          <p>
            {t("footer.playground")} — <code className="text-gray-600">npm run dev</code>
          </p>
        </>
      }
    >
      <SiteFooterColumn title={t("footer.navigation")} ariaLabel={t("footer.navigation")}>
        <nav className="flex flex-col gap-0.5">
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

      <SiteFooterColumn title={t("footer.resources")} ariaLabel={t("footer.resources")}>
        <nav className="flex flex-col gap-0.5">
          <SiteExternalLink href={NPM_URL}>{t("nav.npm")}</SiteExternalLink>
          <SiteExternalLink href={GITHUB_URL}>GitHub</SiteExternalLink>
          <SiteExternalLink href={README_URL}>{t("footer.readme")}</SiteExternalLink>
        </nav>
      </SiteFooterColumn>
    </SiteFooterShell>
  );
}
