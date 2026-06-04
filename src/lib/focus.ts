import type { AlertType, ButtonVariant, TagVariant } from "../types";
import { cn } from "./cn";

const ringBase =
  "outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950";

export const focusGradient = cn(ringBase, "focus-visible:ring-cyan-400/80");
export const focusCyan = cn(ringBase, "focus-visible:ring-cyan-400/80");
export const focusPurple = cn(ringBase, "focus-visible:ring-purple-400/80");

export const focusLinkCyan = cn(
  "outline-none rounded-sm",
  "focus-visible:ring-2 focus-visible:ring-cyan-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
);

export const focusLinkPurple = cn(
  "outline-none rounded-sm",
  "focus-visible:ring-2 focus-visible:ring-purple-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
);

export function focusForVariant(variant: ButtonVariant) {
  if (variant === "outline") {
    return focusPurple;
  }
  if (variant === "primary") {
    return focusGradient;
  }
  return focusCyan;
}

export function focusForTagVariant(variant: TagVariant) {
  if (variant === "purple") {
    return focusPurple;
  }
  return focusCyan;
}

export function focusForAlertType(type: AlertType) {
  if (type === "warning" || type === "error") {
    return focusPurple;
  }
  return focusCyan;
}
