/**
 * Text Component
 * A reusable paragraph component with customizable text selection behavior and variants
 */
import React from "react";
import { cn } from "../lib/cn";
export default function Text(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$selectability = _ref.selectability,
    selectability = _ref$selectability === void 0 ? "auto" : _ref$selectability,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "default" : _ref$variant,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "base" : _ref$size;
  return /*#__PURE__*/React.createElement("p", {
    className: cn("py-2", selectability === "auto" && "select-auto", selectability === "none" && "select-none", selectability === "text" && "select-text", selectability === "all" && "select-all", size === "sm" && "text-sm", size === "base" && "text-base", size === "lg" && "text-lg", size === "xl" && "text-xl", variant === "default" && "text-gray-300", variant === "secondary" && "text-gray-400", variant === "muted" && "text-gray-500", variant === "accent" && "text-cyan-300", variant === "highlight" && "text-purple-300", className)
  }, children);
}