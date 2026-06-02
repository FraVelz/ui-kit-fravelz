/**
 * Container Component
 * A flexible container component for layout and spacing
 */
import React from "react";
export default function Container(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "default" : _ref$variant,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "md" : _ref$size;
  var sizes = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "w-full",
  };
  var variants = {
    default: "px-4 py-8",
    compact: "px-2 py-4",
    relaxed: "px-6 py-12",
    section: "px-4 py-16",
  };
  return (
    /*#__PURE__*/ <div
      className={"\n                mx-auto\n                "
        .concat(sizes[size], "\n                ")
        .concat(variants[variant], "\n                ")
        .concat(className, "\n            ")}
    >
      {children}
    </div>
  );
}
