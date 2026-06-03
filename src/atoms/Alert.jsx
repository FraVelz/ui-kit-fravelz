/**
 * Alert Component
 * An alert component for displaying messages with design guide styling
 */
import React from "react";
import { cn } from "../lib/cn";
import { focusForAlertType } from "../lib/focus";
import { alertIcons, IconClose } from "../lib/icons";

export default function Alert({
  children,
  className = "",
  type = "info",
  title = null,
  dismissible = false,
  onDismiss = null,
}) {
  const TypeIcon = alertIcons[type] ?? alertIcons.info;

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
              focusForAlertType(type)
            )}
          >
            <IconClose />
          </button>
        )}
      </div>
    </div>
  );
}
