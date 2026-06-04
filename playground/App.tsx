import { Navigate, Route, Routes } from "react-router-dom";
import ComponentDocPage from "./docs/ComponentDocPage";
import DocHomePage from "./docs/DocHomePage";
import DocsLayout from "./docs/DocsLayout";
import LandingPage from "./LandingPage";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import { DOCS_HOME, SITE_HOME } from "./docs/paths";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
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
