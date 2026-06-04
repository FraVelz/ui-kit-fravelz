import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ComponentDocPage from "./docs/ComponentDocPage";
import DocHomePage from "./docs/DocHomePage";
import DocsLayout from "./docs/DocsLayout";
import { DOCS_HOME } from "./docs/paths";

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
