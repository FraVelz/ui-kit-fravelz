import { NavLink, useLocation } from "react-router-dom";
import {
  GradientText,
  IconArrowRight,
  SiteHeader as SiteHeaderShell,
  Text,
  Title,
} from "../../kit";
import { DOCS_HOME, SITE_HOME } from "../../features/docs/paths";
import { PACKAGE } from "../../features/docs/registry";
import LanguageSwitcher from "../../i18n/LanguageSwitcher";
import ThemeSwitcher from "../../theme/ThemeSwitcher";
import { useLocale } from "../../i18n/LocaleContext";
import HeaderComponentsCta from "./HeaderComponentsCta";
import SiteExternalLink from "./SiteExternalLink";
import SiteNavLink from "./SiteNavLink";

const NPM_URL = "https://www.npmjs.com/package/@fravelz/ui-kit-fravelz";

export default function SiteHeader() {
  const { pathname } = useLocation();
  const { t } = useLocale();
  const onDocs = pathname === DOCS_HOME || pathname.startsWith(`${DOCS_HOME}/`);

  return (
    <SiteHeaderShell
      brand={
        <NavLink
          to={SITE_HOME}
          className="block rounded-md outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80"
          end
        >
          <Title headingLevel="h1" className="!mb-0 !text-xl md:!text-2xl">
            <GradientText variant="cyan-purple">UI Kit Fravelz</GradientText>
          </Title>
        </NavLink>
      }
      meta={
        <Text variant="muted" className="!py-0 truncate text-xs md:text-sm">
          <code className="text-cyan-700 dark:text-cyan-400/90">{PACKAGE}</code>
          {onDocs && (
            <span className="text-gray-600 dark:text-gray-500">
              {" "}
              · <span className="text-gray-700 dark:text-gray-400">{t("nav.docsBadge")}</span>
            </span>
          )}
        </Text>
      }
      actions={
        <>
          <ThemeSwitcher />
          <LanguageSwitcher />
          <nav
            className="flex flex-wrap items-center gap-1 sm:gap-2"
            aria-label={t("lang.label")}
          >
            <SiteNavLink to={SITE_HOME} end layout="header">
              {t("nav.home")}
            </SiteNavLink>
            <SiteNavLink to={DOCS_HOME} layout="header">
              {t("nav.docs")}
            </SiteNavLink>
            <SiteExternalLink href={NPM_URL} layout="header">
              {t("nav.npm")}
            </SiteExternalLink>
            {!onDocs && (
              <HeaderComponentsCta>
                {t("nav.components")}
                <IconArrowRight className="!size-4" />
              </HeaderComponentsCta>
            )}
          </nav>
        </>
      }
    />
  );
}
