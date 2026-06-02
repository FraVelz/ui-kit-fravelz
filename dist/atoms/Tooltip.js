function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
/**
 * Tooltip Component
 * A tooltip component for displaying helpful information on hover
 */
import React, { useState } from "react";
export default function Tooltip(_ref) {
  var children = _ref.children,
    content = _ref.content,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? "top" : _ref$position,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "default" : _ref$variant;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isVisible = _useState2[0],
    setIsVisible = _useState2[1];
  var positionClasses = {
    top: "bottom-full mb-2",
    bottom: "top-full mt-2",
    left: "right-full mr-2",
    right: "left-full ml-2"
  };
  var variants = {
    "default": "\n            bg-gray-800\n            border border-cyan-500/40\n            text-cyan-300\n        ",
    dark: "\n            bg-gray-900\n            border border-gray-700\n            text-gray-200\n        ",
    highlight: "\n            bg-gradient-to-r from-cyan-600/20 to-purple-600/20\n            border border-cyan-500/40\n            text-cyan-300\n        "
  };
  return /*#__PURE__*/ /*#__PURE__*/React.createElement("div", {
    className: "relative inline-block",
    onMouseEnter: function onMouseEnter() {
      return setIsVisible(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsVisible(false);
    }
  }, children, isVisible &&
  /*#__PURE__*/
  /*#__PURE__*/
  React.createElement("div", {
    className: "\n                        absolute\n                        ".concat(positionClasses[position], "\n                        left-1/2 transform -translate-x-1/2\n                        px-3 py-2 rounded-lg\n                        text-sm whitespace-nowrap\n                        pointer-events-none\n                        z-50\n                        animation-fadeIn\n                        ").concat(variants[variant], "\n                        ").concat(className, "\n                    ")
  }, content,
  /*#__PURE__*/
  /*#__PURE__*/
  React.createElement("div", {
    className: "\n                            absolute\n                            w-2 h-2\n                            bg-gray-800\n                            border-b border-r border-cyan-500/40\n                            transform rotate-45\n                            ".concat(position === "top" ? "bottom-0 translate-y-1/2" : "", "\n                            ").concat(position === "bottom" ? "top-0 -translate-y-1/2" : "", "\n                        ")
  })));
}