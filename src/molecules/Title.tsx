/**
 * Title Component
 * A flexible heading component supporting h1, h2, h3 tags with gradient styles
 */
import type { ReactNode } from "react";
import type { TitleHeadingLevel, TitleVariant } from "../types";
import { cn } from "../lib/cn";

export interface TitleProps {
  headingLevel: TitleHeadingLevel;
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: TitleVariant;
}

export default function Title({
  headingLevel,
  children,
  className = "",
  id = "",
  variant = "gradient",
}: TitleProps) {
  if (headingLevel === "h1") {
    return (
      <h1
        id={id || undefined}
        className={cn(
          "text-4xl font-bold mb-4",
          variant === "gradient" &&
            "bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent",
          className
        )}
      >
        {children}
      </h1>
    );
  }

  if (headingLevel === "h2") {
    return (
      <h2
        id={id || undefined}
        className={cn(
          "text-3xl font-semibold mb-3 mt-5",
          variant === "gradient" &&
            "bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent",
          className
        )}
      >
        {children}
      </h2>
    );
  }

  if (headingLevel === "h3") {
    return (
      <h3
        id={id || undefined}
        className={cn(
          "text-2xl font-medium mb-2 mt-4",
          variant === "gradient" &&
            "bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent",
          className
        )}
      >
        {children}
      </h3>
    );
  }

  return <>{children}</>;
}
