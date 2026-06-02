/**
 * Grid Component
 * A flexible grid layout component
 */
import React from "react";
import { cn } from "../lib/cn";
export default function Grid(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$cols = _ref.cols,
    cols = _ref$cols === void 0 ? 3 : _ref$cols,
    _ref$gap = _ref.gap,
    gap = _ref$gap === void 0 ? "md" : _ref$gap,
    _ref$responsive = _ref.responsive,
    responsive = _ref$responsive === void 0 ? true : _ref$responsive;
  return /*#__PURE__*/React.createElement("div", {
    className: cn("grid", responsive && "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4", !responsive && cols === 1 && "grid-cols-1", !responsive && cols === 2 && "grid-cols-2", !responsive && cols === 3 && "grid-cols-3", !responsive && cols === 4 && "grid-cols-4", !responsive && cols === 6 && "grid-cols-6", !responsive && ![1, 2, 3, 4, 6].includes(cols) && "grid-cols-3", gap === "sm" && "gap-3", gap === "md" && "gap-4", gap === "lg" && "gap-6", gap === "xl" && "gap-8", className)
  }, children);
}