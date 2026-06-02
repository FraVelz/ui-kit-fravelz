/**
 * Text Component
 * A reusable paragraph component with customizable text selection behavior and variants
 */
import React from "react";
function Text(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$selectability = _ref.selectability,
    selectability = _ref$selectability === void 0 ? "auto" : _ref$selectability,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "default" : _ref$variant,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "base" : _ref$size;
  var sizeClasses = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl"
  };
  var variantClasses = {
    "default": "text-gray-300",
    secondary: "text-gray-400",
    muted: "text-gray-500",
    accent: "text-cyan-300",
    highlight: "text-purple-300"
  };
  return /*#__PURE__*/ /*#__PURE__*/React.createElement("p", {
    className: "\n                select-".concat(selectability, "\n                ").concat(sizeClasses[size], "\n                ").concat(variantClasses[variant], "\n                ").concat(className, "\n                py-2\n            ")
  }, children);
}
export default Text;