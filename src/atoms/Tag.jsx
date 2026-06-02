/**
 * Tag Component
 * A flexible tag/pill component for labeling and categorization
 */
import React from "react";
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
  var variants = {
    cyan: "\n            bg-cyan-500/10\n            text-cyan-300\n            border border-cyan-500/30\n            hover:border-cyan-400/60\n        ",
    purple:
      "\n            bg-purple-500/10\n            text-purple-300\n            border border-purple-500/30\n            hover:border-purple-400/60\n        ",
    gray: "\n            bg-gray-800\n            text-gray-300\n            border border-gray-700\n            hover:border-gray-600\n        ",
    gradient:
      "\n            bg-gradient-to-r from-cyan-500/10 to-purple-500/10\n            text-cyan-300\n            border border-cyan-500/30\n            hover:border-cyan-400/60\n        ",
  };
  var baseClasses =
    "\n        inline-flex items-center gap-2\n        px-3 py-1.5 rounded-full\n        text-sm font-medium\n        transition-all\n        ".concat(
      interactive ? "cursor-pointer" : "",
      "\n    "
    );
  return (
    /*#__PURE__*/ <span
      className={"\n                "
        .concat(baseClasses, "\n                ")
        .concat(variants[variant], "\n                ")
        .concat(className, "\n            ")}
    >
      {children}
      {removable && (
        /*#__PURE__*/ <button
          onClick={onRemove}
          className={" ml-1 hover:opacity-75 transition-opacity cursor-pointer text-xs font-bold "}
        >
          ✕
        </button>
      )}
    </span>
  );
}
