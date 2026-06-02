/**
 * ProgressBar Component
 * A progress bar component for showing progress with design guide styling
 */
import React from "react";
import { cn } from "../lib/cn";
export default function ProgressBar(_ref) {
  var _ref$value = _ref.value,
    value = _ref$value === void 0 ? 0 : _ref$value,
    _ref$max = _ref.max,
    max = _ref$max === void 0 ? 100 : _ref$max,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "cyan" : _ref$variant,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "md" : _ref$size,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? null : _ref$label,
    _ref$showPercentage = _ref.showPercentage,
    showPercentage = _ref$showPercentage === void 0 ? true : _ref$showPercentage,
    _ref$animated = _ref.animated,
    animated = _ref$animated === void 0 ? true : _ref$animated;
  var percentage = Math.min(value / max * 100, 100);
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, (label || showPercentage) && /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center mb-2"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-semibold text-cyan-300"
  }, label), showPercentage && /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-400"
  }, Math.round(percentage), "%")), /*#__PURE__*/React.createElement("div", {
    className: cn("w-full bg-gray-800 rounded-full overflow-hidden border border-gray-700 transition-all", size === "sm" && "h-2", size === "md" && "h-3", size === "lg" && "h-4", size === "xl" && "h-6")
  }, /*#__PURE__*/React.createElement("div", {
    className: cn("rounded-full transition-all duration-500", size === "sm" && "h-2", size === "md" && "h-3", size === "lg" && "h-4", size === "xl" && "h-6", variant === "cyan" && "bg-gradient-to-r from-cyan-600 to-cyan-500", variant === "purple" && "bg-gradient-to-r from-purple-600 to-purple-500", variant === "gradient" && "bg-gradient-to-r from-cyan-600 to-purple-600", variant === "success" && "bg-cyan-600", animated && "ease-out"),
    style: {
      width: "".concat(percentage, "%")
    }
  })));
}