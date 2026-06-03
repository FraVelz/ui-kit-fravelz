import { cn } from "./cn";

const ringBase = "outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950";

/** Primary / gradient controls */
export const focusGradient = cn(ringBase, "focus-visible:ring-cyan-400/80");

/** Cyan-accent interactive elements */
export const focusCyan = cn(ringBase, "focus-visible:ring-cyan-400/80");

/** Purple-accent interactive elements */
export const focusPurple = cn(ringBase, "focus-visible:ring-purple-400/80");

/** Text links and nav items */
export const focusLinkCyan = cn(
  "outline-none rounded-sm",
  "focus-visible:ring-2 focus-visible:ring-cyan-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
);

export const focusLinkPurple = cn(
  "outline-none rounded-sm",
  "focus-visible:ring-2 focus-visible:ring-purple-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
);

/** Map component variant names to focus ring styles */
export function focusForVariant(variant) {
  if (variant === "outline" || variant === "purple") {
    return focusPurple;
  }
  if (variant === "primary") {
    return focusGradient;
  }
  return focusCyan;
}

export function focusForTagVariant(variant) {
  if (variant === "purple") {
    return focusPurple;
  }
  return focusCyan;
}

export function focusForAlertType(type) {
  if (type === "warning" || type === "error") {
    return focusPurple;
  }
  return focusCyan;
}
