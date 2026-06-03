import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ComponentDocPage from "./docs/ComponentDocPage.jsx";
import DocHomePage from "./docs/DocHomePage.jsx";
import DocsLayout from "./docs/DocsLayout.jsx";
import { DOCS_HOME } from "./docs/paths.js";

export default function App() {
  return (
    <Routes>
      <Route element={<DocsLayout />}>
        <Route index element={<DocHomePage />} />
        <Route path="docs/:componentId" element={<ComponentDocPage />} />
      </Route>
      <Route path="*" element={<Navigate to={DOCS_HOME} replace />} />
    </Routes>
  );
}
