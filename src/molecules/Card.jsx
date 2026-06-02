/**
 * Card Component
 * A flexible card component for containing content with design guide styling
 */
import React from "react";
import { cn } from "../lib/cn";

export default function Card({
  children,
  className = "",
  title = null,
  subtitle = null,
  variant = "default",
  hoverable = true,
}) {
  return (
    <div
      className={cn(
        "p-6 rounded-lg transition-all",
        variant === "default" &&
          cn(
            "bg-gray-900 border border-cyan-500/30",
            hoverable && "hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/10"
          ),
        variant === "elevated" &&
          cn(
            "bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/30",
            hoverable && "hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/10"
          ),
        variant === "gradient" &&
          cn(
            "bg-gradient-to-br from-cyan-900/20 via-gray-900 to-purple-900/20",
            "border border-cyan-500/30",
            hoverable && "hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/10"
          ),
        variant === "minimal" &&
          cn(
            "bg-gray-950/50 border border-gray-700/50",
            hoverable && "hover:border-gray-600/50 transition-colors"
          ),
        className
      )}
    >
      {title && (
        <>
          <h3 className="text-lg font-semibold text-cyan-300 mb-2">{title}</h3>
          {subtitle && <p className="text-gray-400 text-sm mb-4">{subtitle}</p>}
        </>
      )}
      <div className="text-gray-300">{children}</div>
    </div>
  );
}
