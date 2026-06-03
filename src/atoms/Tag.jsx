/**
 * Tag Component
 * A flexible tag/pill component for labeling and categorization
 */
import React from "react";
import { cn } from "../lib/cn";
import { IconClose } from "../lib/icons";

export default function Tag({
  children,
  className = "",
  variant = "cyan",
  removable = false,
  onRemove = null,
  interactive = false,
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all",
        interactive && "cursor-pointer",
        variant === "cyan" &&
          cn("bg-cyan-500/10 text-cyan-300 border border-cyan-500/30", "hover:border-cyan-400/60"),
        variant === "purple" &&
          cn(
            "bg-purple-500/10 text-purple-300 border border-purple-500/30",
            "hover:border-purple-400/60"
          ),
        variant === "gray" &&
          cn("bg-gray-800 text-gray-300 border border-gray-700", "hover:border-gray-600"),
        variant === "gradient" &&
          cn(
            "bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-300",
            "border border-cyan-500/30 hover:border-cyan-400/60"
          ),
        className
      )}
    >
      {children}
      {removable && (
        <button
          type="button"
          onClick={onRemove}
          aria-label="Remove tag"
          className="ml-1 hover:opacity-75 transition-opacity cursor-pointer p-0.5"
        >
          <IconClose />
        </button>
      )}
    </span>
  );
}
