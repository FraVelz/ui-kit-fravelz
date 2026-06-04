/**
 * Divider Component
 * A flexible divider component with multiple variants
 */
import type { ReactNode } from "react";
import type { DividerOrientation, DividerVariant, SizeSmMdLg } from "../types";
import { cn } from "../lib/cn";

export interface DividerProps {
  className?: string;
  variant?: DividerVariant;
  orientation?: DividerOrientation;
  label?: ReactNode | null;
  size?: SizeSmMdLg;
}

const dividerBorder = (variant: DividerVariant) =>
  cn(
    variant === "default" && "border-gray-200 dark:border-gray-700",
    variant === "cyan" && "border-cyan-500/40 hover:border-cyan-500/60 dark:border-cyan-500/30",
    variant === "purple" &&
      "border-purple-500/40 hover:border-purple-500/60 dark:border-purple-500/30",
    variant === "dotted" && "border-dashed border-gray-300 dark:border-gray-600",
    variant === "gradient" &&
      "border-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
  );

export default function Divider({
  className = "",
  variant = "default",
  orientation = "horizontal",
  label = null,
  size = "md",
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        className={cn(
          "h-12 border-l-2 transition-colors",
          dividerBorder(variant),
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
      <hr className={cn("flex-1 border-2 transition-colors", dividerBorder(variant))} />
      {label && (
        <>
          <span className="text-gray-500 text-sm whitespace-nowrap dark:text-gray-400">
            {label}
          </span>
          <hr className={cn("flex-1 border-2 transition-colors", dividerBorder(variant))} />
        </>
      )}
    </div>
  );
}
