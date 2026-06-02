/**
 * GradientText Component
 * A flexible text component with gradient effects following the design guide
 */
import React from 'react';
export default function GradientText(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "cyan-purple" : _ref$variant,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? "span" : _ref$as;
  var variants = {
    "cyan-purple": "bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent",
    "purple-cyan": "bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent",
    "cyan-only": "bg-linear-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent",
    "purple-only": "bg-linear-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent",
    "blue-cyan": "bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
  };
  var Component = as;
  return /*#__PURE__*/<Component className={"\n                font-bold\n                ".concat(variants[variant], "\n                ").concat(className, "\n            ")}>{children}</Component>;
}