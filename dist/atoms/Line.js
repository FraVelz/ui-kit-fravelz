/**
 * Line Component
 * A horizontal line divider element with design guide styling
 */
import React from "react";
import { cn } from "../lib/cn";
export default function Line(_ref) {
  var _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "default" : _ref$variant,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className;
  return /*#__PURE__*/React.createElement("hr", {
    className: cn("my-6", variant === "default" && "border-gray-700", variant === "cyan" && "border-cyan-500/30", variant === "purple" && "border-purple-500/30", variant === "subtle" && "border-gray-700/50", className)
  });
}