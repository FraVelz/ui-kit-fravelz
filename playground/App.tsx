import { Navigate, Route, Routes } from "react-router-dom";
import SiteFooter from "./components/layout/SiteFooter";
import SiteHeader from "./components/layout/SiteHeader";
import DocsLayout from "./features/docs/components/DocsLayout";
import ComponentDocPage from "./features/docs/pages/ComponentDocPage";
import DocHomePage from "./features/docs/pages/DocHomePage";
import { DOCS_HOME, SITE_HOME } from "./features/docs/paths";
import LandingPage from "./features/home/LandingPage";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900 transition-colors dark:bg-gray-950 dark:text-gray-100">
      <SiteHeader />
      <main className="flex-1">
        <Routes>
          <Route path={SITE_HOME} element={<LandingPage />} />
          <Route path={DOCS_HOME} element={<DocsLayout />}>
            <Route index element={<DocHomePage />} />
            <Route path=":componentId" element={<ComponentDocPage />} />
          </Route>
          <Route path="*" element={<Navigate to={SITE_HOME} replace />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}
