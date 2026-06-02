/**
 * CallToAction Component
 * A prominent call-to-action component with design guide styling
 */
import React from "react";
export default function CallToAction(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$href = _ref.href,
    href = _ref$href === void 0 ? "#" : _ref$href,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? null : _ref$icon,
    _ref$target = _ref.target,
    target = _ref$target === void 0 ? "_self" : _ref$target,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "primary" : _ref$variant;
  var variants = {
    primary: "\n            inline-flex items-center gap-3\n            px-6 py-3 rounded-full\n            bg-gradient-to-r from-cyan-600 to-purple-600 text-white\n            hover:from-cyan-500 hover:to-purple-500\n            shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50\n            font-semibold\n            transition-all\n            text-lg\n        ",
    secondary: "\n            inline-flex items-center gap-3\n            px-6 py-3 rounded-full\n            bg-gray-900\n            border-2 border-cyan-500/40\n            text-cyan-300\n            hover:border-cyan-400/60 hover:text-cyan-200\n            font-semibold\n            transition-all\n            text-lg\n        ",
    outline: "\n            inline-flex items-center gap-3\n            px-6 py-3 rounded-full\n            bg-transparent\n            border-2 border-purple-500/40\n            text-purple-300\n            hover:border-purple-400/60 hover:text-purple-200\n            font-semibold\n            transition-all\n            text-lg\n        ",
    ghost: "\n            inline-flex items-center gap-3\n            px-6 py-3 rounded-full\n            text-cyan-300\n            hover:text-cyan-200\n            hover:bg-cyan-500/10\n            font-semibold\n            transition-all\n            text-lg\n        "
  };
  return /*#__PURE__*/ /*#__PURE__*/React.createElement("a", {
    href: href,
    target: target,
    draggable: "false",
    className: "\n                ".concat(variants[variant], "\n                ").concat(className, "\n            ")
  }, icon &&
  /*#__PURE__*/
  /*#__PURE__*/
  React.createElement("span", null, icon), children);
}