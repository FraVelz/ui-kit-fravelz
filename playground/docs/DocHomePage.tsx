import React from "react";
import { NavLink } from "react-router-dom";
import { Text, Title } from "../kit";
import { COMPONENT_DOCS, DOC_SECTIONS, PACKAGE } from "./registry";
import { docsPath } from "./paths";

export default function DocHomePage() {
  return (
    <>
      <div className="mb-10 rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-6">
        <Title headingLevel="h2" className="!text-xl !mb-2">
          Documentación del UI Kit
        </Title>
        <Text className="text-sm !py-0 mb-4">
          Cada componente tiene su propia ruta (<code className="text-cyan-400">/docs/:id</code>
          ). El índice lateral usa React Router; en móvil, elige un componente abajo.
        </Text>
        <pre className="overflow-x-auto rounded-lg border border-gray-800 bg-gray-900 p-4 text-sm text-gray-300">
          {`npm install ${PACKAGE}
npm run dev`}
        </pre>
      </div>

      <nav className="mb-8 flex flex-wrap gap-2 lg:hidden" aria-label="Componentes">
        {DOC_SECTIONS.flatMap((group) =>
          group.items.map((item) => (
            <NavLink
              key={item.id}
              to={docsPath(item.id)}
              className={({ isActive }) =>
                `rounded-full border px-3 py-1 text-xs transition-colors ${
                  isActive
                    ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-300"
                    : "border-gray-700 text-gray-300 hover:border-cyan-500/50"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))
        )}
      </nav>

      <div className="space-y-8">
        {DOC_SECTIONS.map((group) => (
          <section key={group.id}>
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-purple-400">
              {group.label}
            </p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {group.items.map((item) => {
                const doc = COMPONENT_DOCS.find((d) => d.id === item.id);
                return (
                  <li key={item.id}>
                    <NavLink
                      to={docsPath(item.id)}
                      className={({ isActive }) =>
                        `block rounded-lg border p-4 transition-colors ${
                          isActive
                            ? "border-cyan-500/40 bg-cyan-500/10"
                            : "border-gray-800 bg-gray-900/50 hover:border-cyan-500/30"
                        }`
                      }
                    >
                      <span className="font-mono text-sm text-cyan-300">{item.name}</span>
                      {doc && (
                        <p className="mt-1 line-clamp-2 text-xs text-gray-500">{doc.description}</p>
                      )}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-10 text-sm text-gray-500">{COMPONENT_DOCS.length} entradas documentadas.</p>
    </>
  );
}
