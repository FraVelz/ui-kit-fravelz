/**
 * CallToAction Component
 * A prominent call-to-action component with design guide styling
 */
import React from "react";
import { cn } from "../lib/cn";
export default function CallToAction(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$href = _ref.href,
    href = _ref$href === void 0 ? "#" : _ref$href,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? null : _ref$icon,
    _ref$target = _ref.target,
    target = _ref$target === void 0 ? "_self" : _ref$target,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "primary" : _ref$variant;
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    target: target,
    draggable: false,
    className: cn("inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all text-lg", variant === "primary" && cn("bg-gradient-to-r from-cyan-600 to-purple-600 text-white", "hover:from-cyan-500 hover:to-purple-500", "shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"), variant === "secondary" && cn("bg-gray-900 border-2 border-cyan-500/40 text-cyan-300", "hover:border-cyan-400/60 hover:text-cyan-200"), variant === "outline" && cn("bg-transparent border-2 border-purple-500/40 text-purple-300", "hover:border-purple-400/60 hover:text-purple-200"), variant === "ghost" && "text-cyan-300 hover:text-cyan-200 hover:bg-cyan-500/10", className)
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "inline-flex shrink-0",
    "aria-hidden": true
  }, icon), children);
}