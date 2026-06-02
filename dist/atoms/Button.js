/**
 * Button Component
 * A reusable button component with multiple variants following the design guide
 */
import React from "react";
export default function Button(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "primary" : _ref$variant,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "md" : _ref$size;
  var sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  };
  var variants = {
    primary: "\n            bg-gradient-to-r from-cyan-600 to-purple-600 text-white\n            hover:from-cyan-500 hover:to-purple-500\n            shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50\n            font-semibold\n        ",
    secondary: "\n            bg-gray-900\n            border border-cyan-500/40\n            text-cyan-300\n            hover:border-cyan-400/60 hover:text-cyan-200\n        ",
    outline: "\n            border border-purple-500/40\n            text-purple-300\n            hover:border-purple-400/60 hover:text-purple-200\n        ",
    ghost: "\n            text-cyan-300\n            hover:text-cyan-200\n            hover:bg-cyan-500/10\n        "
  };
  return /*#__PURE__*/ /*#__PURE__*/React.createElement("button", {
    className: "\n                rounded-full\n                cursor-pointer\n                transition-all\n                duration-300\n                ".concat(sizes[size], "\n                ").concat(variants[variant], "\n                ").concat(className, "\n            ")
  }, children);
}