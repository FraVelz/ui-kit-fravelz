/**
 * Badge Component
 * A flexible badge/chip component following the design guide
 */
import type { ReactNode } from "react";
import type { BadgeVariant, SizeSmMdLg } from "../types";
import { cn } from "../lib/cn";

export interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: BadgeVariant;
  size?: SizeSmMdLg;
  icon?: ReactNode | null;
}

export default function Badge({
  children,
  className = "",
  variant = "cyan",
  size = "md",
  icon = null,
}: BadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 max-w-fit rounded-full transition-all",
        size === "sm" && "text-xs px-2 py-1",
        size === "md" && "text-sm px-3 py-1.5",
        size === "lg" && "text-base px-4 py-2",
        variant === "cyan" &&
          cn(
            "text-cyan-800 bg-cyan-50 border border-cyan-500/50",
            "hover:border-cyan-500/70 hover:bg-cyan-100/80",
            "dark:text-cyan-300 dark:bg-gray-900 dark:border-cyan-500/40",
            "dark:hover:border-cyan-400/60 dark:hover:bg-gray-800"
          ),
        variant === "purple" &&
          cn(
            "text-purple-800 bg-purple-50 border border-purple-500/50",
            "hover:border-purple-500/70 hover:bg-purple-100/80",
            "dark:text-purple-300 dark:bg-gray-900 dark:border-purple-500/40",
            "dark:hover:border-purple-400/60 dark:hover:bg-gray-800"
          ),
        variant === "success" &&
          cn(
            "text-cyan-800 bg-cyan-500/15 border border-cyan-500/50 hover:border-cyan-500/70",
            "dark:text-cyan-300 dark:bg-cyan-500/10 dark:border-cyan-500/40 dark:hover:border-cyan-400/60"
          ),
        variant === "highlight" &&
          cn(
            "text-cyan-900 bg-gradient-to-r from-cyan-500/15 to-purple-500/15",
            "border border-cyan-500/50 hover:border-cyan-500/70",
            "dark:text-white dark:from-cyan-600/20 dark:to-purple-600/20",
            "dark:border-cyan-500/40 dark:hover:border-cyan-400/60"
          ),
        className
      )}
    >
      {icon && <span className="text-cyan-600 dark:text-cyan-400">{icon}</span>}
      <span>{children}</span>
    </div>
  );
}
