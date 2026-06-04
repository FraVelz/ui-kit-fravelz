import type { CSSProperties } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  GradientText,
  IconArrowRight,
  SiteHeader as SiteHeaderShell,
  Text,
} from "../../kit";
import { isDocsPath, isSiteHomePath } from "../../features/docs/paths";
import { useLocalePaths } from "../../i18n/useLocalePaths";
import { PACKAGE } from "../../features/docs/registry";
import { useHeaderScroll } from "../../hooks/useHeaderScroll";
import LanguageSwitcher from "../../i18n/LanguageSwitcher";
import { useLocale } from "../../i18n/LocaleContext";
import HeaderComponentsCta from "./HeaderComponentsCta";
import "./header-scroll.css";
import SiteExternalLink from "./SiteExternalLink";
import SiteHeaderNav from "./SiteHeaderNav";
import SiteNavLink from "./SiteNavLink";

const NPM_URL = "https://www.npmjs.com/package/@fravelz/ui-kit-fravelz";

export default function SiteHeader() {
  const { pathname } = useLocation();
  const { t } = useLocale();
  const { siteHome, docsHome } = useLocalePaths();
  const onDocs = isDocsPath(pathname);
  const isHome = isSiteHomePath(pathname);
  const { progress, logoInteractive, headerOpacity, logoOpacity } = useHeaderScroll(isHome);

  const headerStyle = {
    "--header-opacity": String(headerOpacity),
  } as CSSProperties;

  const logoStyle = {
    "--logo-opacity": String(logoOpacity),
  } as CSSProperties;

  const navLinks = (
    <>
      <SiteNavLink to={siteHome} end layout="header">
        {t("nav.home")}
      </SiteNavLink>
      <SiteNavLink to={docsHome} layout="header">
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
    </>
  );

  const metaLine = (
    <Text variant="muted" className="!py-0 truncate text-xs sm:text-sm">
      <code className="text-cyan-700 dark:text-cyan-400/90">{PACKAGE}</code>
      {onDocs && (
        <span className="text-gray-600 dark:text-gray-500">
          {" "}
          · <span className="text-gray-700 dark:text-gray-400">{t("nav.docsBadge")}</span>
        </span>
      )}
    </Text>
  );

  const showMetaInHeader = !isHome || progress > 0.35;
  const scrollHeader = isHome;

  return (
    <SiteHeaderShell
      appearance={scrollHeader ? "scroll" : "default"}
      sticky
      className={scrollHeader ? "header-scroll shrink-0" : "shrink-0"}
      style={scrollHeader ? headerStyle : undefined}
      brand={
        <div className="flex min-h-9 items-center md:min-h-10">
          <NavLink
            id="logo-container"
            to={siteHome}
            end
            className="logo-scroll block rounded-md outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80"
            style={logoStyle}
            aria-hidden={logoInteractive ? undefined : true}
            tabIndex={logoInteractive ? undefined : -1}
          >
            <span className="text-lg font-bold sm:text-xl">
              <GradientText variant="cyan-purple">UI Kit Fravelz</GradientText>
            </span>
          </NavLink>
        </div>
      }
      meta={showMetaInHeader ? metaLine : null}
      actions={
        <>
          <div className="flex w-full flex-wrap items-center justify-center gap-2 sm:justify-end">
            <LanguageSwitcher />
          </div>
          <SiteHeaderNav menuLabel={t("nav.menu")} ariaLabel={t("lang.label")}>
            {navLinks}
          </SiteHeaderNav>
        </>
      }
    />
  );
}
