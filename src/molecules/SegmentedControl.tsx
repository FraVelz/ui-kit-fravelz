/**
 * SegmentedControl — grupo de opciones mutuamente excluyentes (p. ej. idioma ES/EN).
 */
import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export interface SegmentedControlOption<T extends string = string> {
  value: T;
  label: ReactNode;
}

export interface SegmentedControlProps<T extends string = string> {
  value: T;
  onChange: (value: T) => void;
  options: SegmentedControlOption<T>[];
  /** Etiqueta accesible del grupo (role="group") */
  "aria-label": string;
  className?: string;
}

export default function SegmentedControl<T extends string = string>({
  value,
  onChange,
  options,
  "aria-label": ariaLabel,
  className = "",
}: SegmentedControlProps<T>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border border-gray-300 p-0.5 dark:border-gray-700",
        className
      )}
      role="group"
      aria-label={ariaLabel}
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          aria-pressed={value === option.value}
          className={cn(
            "rounded px-2 py-1 font-mono text-xs transition-colors outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80",
            value === option.value
              ? "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300"
              : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
