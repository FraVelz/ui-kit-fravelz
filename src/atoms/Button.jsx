/**
 * Button Component
 * A reusable button component with multiple variants following the design guide
 */
import React from "react";
import { cn } from "../lib/cn";

export default function Button({ children, className = "", variant = "primary", size = "md" }) {
  return (
    <button
      className={cn(
        "rounded-full cursor-pointer transition-all duration-300",
        size === "sm" && "px-3 py-1 text-sm",
        size === "md" && "px-4 py-2",
        size === "lg" && "px-6 py-3 text-lg",
        variant === "primary" &&
          cn(
            "bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold",
            "hover:from-cyan-500 hover:to-purple-500",
            "shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
          ),
        variant === "secondary" &&
          cn(
            "bg-gray-900 border border-cyan-500/40 text-cyan-300",
            "hover:border-cyan-400/60 hover:text-cyan-200"
          ),
        variant === "outline" &&
          cn(
            "border border-purple-500/40 text-purple-300",
            "hover:border-purple-400/60 hover:text-purple-200"
          ),
        variant === "ghost" && "text-cyan-300 hover:text-cyan-200 hover:bg-cyan-500/10",
        className
      )}
    >
      {children}
    </button>
  );
}
