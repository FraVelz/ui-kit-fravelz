/**
 * Link Component
 * A custom link component with smooth scrolling for in-page anchors and design guide styling
 */
import type { MouseEvent, ReactNode } from "react";
import type { LinkVariant } from "../types";
import { cn } from "../lib/cn";

export interface LinkProps {
  href: string;
  children: ReactNode;
  target?: string;
  className?: string;
  variant?: LinkVariant;
}

export default function Link({
  href,
  children,
  target = "_self",
  className,
  variant = "default",
}: LinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!href?.startsWith("#")) {
      return;
    }

    event.preventDefault();
    const elementId = href.slice(1);
    const element = document.getElementById(elementId) || document.getElementsByName(elementId)[0];

    if (!element) {
      console.warn("Anchor target not found:", href);
      return;
    }

    const header = document.querySelector("header");
    const offset = header ? header.offsetHeight + 8 : 8;
    const yPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top: yPosition, behavior: "smooth" });
  };

  return (
    <a
      href={href}
      target={target}
      draggable={false}
      onClick={handleClick}
      className={cn(
        "select-none underline transition-colors",
        variant === "default" &&
          cn(
            "text-cyan-300 hover:text-cyan-200",
            "outline-none rounded-sm focus-visible:ring-2 focus-visible:ring-cyan-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
          ),
        variant === "purple" &&
          cn(
            "text-purple-300 hover:text-purple-200",
            "outline-none rounded-sm focus-visible:ring-2 focus-visible:ring-purple-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
          ),
        variant === "accent" &&
          cn(
            "text-cyan-400 font-semibold hover:text-cyan-300",
            "outline-none rounded-sm focus-visible:ring-2 focus-visible:ring-cyan-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
          ),
        className
      )}
    >
      {children}
    </a>
  );
}
