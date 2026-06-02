/**
 * Section Component
 * A semantic section component for organizing content
 */
import React from "react";
import { cn } from "../lib/cn";
export default function Section(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? null : _ref$title,
    _ref$subtitle = _ref.subtitle,
    subtitle = _ref$subtitle === void 0 ? null : _ref$subtitle,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "default" : _ref$variant,
    _ref$id = _ref.id,
    id = _ref$id === void 0 ? null : _ref$id;
  return /*#__PURE__*/React.createElement("section", {
    id: id !== null && id !== void 0 ? id : undefined,
    className: cn("py-12 px-4 transition-all", variant === "default" && cn("bg-gray-900/50 border-t border-b border-cyan-500/20"), variant === "highlighted" && cn("bg-gradient-to-br from-cyan-900/10 via-gray-900 to-purple-900/10", "border border-cyan-500/30 rounded-lg"), variant === "minimal" && "bg-transparent", variant === "elevated" && cn("bg-gradient-to-br from-gray-800 to-gray-900", "border border-purple-500/20 rounded-lg shadow-lg shadow-purple-500/5"), className)
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "mb-8"
  }, /*#__PURE__*/React.createElement("h2", {
    className: cn("text-4xl font-bold mb-3", "bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent")
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 text-lg"
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    className: "max-w-4xl mx-auto"
  }, children));
}