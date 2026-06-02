/**
 * Divider Component
 * A flexible divider component with multiple variants
 */
import React from "react";
import { cn } from "../lib/cn";
export default function Divider(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "default" : _ref$variant,
    _ref$orientation = _ref.orientation,
    orientation = _ref$orientation === void 0 ? "horizontal" : _ref$orientation,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? null : _ref$label,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "md" : _ref$size;
  if (orientation === "vertical") {
    return /*#__PURE__*/React.createElement("div", {
      className: cn("h-12 border-l-2 transition-colors", variant === "default" && "border-gray-700", variant === "cyan" && "border-cyan-500/30 hover:border-cyan-500/60", variant === "purple" && "border-purple-500/30 hover:border-purple-500/60", variant === "dotted" && "border-dashed border-gray-600", variant === "gradient" && "border-gradient-to-r from-transparent via-cyan-500/30 to-transparent", className)
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: cn("w-full flex items-center gap-3", size === "sm" && "my-3", size === "md" && "my-6", size === "lg" && "my-12", className)
  }, /*#__PURE__*/React.createElement("hr", {
    className: cn("flex-1 border-2 transition-colors", variant === "default" && "border-gray-700", variant === "cyan" && "border-cyan-500/30 hover:border-cyan-500/60", variant === "purple" && "border-purple-500/30 hover:border-purple-500/60", variant === "dotted" && "border-dashed border-gray-600", variant === "gradient" && "border-gradient-to-r from-transparent via-cyan-500/30 to-transparent")
  }), label && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "text-gray-500 text-sm whitespace-nowrap"
  }, label), /*#__PURE__*/React.createElement("hr", {
    className: cn("flex-1 border-2 transition-colors", variant === "default" && "border-gray-700", variant === "cyan" && "border-cyan-500/30 hover:border-cyan-500/60", variant === "purple" && "border-purple-500/30 hover:border-purple-500/60", variant === "dotted" && "border-dashed border-gray-600", variant === "gradient" && "border-gradient-to-r from-transparent via-cyan-500/30 to-transparent")
  })));
}