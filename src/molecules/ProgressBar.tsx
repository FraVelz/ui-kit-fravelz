/**
 * ProgressBar Component
 * A progress bar component for showing progress with design guide styling
 */
import type { ProgressBarVariant, SizeSmMdLgXl } from "../types";
import { cn } from "../lib/cn";

export interface ProgressBarProps {
  value?: number;
  max?: number;
  className?: string;
  variant?: ProgressBarVariant;
  size?: SizeSmMdLgXl;
  label?: string | null;
  showPercentage?: boolean;
  animated?: boolean;
}

export default function ProgressBar({
  value = 0,
  max = 100,
  className = "",
  variant = "cyan",
  size = "md",
  label = null,
  showPercentage = true,
  animated = true,
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className={className}>
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-2">
          {label && (
            <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">{label}</span>
          )}
          {showPercentage && (
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <div
        className={cn(
          "w-full overflow-hidden rounded-full border border-gray-200 bg-gray-100 transition-all",
          "dark:border-gray-700 dark:bg-gray-800",
          size === "sm" && "h-2",
          size === "md" && "h-3",
          size === "lg" && "h-4",
          size === "xl" && "h-6"
        )}
      >
        <div
          className={cn(
            "rounded-full transition-all duration-500",
            size === "sm" && "h-2",
            size === "md" && "h-3",
            size === "lg" && "h-4",
            size === "xl" && "h-6",
            variant === "cyan" && "bg-gradient-to-r from-cyan-600 to-cyan-500",
            variant === "purple" && "bg-gradient-to-r from-purple-600 to-purple-500",
            variant === "gradient" && "bg-gradient-to-r from-cyan-600 to-purple-600",
            variant === "success" && "bg-cyan-600",
            animated && "ease-out"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
