/**
 * Grid Component
 * A flexible grid layout component
 */
import React from "react";
import { cn } from "../lib/cn";

export default function Grid({
  children,
  className = "",
  cols = 3,
  gap = "md",
  responsive = true,
}) {
  return (
    <div
      className={cn(
        "grid",
        responsive && "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        !responsive && cols === 1 && "grid-cols-1",
        !responsive && cols === 2 && "grid-cols-2",
        !responsive && cols === 3 && "grid-cols-3",
        !responsive && cols === 4 && "grid-cols-4",
        !responsive && cols === 6 && "grid-cols-6",
        !responsive && ![1, 2, 3, 4, 6].includes(cols) && "grid-cols-3",
        gap === "sm" && "gap-3",
        gap === "md" && "gap-4",
        gap === "lg" && "gap-6",
        gap === "xl" && "gap-8",
        className
      )}
    >
      {children}
    </div>
  );
}
