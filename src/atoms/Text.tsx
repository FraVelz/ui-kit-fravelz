/**
 * Text Component
 * A reusable paragraph component with customizable text selection behavior and variants
 */
import type { ReactNode } from "react";
import type { TextSelectability, TextSize, TextVariant } from "../types";
import { cn } from "../lib/cn";

export interface TextProps {
  children: ReactNode;
  className?: string;
  selectability?: TextSelectability;
  variant?: TextVariant;
  size?: TextSize;
}

export default function Text({
  children,
  className = "",
  selectability = "auto",
  variant = "default",
  size = "base",
}: TextProps) {
  return (
    <p
      className={cn(
        "py-2",
        selectability === "auto" && "select-auto",
        selectability === "none" && "select-none",
        selectability === "text" && "select-text",
        selectability === "all" && "select-all",
        size === "sm" && "text-sm",
        size === "base" && "text-base",
        size === "lg" && "text-lg",
        size === "xl" && "text-xl",
        variant === "default" && "text-gray-700 dark:text-gray-300",
        variant === "secondary" && "text-gray-600 dark:text-gray-400",
        variant === "muted" && "text-gray-500",
        variant === "accent" && "text-cyan-700 dark:text-cyan-300",
        variant === "highlight" && "text-purple-700 dark:text-purple-300",
        className
      )}
    >
      {children}
    </p>
  );
}
