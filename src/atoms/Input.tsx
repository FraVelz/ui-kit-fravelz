/**
 * Input Component
 * A flexible input field component with design guide styling
 */
import type { InputHTMLAttributes, ReactNode } from "react";
import type { InputVariant, SizeSmMdLg } from "../types";
import { cn } from "../lib/cn";

export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "className" | "placeholder" | "disabled"
> {
  placeholder?: string;
  className?: string;
  variant?: InputVariant;
  size?: SizeSmMdLg;
  icon?: ReactNode | null;
  label?: string | null;
  error?: string | null;
  disabled?: boolean;
}

export default function Input({
  placeholder = "Enter text...",
  className = "",
  variant = "default",
  size = "md",
  icon = null,
  label = null,
  error = null,
  disabled = false,
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold text-cyan-700 mb-2 dark:text-cyan-300">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            {icon}
          </span>
        )}
        <input
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            "w-full rounded-lg outline-none transition-all",
            "focus-visible:ring-2 focus-visible:ring-offset-2",
            "focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950",
            "disabled:focus-visible:ring-0",
            size === "sm" && "px-3 py-1.5 text-sm",
            size === "md" && "px-4 py-2 text-base",
            size === "lg" && "px-5 py-3 text-lg",
            variant === "default" &&
              cn(
                "bg-white border border-cyan-500/40 text-gray-900 placeholder-gray-400",
                "focus-visible:border-cyan-500/70 focus-visible:shadow-lg focus-visible:shadow-cyan-500/10",
                "focus-visible:ring-cyan-500/40",
                "dark:bg-gray-800 dark:border-cyan-500/30 dark:text-white dark:placeholder-gray-500",
                "dark:focus-visible:border-cyan-400/60 dark:focus-visible:ring-cyan-400/50"
              ),
            variant === "purple" &&
              cn(
                "bg-white border border-purple-500/40 text-gray-900 placeholder-gray-400",
                "focus-visible:border-purple-500/70 focus-visible:shadow-lg focus-visible:shadow-purple-500/10",
                "focus-visible:ring-purple-500/40",
                "dark:bg-gray-800 dark:border-purple-500/30 dark:text-white dark:placeholder-gray-500",
                "dark:focus-visible:border-purple-400/60 dark:focus-visible:ring-purple-400/50"
              ),
            variant === "minimal" &&
              cn(
                "bg-transparent border-b-2 border-gray-300 text-gray-900 placeholder-gray-400",
                "rounded-none focus-visible:border-cyan-600 focus-visible:ring-cyan-500/40 focus-visible:ring-offset-0",
                "dark:border-gray-600 dark:text-white dark:placeholder-gray-500",
                "dark:focus-visible:border-cyan-400 dark:focus-visible:ring-cyan-400/40"
              ),
            icon && "pl-10",
            error && "border-purple-500/60 focus-visible:ring-purple-400/50",
            disabled && "opacity-50 cursor-not-allowed",
            className
          )}
          {...props}
        />
      </div>
      {error && (
        <p className="text-purple-600 text-xs mt-1.5 dark:text-purple-400">{error}</p>
      )}
    </div>
  );
}
