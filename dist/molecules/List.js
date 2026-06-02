/**
 * List Component
 * A flexible list component supporting both ordered and unordered lists
 */
import React from "react";
import { cn } from "../lib/cn";
export default function List(_ref) {
  var children = _ref.children,
    _ref$listType = _ref.listType,
    listType = _ref$listType === void 0 ? "ul" : _ref$listType,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className;
  if (listType === "ol") {
    return /*#__PURE__*/React.createElement("ol", {
      className: cn("list-inside flex flex-col gap-2 p-1 my-2 list-decimal text-lg text-gray-300 pl-6", className)
    }, children);
  }
  return /*#__PURE__*/React.createElement("ul", {
    className: cn("list-inside flex flex-col gap-2 p-1 list-disc my-2 text-lg text-gray-300 pl-6", className)
  }, children);
}