/**
 * Alert Component
 * An alert component for displaying messages with design guide styling
 */
import React from "react";
import { cn } from "../lib/cn";
var ALERT_ICONS = {
  info: "ℹ️",
  success: "✓",
  warning: "⚠️",
  error: "✕"
};
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
  return /*#__PURE__*/React.createElement("div", {
    className: cn("p-4 rounded-lg transition-all", (type === "info" || type === "success") && cn("bg-cyan-500/10 border border-cyan-500/30 text-cyan-300", "hover:border-cyan-500/60"), (type === "warning" || type === "error") && cn("bg-purple-500/10 border border-purple-500/30 text-purple-300", "hover:border-purple-500/60"), className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xl mt-0.5"
  }, ALERT_ICONS[type]), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, title && /*#__PURE__*/React.createElement("h4", {
    className: "font-semibold mb-1"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "text-sm"
  }, children)), dismissible && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onDismiss,
    className: "text-lg hover:opacity-75 transition-opacity cursor-pointer"
  }, "\u2715")));
}