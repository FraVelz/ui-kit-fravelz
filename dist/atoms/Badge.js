/**
 * Badge Component
 * A flexible badge/chip component following the design guide
 */
import React from "react";
import { cn } from "../lib/cn";
export default function Badge(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "cyan" : _ref$variant,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "md" : _ref$size,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? null : _ref$icon;
  return /*#__PURE__*/React.createElement("div", {
    className: cn("flex items-center gap-2 max-w-fit rounded-full transition-all", size === "sm" && "text-xs px-2 py-1", size === "md" && "text-sm px-3 py-1.5", size === "lg" && "text-base px-4 py-2", variant === "cyan" && cn("text-cyan-300 bg-gray-900 border border-cyan-500/40", "hover:border-cyan-400/60 hover:bg-gray-800"), variant === "purple" && cn("text-purple-300 bg-gray-900 border border-purple-500/40", "hover:border-purple-400/60 hover:bg-gray-800"), variant === "success" && cn("text-cyan-300 bg-cyan-500/10 border border-cyan-500/40", "hover:border-cyan-400/60"), variant === "highlight" && cn("text-white bg-gradient-to-r from-cyan-600/20 to-purple-600/20", "border border-cyan-500/40 hover:border-cyan-400/60"), className)
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "text-cyan-400"
  }, icon), /*#__PURE__*/React.createElement("span", null, children));
}