/**
 * Message Component
 * A modal message component using React portals with design guide styling
 */
import React from "react";
import { createPortal } from "react-dom";
import { cn } from "../lib/cn";
export default function Message(_ref) {
  var children = _ref.children,
    onClose = _ref.onClose,
    title = _ref.title,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "default" : _ref$variant;
  return /*#__PURE__*/createPortal(/*#__PURE__*/React.createElement("div", {
    className: "bg-black/60 backdrop-blur-sm cursor-default z-50 fixed inset-0 flex items-center justify-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: cn("rounded-xl border-2 hover:border-cyan-400/60 lg:w-2/4 md:w-3/4 p-6", "shadow-2xl shadow-cyan-500/10 text-center transition-all bg-gray-900", (variant === "default" || variant === "success") && "border-cyan-500/30", (variant === "warning" || variant === "error") && "border-purple-500/30")
  }, title && /*#__PURE__*/React.createElement("h2", {
    className: cn("text-2xl font-bold mb-4", "bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent")
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "max-w-screen p-4 text-gray-300"
  }, children), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    className: cn("mt-6 cursor-pointer px-6 py-2 rounded-full transition-all font-semibold text-white", "bg-gradient-to-r from-cyan-600 to-purple-600", "hover:from-cyan-500 hover:to-purple-500", "shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50")
  }, "Close"))), document.body);
}