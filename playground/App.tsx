import { Navigate, Route, Routes, useParams } from "react-router-dom";
import SiteFooter from "./components/layout/SiteFooter";
import SiteHeader from "./components/layout/SiteHeader";
import DocsLayout from "./features/docs/components/DocsLayout";
import ComponentDocPage from "./features/docs/pages/ComponentDocPage";
import DocHomePage from "./features/docs/pages/DocHomePage";
import { readStoredLocale } from "./features/docs/paths";
import LandingPage from "./features/home/LandingPage";
import LocaleGate from "./i18n/LocaleGate";
import { DEFAULT_LOCALE } from "./i18n/types";

function LocaleRootRedirect() {
  return <Navigate to={`/${readStoredLocale()}`} replace />;
}

function LegacyDocsRedirect() {
  const locale = readStoredLocale();
  return <Navigate to={`/${locale}/docs`} replace />;
}

function LegacyComponentDocRedirect() {
  const { componentId } = useParams();
  const locale = readStoredLocale();
  return <Navigate to={`/${locale}/docs/${componentId ?? ""}`} replace />;
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900 transition-colors dark:bg-gray-950 dark:text-gray-100">
      <SiteHeader />
      <main className="min-w-0 flex-1">
        <Routes>
          <Route path="/" element={<LocaleRootRedirect />} />
          <Route path="/docs" element={<LegacyDocsRedirect />} />
          <Route path="/docs/:componentId" element={<LegacyComponentDocRedirect />} />
          <Route path="/:locale" element={<LocaleGate />}>
            <Route index element={<LandingPage />} />
            <Route path="docs" element={<DocsLayout />}>
              <Route index element={<DocHomePage />} />
              <Route path=":componentId" element={<ComponentDocPage />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to={`/${DEFAULT_LOCALE}`} replace />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}
