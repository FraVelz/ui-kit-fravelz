/**
 * Container Component
 * A flexible container component for layout and spacing
 */
import type { ReactNode } from "react";
import type { ContainerSize, ContainerVariant } from "../types";
import { cn } from "../lib/cn";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  variant?: ContainerVariant;
  size?: ContainerSize;
}

export default function Container({
  children,
  className = "",
  variant = "default",
  size = "md",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto",
        size === "sm" && "max-w-3xl",
        size === "md" && "max-w-6xl",
        size === "lg" && "max-w-7xl",
        size === "xl" && "max-w-screen-xl",
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
