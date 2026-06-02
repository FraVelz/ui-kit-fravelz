function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * Tooltip Component
 * A tooltip component for displaying helpful information on hover
 */
import React, { useState } from "react";
import { cn } from "../lib/cn";
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
  return /*#__PURE__*/React.createElement("div", {
    className: "relative inline-block",
    onMouseEnter: function onMouseEnter() {
      return setIsVisible(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsVisible(false);
    }
  }, children, isVisible && /*#__PURE__*/React.createElement("div", {
    className: cn("absolute left-1/2 transform -translate-x-1/2", "px-3 py-2 rounded-lg text-sm whitespace-nowrap", "pointer-events-none z-50 animation-fadeIn", position === "top" && "bottom-full mb-2", position === "bottom" && "top-full mt-2", position === "left" && "right-full mr-2", position === "right" && "left-full ml-2", variant === "default" && cn("bg-gray-800 border border-cyan-500/40 text-cyan-300"), variant === "dark" && cn("bg-gray-900 border border-gray-700 text-gray-200"), variant === "highlight" && cn("bg-gradient-to-r from-cyan-600/20 to-purple-600/20", "border border-cyan-500/40 text-cyan-300"), className)
  }, content, /*#__PURE__*/React.createElement("div", {
    className: cn("absolute w-2 h-2 bg-gray-800 border-b border-r border-cyan-500/40 transform rotate-45", position === "top" && "bottom-0 translate-y-1/2", position === "bottom" && "top-0 -translate-y-1/2")
  })));
}