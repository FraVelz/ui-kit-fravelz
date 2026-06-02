/**
 * Divider Component
 * A flexible divider component with multiple variants
 */
import React from "react";
import { cn } from "../lib/cn";

export default function Divider({
  className = "",
  variant = "default",
  orientation = "horizontal",
  label = null,
  size = "md",
}) {
  if (orientation === "vertical") {
    return (
      <div
        className={cn(
          "h-12 border-l-2 transition-colors",
          variant === "default" && "border-gray-700",
          variant === "cyan" && "border-cyan-500/30 hover:border-cyan-500/60",
          variant === "purple" && "border-purple-500/30 hover:border-purple-500/60",
          variant === "dotted" && "border-dashed border-gray-600",
          variant === "gradient" &&
            "border-gradient-to-r from-transparent via-cyan-500/30 to-transparent",
          className
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        "w-full flex items-center gap-3",
        size === "sm" && "my-3",
        size === "md" && "my-6",
        size === "lg" && "my-12",
        className
      )}
    >
      <hr
        className={cn(
          "flex-1 border-2 transition-colors",
          variant === "default" && "border-gray-700",
          variant === "cyan" && "border-cyan-500/30 hover:border-cyan-500/60",
          variant === "purple" && "border-purple-500/30 hover:border-purple-500/60",
          variant === "dotted" && "border-dashed border-gray-600",
          variant === "gradient" &&
            "border-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
        )}
      />
      {label && (
        <>
          <span className="text-gray-500 text-sm whitespace-nowrap">{label}</span>
          <hr
            className={cn(
              "flex-1 border-2 transition-colors",
              variant === "default" && "border-gray-700",
              variant === "cyan" && "border-cyan-500/30 hover:border-cyan-500/60",
              variant === "purple" && "border-purple-500/30 hover:border-purple-500/60",
              variant === "dotted" && "border-dashed border-gray-600",
              variant === "gradient" &&
                "border-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
            )}
          />
        </>
      )}
    </div>
  );
}
