/**
 * Container Component
 * A flexible container component for layout and spacing
 */
import React from "react";
import { cn } from "../lib/cn";

export default function Container({ children, className = "", variant = "default", size = "md" }) {
  return (
    <div
      className={cn(
        "mx-auto",
        size === "sm" && "max-w-2xl",
        size === "md" && "max-w-4xl",
        size === "lg" && "max-w-6xl",
        size === "xl" && "max-w-7xl",
        size === "full" && "w-full",
        variant === "default" && "px-4 py-8",
        variant === "compact" && "px-2 py-4",
        variant === "relaxed" && "px-6 py-12",
        variant === "section" && "px-4 py-16",
        className
      )}
    >
      {children}
    </div>
  );
}
