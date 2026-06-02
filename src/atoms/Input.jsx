/**
 * Input Component
 * A flexible input field component with design guide styling
 */
import React from "react";
import { cn } from "../lib/cn";

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
}) {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-semibold text-cyan-300 mb-2">{label}</label>}
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
            size === "sm" && "px-3 py-1.5 text-sm",
            size === "md" && "px-4 py-2 text-base",
            size === "lg" && "px-5 py-3 text-lg",
            variant === "default" &&
              cn(
                "bg-gray-800 border border-cyan-500/30 text-white placeholder-gray-500",
                "focus:border-cyan-400/60 focus:shadow-lg focus:shadow-cyan-500/10"
              ),
            variant === "purple" &&
              cn(
                "bg-gray-800 border border-purple-500/30 text-white placeholder-gray-500",
                "focus:border-purple-400/60 focus:shadow-lg focus:shadow-purple-500/10"
              ),
            variant === "minimal" &&
              cn(
                "bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-500",
                "focus:border-cyan-400"
              ),
            icon && "pl-10",
            error && "border-purple-500/60",
            disabled && "opacity-50 cursor-not-allowed",
            className
          )}
          {...props}
        />
      </div>
      {error && <p className="text-purple-400 text-xs mt-1.5">{error}</p>}
    </div>
  );
}
