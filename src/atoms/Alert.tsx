import type { ReactNode } from "react";
import type { AlertType } from "../types";
import { cn } from "../lib/cn";
import { alertIcons, IconClose } from "../lib/icons";

export interface AlertProps {
  children: ReactNode;
  className?: string;
  type?: AlertType;
  title?: string | null;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export default function Alert({
  children,
  className = "",
  type = "info",
  title = null,
  dismissible = false,
  onDismiss,
}: AlertProps) {
  const TypeIcon = alertIcons[type];

  return (
    <div
      className={cn(
        "p-4 rounded-lg transition-all",
        (type === "info" || type === "success") &&
          cn("bg-cyan-500/10 border border-cyan-500/30 text-cyan-300", "hover:border-cyan-500/60"),
        (type === "warning" || type === "error") &&
          cn(
            "bg-purple-500/10 border border-purple-500/30 text-purple-300",
            "hover:border-purple-500/60"
          ),
        className
      )}
    >
      <div className="flex items-start gap-3">
        <TypeIcon className="mt-0.5" />
        <div className="flex-1">
          {title && <h4 className="font-semibold mb-1">{title}</h4>}
          <p className="text-sm">{children}</p>
        </div>
        {dismissible && (
          <button
            type="button"
            onClick={onDismiss}
            aria-label="Dismiss alert"
            className={cn(
              "hover:opacity-75 transition-opacity cursor-pointer p-0.5 rounded-md",
              "outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950",
              type === "warning" || type === "error"
                ? "focus-visible:ring-purple-400/80"
                : "focus-visible:ring-cyan-400/80"
            )}
          >
            <IconClose />
          </button>
        )}
      </div>
    </div>
  );
}
