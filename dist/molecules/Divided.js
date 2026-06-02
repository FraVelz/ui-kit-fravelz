/**
 * Divided Component
 * A two-column layout component with flexible content arrangement
 */
import React from 'react';
function Divided(_ref) {
  var secondaryContent = _ref.secondaryContent,
    children = _ref.children,
    _ref$hasBorder = _ref.hasBorder,
    hasBorder = _ref$hasBorder === void 0 ? false : _ref$hasBorder;
  return /*#__PURE__*/ /*#__PURE__*/React.createElement("div", {
    className: "\n                px-3\n                flex flex-col lg:flex-row\n                justify-center items-center\n                rounded-2xl\n                ".concat(hasBorder ? "border-2 border-gray-400" : "border-0", "\n            ")
  },
  /*#__PURE__*/
  /*#__PURE__*/
  React.createElement("div", {
    className: " bg-gray-900 rounded-2xl break-words p-4 "
  }, children),
  /*#__PURE__*/
  /*#__PURE__*/
  React.createElement("div", {
    className: "flex justify-center items-center lg:w-96"
  }, secondaryContent));
}
export default Divided;