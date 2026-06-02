/**
 * Line Component
 * A horizontal line divider element with design guide styling
 */
import React from 'react';
function Line(_ref) {
  var _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "default" : _ref$variant,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className;
  var variants = {
    "default": "border-gray-700",
    cyan: "border-cyan-500/30",
    purple: "border-purple-500/30",
    subtle: "border-gray-700/50"
  };
  return /*#__PURE__*/ /*#__PURE__*/React.createElement("hr", {
    className: "".concat(variants[variant], " my-6 ").concat(className)
  });
}
export default Line;