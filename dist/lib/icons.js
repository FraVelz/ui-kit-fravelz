var _excluded = ["className", "children", "viewBox"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["className"],
  _excluded5 = ["className"],
  _excluded6 = ["className"],
  _excluded7 = ["className"],
  _excluded8 = ["className"],
  _excluded9 = ["className"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
/**
 * Inline SVG icons for UI Kit components (no emoji / font glyphs).
 */
import React from "react";
import { cn } from "./cn";
function Svg(_ref) {
  var className = _ref.className,
    children = _ref.children,
    _ref$viewBox = _ref.viewBox,
    viewBox = _ref$viewBox === void 0 ? "0 0 24 24" : _ref$viewBox,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: cn("inline-block shrink-0 size-5", className),
    viewBox: viewBox,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, props), children);
}
export function IconInfo(_ref2) {
  var className = _ref2.className,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/React.createElement(Svg, _extends({
    className: className
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 16v-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8h.01"
  }));
}
export function IconSuccess(_ref3) {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded3);
  return /*#__PURE__*/React.createElement(Svg, _extends({
    className: className
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 4 12 14.01l-3-3"
  }));
}
export function IconWarning(_ref4) {
  var className = _ref4.className,
    props = _objectWithoutProperties(_ref4, _excluded4);
  return /*#__PURE__*/React.createElement(Svg, _extends({
    className: className
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 17h.01"
  }));
}
export function IconError(_ref5) {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded5);
  return /*#__PURE__*/React.createElement(Svg, _extends({
    className: className
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m15 9-6 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 9 6 6"
  }));
}
export function IconClose(_ref6) {
  var className = _ref6.className,
    props = _objectWithoutProperties(_ref6, _excluded6);
  return /*#__PURE__*/React.createElement(Svg, _extends({
    className: cn("size-4", className)
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12"
  }));
}
export function IconCheck(_ref7) {
  var className = _ref7.className,
    props = _objectWithoutProperties(_ref7, _excluded7);
  return /*#__PURE__*/React.createElement(Svg, _extends({
    className: cn("size-4", className)
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }));
}
export function IconCopy(_ref8) {
  var className = _ref8.className,
    props = _objectWithoutProperties(_ref8, _excluded8);
  return /*#__PURE__*/React.createElement(Svg, _extends({
    className: cn("size-4", className)
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: "14",
    height: "14",
    x: "8",
    y: "8",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
  }));
}
export function IconArrowRight(_ref9) {
  var className = _ref9.className,
    props = _objectWithoutProperties(_ref9, _excluded9);
  return /*#__PURE__*/React.createElement(Svg, _extends({
    className: className
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12 5 7 7-7 7"
  }));
}
export var alertIcons = {
  info: IconInfo,
  success: IconSuccess,
  warning: IconWarning,
  error: IconError
};