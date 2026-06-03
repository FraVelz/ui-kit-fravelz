/**
 * Link Component
 * A custom link component with smooth scrolling for in-page anchors and design guide styling
 */
import React from "react";
import { cn } from "../lib/cn";
import { focusLinkCyan, focusLinkPurple } from "../lib/focus";

export default function Link({ href, children, target = "_self", className, variant = "default" }) {
  const handleClick = (event) => {
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
        variant === "default" && cn("text-cyan-300 hover:text-cyan-200", focusLinkCyan),
        variant === "purple" && cn("text-purple-300 hover:text-purple-200", focusLinkPurple),
        variant === "accent" && cn("text-cyan-400 font-semibold hover:text-cyan-300", focusLinkCyan),
        className
      )}
    >
      {children}
    </a>
  );
}
