/**
 * Tag Component
 * A flexible tag/pill component for labeling and categorization
 */
import React from "react";
import { cn } from "../lib/cn";
export default function Tag(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "cyan" : _ref$variant,
    _ref$removable = _ref.removable,
    removable = _ref$removable === void 0 ? false : _ref$removable,
    _ref$onRemove = _ref.onRemove,
    onRemove = _ref$onRemove === void 0 ? null : _ref$onRemove,
    _ref$interactive = _ref.interactive,
    interactive = _ref$interactive === void 0 ? false : _ref$interactive;
  return /*#__PURE__*/React.createElement("span", {
    className: cn("inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all", interactive && "cursor-pointer", variant === "cyan" && cn("bg-cyan-500/10 text-cyan-300 border border-cyan-500/30", "hover:border-cyan-400/60"), variant === "purple" && cn("bg-purple-500/10 text-purple-300 border border-purple-500/30", "hover:border-purple-400/60"), variant === "gray" && cn("bg-gray-800 text-gray-300 border border-gray-700", "hover:border-gray-600"), variant === "gradient" && cn("bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-300", "border border-cyan-500/30 hover:border-cyan-400/60"), className)
  }, children, removable && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onRemove,
    className: "ml-1 hover:opacity-75 transition-opacity cursor-pointer text-xs font-bold"
  }, "\u2715"));
}