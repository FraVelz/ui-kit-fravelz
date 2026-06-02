var _excluded = ["placeholder", "className", "variant", "size", "icon", "label", "error", "disabled"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
/**
 * Input Component
 * A flexible input field component with design guide styling
 */
import React from "react";
import { cn } from "../lib/cn";
export default function Input(_ref) {
  var _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "Enter text..." : _ref$placeholder,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "default" : _ref$variant,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "md" : _ref$size,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? null : _ref$icon,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? null : _ref$label,
    _ref$error = _ref.error,
    error = _ref$error === void 0 ? null : _ref$error,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("div", {
    className: "w-full"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-semibold text-cyan-300 mb-2"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    placeholder: placeholder,
    disabled: disabled,
    className: cn("w-full rounded-lg outline-none transition-all", size === "sm" && "px-3 py-1.5 text-sm", size === "md" && "px-4 py-2 text-base", size === "lg" && "px-5 py-3 text-lg", variant === "default" && cn("bg-gray-800 border border-cyan-500/30 text-white placeholder-gray-500", "focus:border-cyan-400/60 focus:shadow-lg focus:shadow-cyan-500/10"), variant === "purple" && cn("bg-gray-800 border border-purple-500/30 text-white placeholder-gray-500", "focus:border-purple-400/60 focus:shadow-lg focus:shadow-purple-500/10"), variant === "minimal" && cn("bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-500", "focus:border-cyan-400"), icon && "pl-10", error && "border-purple-500/60", disabled && "opacity-50 cursor-not-allowed", className)
  }, props))), error && /*#__PURE__*/React.createElement("p", {
    className: "text-purple-400 text-xs mt-1.5"
  }, error));
}