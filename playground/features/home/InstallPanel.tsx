import { useState } from "react";
import { Card, Code, cn, Text, Title } from "../../kit";
import { PACKAGE } from "../docs/registry";
import { useLocale } from "../../i18n/LocaleContext";

type PackageManager = "npm" | "pnpm" | "bun" | "yarn";

const MANAGERS: PackageManager[] = ["npm", "pnpm", "bun", "yarn"];

function installCommand(pm: PackageManager, pkg: string): string {
  switch (pm) {
    case "npm":
      return `npm install ${pkg}`;
    case "pnpm":
      return `pnpm add ${pkg}`;
    case "bun":
      return `bun add ${pkg}`;
    case "yarn":
      return `yarn add ${pkg}`;
  }
}

function peersInstallCommand(pm: PackageManager, peers: string): string {
  return `${installCommand(pm, "").trim()} ${peers}`.replace(/\s+/g, " ").trim();
}

export default function InstallPanel() {
  const { t } = useLocale();
  const [manager, setManager] = useState<PackageManager>("npm");

  const importExample = `import { Button, Card } from "${PACKAGE}";`;
  const peersNote = "react react-dom";

  return (
    <Card variant="default" hoverable={false} className="h-full min-w-0 w-full">
      <Title headingLevel="h2" className="!mb-1 !text-lg">
        {t("landing.installTitle")}
      </Title>
      <Text variant="muted" size="sm" className="!py-0 mb-4">
        {t("landing.installSubtitle")}
      </Text>

      <div
        className="mb-4 inline-flex flex-wrap gap-1 rounded-md border border-gray-300 p-0.5 dark:border-gray-700"
        role="tablist"
        aria-label={t("landing.installTitle")}
      >
        {MANAGERS.map((pm) => (
          <button
            key={pm}
            type="button"
            role="tab"
            aria-selected={manager === pm}
            onClick={() => setManager(pm)}
            className={cn(
              "rounded px-3 py-1.5 font-mono text-xs transition-colors",
              "outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80",
              manager === pm
                ? "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300"
                : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
            )}
          >
            {pm}
          </button>
        ))}
      </div>

      <div className="min-w-0 overflow-x-auto">
        <Code
          codeContent={installCommand(manager, PACKAGE)}
          language="bash"
          className="!my-0"
          compact
        />
      </div>

      <p className="mt-4 mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
        {t("landing.peersTitle")}
      </p>
      <div className="min-w-0 overflow-x-auto">
        <Code
          codeContent={peersInstallCommand(manager, peersNote)}
          language="bash"
          className="!my-0"
          compact
        />
      </div>

      <p className="mt-4 mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
        {t("landing.importExampleTitle")}
      </p>
      <div className="min-w-0 overflow-x-auto">
        <Code codeContent={importExample} language="javascript" className="!my-0" compact />
      </div>

      <Text variant="muted" size="sm" className="!py-0 mt-4">
        {t("landing.tailwindNote")}
      </Text>
    </Card>
  );
}
