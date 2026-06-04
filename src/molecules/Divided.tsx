/**
 * Divided Component
 * A two-column layout component with flexible content arrangement
 */
import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export interface DividedProps {
  secondaryContent: ReactNode;
  children: ReactNode;
  hasBorder?: boolean;
}

export default function Divided({ secondaryContent, children, hasBorder = false }: DividedProps) {
  return (
    <div
      className={cn(
        "px-3 flex flex-col lg:flex-row justify-center items-center rounded-2xl",
        hasBorder ? "border-2 border-gray-300 dark:border-gray-400" : "border-0"
      )}
    >
      <div
        className={cn(
          "break-words rounded-2xl border border-gray-200/80 bg-white p-4 shadow-sm",
          "dark:border-transparent dark:bg-gray-900 dark:shadow-none"
        )}
      >
        {children}
      </div>
      <div className="flex justify-center items-center lg:w-96">{secondaryContent}</div>
    </div>
  );
}
