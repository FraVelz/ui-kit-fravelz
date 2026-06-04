/**
 * Structure Component
 * Layout component for organizing page structure
 */
import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export interface StructureProps {
  children: ReactNode;
  className?: string;
}

export default function Structure({ children, className = "" }: StructureProps) {
  return (
    <div
      className={cn(
        "bg-white border border-gray-200/80 rounded-2xl h-fit min-w-2/4 hyphens-auto break-words p-4 shadow-sm",
        "dark:bg-gray-900 dark:border-transparent dark:shadow-none",
        className
      )}
    >
      {children}
    </div>
  );
}
