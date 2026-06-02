/**
 * Line Component
 * A horizontal line divider element with design guide styling
 */
import React from "react";
import { cn } from "../lib/cn";

export default function Line({ variant = "default", className = "" }) {
  return (
    <hr
      className={cn(
        "my-6",
        variant === "default" && "border-gray-700",
        variant === "cyan" && "border-cyan-500/30",
        variant === "purple" && "border-purple-500/30",
        variant === "subtle" && "border-gray-700/50",
        className
      )}
    />
  );
}
