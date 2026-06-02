/**
 * Alert Component
 * An alert component for displaying messages with design guide styling
 */
import React from "react";
import { cn } from "../lib/cn";

const ALERT_ICONS = {
  info: "ℹ️",
  success: "✓",
  warning: "⚠️",
  error: "✕",
};

export default function Alert({
  children,
  className = "",
  type = "info",
  title = null,
  dismissible = false,
  onDismiss = null,
}) {
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
        <span className="text-xl mt-0.5">{ALERT_ICONS[type]}</span>
        <div className="flex-1">
          {title && <h4 className="font-semibold mb-1">{title}</h4>}
          <p className="text-sm">{children}</p>
        </div>
        {dismissible && (
          <button
            type="button"
            onClick={onDismiss}
            className="text-lg hover:opacity-75 transition-opacity cursor-pointer"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
