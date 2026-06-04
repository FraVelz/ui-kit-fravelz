/**
 * Section Component
 * A semantic section component for organizing content
 */
import type { ReactNode } from "react";
import type { SectionVariant } from "../types";
import { cn } from "../lib/cn";

export interface SectionProps {
  children: ReactNode;
  className?: string;
  title?: string | null;
  subtitle?: string | null;
  variant?: SectionVariant;
  id?: string | null;
  /** Alineación del bloque título/subtítulo */
  align?: "left" | "center";
}

export default function Section({
  children,
  className = "",
  title = null,
  subtitle = null,
  variant = "default",
  id = null,
  align = "left",
}: SectionProps) {
  return (
    <section
      id={id ?? undefined}
      className={cn(
        "py-8 px-4 transition-all sm:py-10 md:py-12",
        variant === "default" && cn("bg-gray-900/50 border-t border-b border-cyan-500/20"),
        variant === "highlighted" &&
          cn(
            "bg-gradient-to-br from-cyan-900/10 via-gray-900 to-purple-900/10",
            "border border-cyan-500/30 rounded-lg"
          ),
        variant === "minimal" && "bg-transparent",
        variant === "elevated" &&
          cn(
            "bg-gradient-to-br from-gray-100 to-gray-50 border-gray-200/80",
            "dark:from-gray-800 dark:to-gray-900 dark:border-purple-500/20",
            "border rounded-lg shadow-lg shadow-purple-500/5"
          ),
        className
      )}
    >
      <div className="mx-auto max-w-6xl">
        {title && (
          <div className={cn("mb-6 md:mb-8", align === "center" && "text-center")}>
            <h2
              className={cn(
                "text-2xl font-bold mb-2 sm:text-3xl md:text-4xl md:mb-3",
                "bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
              )}
            >
              {title}
            </h2>
            {subtitle && (
              <p className="text-base text-gray-600 dark:text-gray-400 sm:text-lg">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
