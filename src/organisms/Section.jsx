/**
 * Section Component
 * A semantic section component for organizing content
 */
import React from "react";
import { cn } from "../lib/cn";

export default function Section({
  children,
  className = "",
  title = null,
  subtitle = null,
  variant = "default",
  id = null,
}) {
  return (
    <section
      id={id ?? undefined}
      className={cn(
        "py-12 px-4 transition-all",
        variant === "default" && cn("bg-gray-900/50 border-t border-b border-cyan-500/20"),
        variant === "highlighted" &&
          cn(
            "bg-gradient-to-br from-cyan-900/10 via-gray-900 to-purple-900/10",
            "border border-cyan-500/30 rounded-lg"
          ),
        variant === "minimal" && "bg-transparent",
        variant === "elevated" &&
          cn(
            "bg-gradient-to-br from-gray-800 to-gray-900",
            "border border-purple-500/20 rounded-lg shadow-lg shadow-purple-500/5"
          ),
        className
      )}
    >
      {title && (
        <div className="mb-8">
          <h2
            className={cn(
              "text-4xl font-bold mb-3",
              "bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            )}
          >
            {title}
          </h2>
          {subtitle && <p className="text-gray-400 text-lg">{subtitle}</p>}
        </div>
      )}
      <div className="max-w-4xl mx-auto">{children}</div>
    </section>
  );
}
