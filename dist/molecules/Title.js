/**
 * Title Component
 * A flexible heading component supporting h1, h2, h3 tags with gradient styles
 */
import React from "react";
import { cn } from "../lib/cn";
export default function Title(_ref) {
  var headingLevel = _ref.headingLevel,
    children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$id = _ref.id,
    id = _ref$id === void 0 ? "" : _ref$id,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "gradient" : _ref$variant;
  if (headingLevel === "h1") {
    return /*#__PURE__*/React.createElement("h1", {
      id: id || undefined,
      className: cn("text-4xl font-bold mb-4", variant === "gradient" && "bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent", className)
    }, children);
  }
  if (headingLevel === "h2") {
    return /*#__PURE__*/React.createElement("h2", {
      id: id || undefined,
      className: cn("text-3xl font-semibold mb-3 mt-5", variant === "gradient" && "bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent", className)
    }, children);
  }
  if (headingLevel === "h3") {
    return /*#__PURE__*/React.createElement("h3", {
      id: id || undefined,
      className: cn("text-2xl font-medium mb-2 mt-4", variant === "gradient" && "bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent", className)
    }, children);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, children);
}