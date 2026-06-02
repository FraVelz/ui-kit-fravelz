/**
 * Alert Component
 * An alert component for displaying messages with design guide styling
 */
import React from 'react';
export default function Alert(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? "info" : _ref$type,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? null : _ref$title,
    _ref$dismissible = _ref.dismissible,
    dismissible = _ref$dismissible === void 0 ? false : _ref$dismissible,
    _ref$onDismiss = _ref.onDismiss,
    onDismiss = _ref$onDismiss === void 0 ? null : _ref$onDismiss;
  var typeStyles = {
    info: "\n            bg-cyan-500/10\n            border border-cyan-500/30\n            text-cyan-300\n            hover:border-cyan-500/60\n        ",
    success: "\n            bg-cyan-500/10\n            border border-cyan-500/30\n            text-cyan-300\n            hover:border-cyan-500/60\n        ",
    warning: "\n            bg-purple-500/10\n            border border-purple-500/30\n            text-purple-300\n            hover:border-purple-500/60\n        ",
    error: "\n            bg-purple-500/10\n            border border-purple-500/30\n            text-purple-300\n            hover:border-purple-500/60\n        "
  };
  var icons = {
    info: "ℹ️",
    success: "✓",
    warning: "⚠️",
    error: "✕"
  };
  return /*#__PURE__*/<div className={"\n                ".concat(typeStyles[type], "\n                p-4 rounded-lg\n                transition-all\n                ").concat(className, "\n            ")}>{/*#__PURE__*/<div className={"flex items-start gap-3"}>{/*#__PURE__*/<span className={"text-xl mt-0.5"}>{icons[type]}</span>}{/*#__PURE__*/<div className={"flex-1"}>{title && /*#__PURE__*/<h4 className={"font-semibold mb-1"}>{title}</h4>}{/*#__PURE__*/<p className={"text-sm"}>{children}</p>}</div>}{dismissible && /*#__PURE__*/<button onClick={onDismiss} className={" text-lg hover:opacity-75 transition-opacity cursor-pointer "}>✕</button>}</div>}</div>;
}