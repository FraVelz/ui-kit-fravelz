/**
 * Grid Component
 * A flexible grid layout component
 */
import React from 'react';
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
  var gapSizes = {
    sm: "gap-3",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8"
  };
  var colsClasses = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    6: "grid-cols-6"
  };
  var responsiveClasses = responsive ? "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : colsClasses[cols] || colsClasses[3];
  return /*#__PURE__*/ /*#__PURE__*/React.createElement("div", {
    className: "\n                grid\n                ".concat(responsive ? "grid-cols-1 " + responsiveClasses : colsClasses[cols] || colsClasses[3], "\n                ").concat(gapSizes[gap], "\n                ").concat(className, "\n            ")
  }, children);
}