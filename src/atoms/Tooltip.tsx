/**
 * Tooltip Component
 * A tooltip component for displaying helpful information on hover
 */
import { useState } from "react";
import type { ReactNode } from "react";
import type { TooltipPosition, TooltipVariant } from "../types";
import { cn } from "../lib/cn";

export interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  className?: string;
  position?: TooltipPosition;
  variant?: TooltipVariant;
}

export default function Tooltip({
  children,
  content,
  className = "",
  position = "top",
  variant = "default",
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={cn(
            "absolute left-1/2 transform -translate-x-1/2",
            "px-3 py-2 rounded-lg text-sm whitespace-nowrap",
            "pointer-events-none z-50 animation-fadeIn",
            position === "top" && "bottom-full mb-2",
            position === "bottom" && "top-full mt-2",
            position === "left" && "right-full mr-2",
            position === "right" && "left-full ml-2",
            variant === "default" &&
              cn(
                "bg-white border border-cyan-500/50 text-cyan-800 shadow-md",
                "dark:bg-gray-800 dark:border-cyan-500/40 dark:text-cyan-300 dark:shadow-none"
              ),
            variant === "dark" &&
              cn(
                "bg-gray-100 border border-gray-300 text-gray-800",
                "dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200"
              ),
            variant === "highlight" &&
              cn(
                "bg-gradient-to-r from-cyan-500/15 to-purple-500/15 border border-cyan-500/50 text-cyan-800",
                "dark:from-cyan-600/20 dark:to-purple-600/20 dark:border-cyan-500/40 dark:text-cyan-300"
              ),
            className
          )}
        >
          {content}
          <div
            className={cn(
              "absolute w-2 h-2 bg-white border-b border-r border-cyan-500/50 transform rotate-45",
              "dark:bg-gray-800 dark:border-cyan-500/40",
              position === "top" && "bottom-0 translate-y-1/2",
              position === "bottom" && "top-0 -translate-y-1/2"
            )}
          />
        </div>
      )}
    </div>
  );
}
