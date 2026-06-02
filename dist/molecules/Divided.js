/**
 * Divided Component
 * A two-column layout component with flexible content arrangement
 */
import React from "react";
import { cn } from "../lib/cn";
export default function Divided(_ref) {
  var secondaryContent = _ref.secondaryContent,
    children = _ref.children,
    _ref$hasBorder = _ref.hasBorder,
    hasBorder = _ref$hasBorder === void 0 ? false : _ref$hasBorder;
  return /*#__PURE__*/React.createElement("div", {
    className: cn("px-3 flex flex-col lg:flex-row justify-center items-center rounded-2xl", hasBorder ? "border-2 border-gray-400" : "border-0")
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-gray-900 rounded-2xl break-words p-4"
  }, children), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center items-center lg:w-96"
  }, secondaryContent));
}