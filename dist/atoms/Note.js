/**
 * Note Component
 * A reusable component for displaying notes or secondary text
 */
import React from "react";
import { cn } from "../lib/cn";
export default function Note(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$id = _ref.id,
    id = _ref$id === void 0 ? "" : _ref$id;
  return /*#__PURE__*/React.createElement("p", {
    className: cn("text-gray-500 select-auto text-lg py-2", className),
    id: id
  }, children);
}