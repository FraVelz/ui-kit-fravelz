/**
 * GradientText Component
 * A flexible text component with gradient effects following the design guide
 */
import { createElement } from "react";
import type { ReactNode } from "react";
import type { GradientTextAs, GradientTextVariant } from "../types";
import { cn } from "../lib/cn";

export interface GradientTextProps {
  children: ReactNode;
  className?: string;
  variant?: GradientTextVariant;
  as?: GradientTextAs;
}

export default function GradientText({
  children,
  className = "",
  variant = "cyan-purple",
  as: Tag = "span",
}: GradientTextProps) {
  return createElement(
    Tag,
    {
      className: cn(
        "font-bold",
        variant === "cyan-purple" &&
          "bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent",
        variant === "purple-cyan" &&
          "bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent",
        variant === "cyan-only" &&
          "bg-linear-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent",
        variant === "purple-only" &&
          "bg-linear-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent",
        variant === "blue-cyan" &&
          "bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent",
        className
      ),
    },
    children
  );
}
