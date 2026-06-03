import React from "react";
import { Code, Text, Title } from "../kit.js";

export function DocSidebar({ sections }) {
  return (
    <nav
      className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-4"
      aria-label="Índice de componentes"
    >
      {sections.map((group) => (
        <div key={group.id} className="mb-6">
          <p className="mb-2 font-mono text-xs uppercase tracking-wider text-purple-400">
            {group.label}
          </p>
          <ul className="space-y-1">
            {group.items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block rounded-md px-2 py-1 text-sm text-gray-400 transition-colors hover:bg-gray-800/80 hover:text-cyan-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}

export function PropsTable({ props = [] }) {
  if (props.length === 0) {
    return <Text variant="muted" className="text-sm">Sin props documentadas.</Text>;
  }

  return (
    <div className="my-4 overflow-x-auto rounded-lg border border-gray-800">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-800/80 text-cyan-300">
          <tr>
            <th className="px-4 py-3 font-semibold">Prop</th>
            <th className="px-4 py-3 font-semibold">Tipo</th>
            <th className="px-4 py-3 font-semibold">Por defecto</th>
            <th className="px-4 py-3 font-semibold">Descripción</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800 text-gray-300">
          {props.map((row) => (
            <tr key={row.name} className="hover:bg-gray-800/40">
              <td className="px-4 py-3 font-mono text-cyan-200">{row.name}</td>
              <td className="px-4 py-3 font-mono text-xs text-purple-300">{row.type}</td>
              <td className="px-4 py-3 font-mono text-xs text-gray-500">
                {row.default ?? "—"}
              </td>
              <td className="px-4 py-3">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DocSection({ entry, children }) {
  return (
    <section id={entry.id} className="scroll-mt-28 border-b border-gray-800/80 pb-16 mb-4">
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 font-mono text-xs text-cyan-300">
          {entry.layer}
        </span>
        {entry.packageExport && (
          <span className="font-mono text-xs text-gray-500">@fravelz/ui-kit-fravelz</span>
        )}
      </div>
      <Title headingLevel="h2" className="!mb-2">
        {entry.name}
      </Title>
      <Text className="!py-0 mb-4 max-w-3xl">{entry.description}</Text>

      {entry.importLine && (
        <div className="mb-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
            Importación
          </p>
          <Code codeContent={entry.importLine} language="javascript" />
        </div>
      )}

      {entry.usage && (
        <div className="mb-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
            Uso
          </p>
          <Code codeContent={entry.usage} language="javascript" />
        </div>
      )}

      {entry.notes?.length > 0 && (
        <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-gray-400">
          {entry.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      )}

      {entry.props?.length > 0 && (
        <>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
            Props
          </p>
          <PropsTable props={entry.props} />
        </>
      )}

      {entry.subComponents?.length > 0 && (
        <div className="mb-4 space-y-6">
          {entry.subComponents.map((sub) => (
            <div key={sub.name}>
              <p className="mb-2 font-mono text-sm text-purple-300">{sub.name}</p>
              <PropsTable props={sub.props} />
            </div>
          ))}
        </div>
      )}

      <p className="mb-3 mt-6 text-xs font-semibold uppercase tracking-wide text-gray-500">
        Vista previa
      </p>
      <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6">{children}</div>
    </section>
  );
}
