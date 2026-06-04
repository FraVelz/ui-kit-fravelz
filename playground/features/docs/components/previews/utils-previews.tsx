import type { ReactNode } from "react";
import { IconArrowRight, IconCheck, Text, cn } from "../../../../kit";

export function renderUtilsPreview(id: string): ReactNode | null {
  switch (id) {
    case "cn":
      return (
        <p
          className={cn(
            "rounded-lg border px-4 py-2",
            "border-cyan-500/40 bg-cyan-500/10 text-cyan-200"
          )}
        >
          Clase generada con cn()
        </p>
      );

    case "icons":
      return (
        <div className="flex flex-wrap items-center gap-4 text-cyan-300">
          <IconCheck className="size-6" />
          <IconArrowRight className="size-6" />
          <Text variant="muted" className="text-sm">
            Ver Alert, Tag o Code para más iconos en contexto.
          </Text>
        </div>
      );

    default:
      return null;
  }
}
