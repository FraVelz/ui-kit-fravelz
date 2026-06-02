/**
 * Badge Component
 * A flexible badge/chip component following the design guide
 */
import React from 'react';
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
  var sizes = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
    lg: "text-base px-4 py-2"
  };
  var variants = {
    cyan: "\n            flex items-center gap-2\n            text-cyan-300\n            max-w-fit\n            bg-gray-900 \n            rounded-full\n            border border-cyan-500/40\n            hover:border-cyan-400/60\n            hover:bg-gray-800\n            transition-all\n        ",
    purple: "\n            flex items-center gap-2\n            text-purple-300\n            max-w-fit\n            bg-gray-900 \n            rounded-full\n            border border-purple-500/40\n            hover:border-purple-400/60\n            hover:bg-gray-800\n            transition-all\n        ",
    success: "\n            flex items-center gap-2\n            text-cyan-300\n            max-w-fit\n            bg-cyan-500/10\n            rounded-full\n            border border-cyan-500/40\n            hover:border-cyan-400/60\n            transition-all\n        ",
    highlight: "\n            flex items-center gap-2\n            text-white\n            max-w-fit\n            bg-gradient-to-r from-cyan-600/20 to-purple-600/20\n            rounded-full\n            border border-cyan-500/40\n            hover:border-cyan-400/60\n            transition-all\n        "
  };
  return /*#__PURE__*/<div className={"\n                ".concat(sizes[size], "\n                ").concat(variants[variant], "\n                ").concat(className, "\n            ")}>{icon && /*#__PURE__*/<span className={"text-cyan-400"}>{icon}</span>}{/*#__PURE__*/<span>{children}</span>}</div>;
}