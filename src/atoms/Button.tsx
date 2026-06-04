import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { ButtonVariant, SizeSmMdLg } from "../types";
import { cn } from "../lib/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: SizeSmMdLg;
}

export default function Button({
  children,
  className = "",
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "rounded-full cursor-pointer transition-all duration-300",
        "outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950",
        variant === "outline"
          ? "focus-visible:ring-purple-400/80"
          : "focus-visible:ring-cyan-400/80",
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
            "bg-white border border-cyan-600/40 text-cyan-700",
            "hover:border-cyan-500/60 hover:text-cyan-800",
            "dark:bg-gray-900 dark:border-cyan-500/40 dark:text-cyan-300",
            "dark:hover:border-cyan-400/60 dark:hover:text-cyan-200"
          ),
        variant === "outline" &&
          cn(
            "border border-purple-600/40 text-purple-700",
            "hover:border-purple-500/60 hover:text-purple-800",
            "dark:border-purple-500/40 dark:text-purple-300",
            "dark:hover:border-purple-400/60 dark:hover:text-purple-200"
          ),
        variant === "ghost" &&
          cn(
            "text-cyan-700 hover:text-cyan-800 hover:bg-cyan-500/10",
            "dark:text-cyan-300 dark:hover:text-cyan-200"
          ),
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
