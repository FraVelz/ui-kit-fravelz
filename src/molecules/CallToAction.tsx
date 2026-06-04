/**
 * CallToAction Component
 * A prominent call-to-action component with design guide styling
 */
import type { ReactNode } from "react";
import type { ButtonVariant } from "../types";
import { cn } from "../lib/cn";

export interface CallToActionProps {
  children: ReactNode;
  className?: string;
  href?: string;
  icon?: ReactNode | null;
  target?: string;
  variant?: ButtonVariant;
}

export default function CallToAction({
  children,
  className = "",
  href = "#",
  icon = null,
  target = "_self",
  variant = "primary",
}: CallToActionProps) {
  return (
    <a
      href={href}
      target={target}
      draggable={false}
      className={cn(
        "inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all text-lg",
        "outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950",
        variant === "outline"
          ? "focus-visible:ring-purple-400/80"
          : "focus-visible:ring-cyan-400/80",
        variant === "primary" &&
          cn(
            "bg-gradient-to-r from-cyan-600 to-purple-600 text-white",
            "hover:from-cyan-500 hover:to-purple-500",
            "shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
          ),
        variant === "secondary" &&
          cn(
            "bg-gray-900 border-2 border-cyan-500/40 text-cyan-300",
            "hover:border-cyan-400/60 hover:text-cyan-200"
          ),
        variant === "outline" &&
          cn(
            "bg-transparent border-2 border-purple-500/40 text-purple-300",
            "hover:border-purple-400/60 hover:text-purple-200"
          ),
        variant === "ghost" && "text-cyan-300 hover:text-cyan-200 hover:bg-cyan-500/10",
        className
      )}
    >
      {icon && (
        <span className="inline-flex shrink-0" aria-hidden>
          {icon}
        </span>
      )}
      {children}
    </a>
  );
}
