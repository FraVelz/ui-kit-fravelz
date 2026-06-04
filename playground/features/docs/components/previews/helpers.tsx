import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { DynamicLink, Text } from "../../../../kit";
import { useLocalePaths } from "../../paths";

export interface PreviewState {
  inputValue: string;
  setInputValue: (value: string) => void;
  tagVisible: boolean;
  setTagVisible: (visible: boolean) => void;
  showMessage: boolean;
  setShowMessage: (open: boolean) => void;
}

export function CurriculumList({
  className = "",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return <ol className={className}>{children}</ol>;
}

export function DynamicLinkPreview() {
  const location = useLocation();
  const { siteHome, docsPath } = useLocalePaths();

  return (
    <div className="w-full space-y-2">
      <nav className="flex flex-wrap gap-4">
        <DynamicLink to={siteHome}>Inicio</DynamicLink>
        <DynamicLink to={docsPath("button")}>Button</DynamicLink>
        <DynamicLink to={docsPath("alert")}>Alert</DynamicLink>
      </nav>
      <Text variant="muted" className="text-sm">
        Ruta actual: <code className="text-cyan-400">{location.pathname}</code>
      </Text>
    </div>
  );
}

export const ROADMAP_STEPS = [
  { title: "Fundamentos", description: "HTML, CSS y JavaScript." },
  { title: "React", description: "Componentes y estado." },
  { title: "UI Kit", description: "Atoms, molecules y organisms." },
];
