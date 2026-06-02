/**
 * Title Component
 * A flexible heading component supporting h1, h2, h3 tags with gradient styles following the design guide
 */
import React from "react";
function Title(_ref) {
  var headingLevel = _ref.headingLevel,
    children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$id = _ref.id,
    id = _ref$id === void 0 ? "" : _ref$id,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "gradient" : _ref$variant;
  var gradientClass = variant === "gradient" ? "bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent" : "";
  if (headingLevel === "h1") {
    if (id) {
      return /*#__PURE__*/ /*#__PURE__*/React.createElement("h1", {
        id: id,
        className: "text-4xl font-bold mb-4 ".concat(gradientClass, " ").concat(className)
      }, children);
    }
    return /*#__PURE__*/ /*#__PURE__*/React.createElement("h1", {
      className: "text-4xl font-bold mb-4 ".concat(gradientClass, " ").concat(className)
    }, children);
  } else if (headingLevel === "h2") {
    if (id) {
      return /*#__PURE__*/ /*#__PURE__*/React.createElement("h2", {
        id: id,
        className: "text-3xl font-semibold mb-3 mt-5 ".concat(gradientClass, " ").concat(className)
      }, children);
    }
    return /*#__PURE__*/ /*#__PURE__*/React.createElement("h2", {
      className: "text-3xl font-semibold mb-3 mt-5 ".concat(gradientClass, " ").concat(className)
    }, children);
  } else if (headingLevel === "h3") {
    if (id) {
      return /*#__PURE__*/ /*#__PURE__*/React.createElement("h3", {
        id: id,
        className: "text-2xl font-medium mb-2 mt-4 ".concat(gradientClass, " ").concat(className)
      }, children);
    }
    return /*#__PURE__*/ /*#__PURE__*/React.createElement("h3", {
      className: "text-2xl font-medium mb-2 mt-4 ".concat(gradientClass, " ").concat(className)
    }, children);
  } else {
    return /*#__PURE__*/ /*#__PURE__*/React.createElement(React.Fragment, null, children);
  }
}
export default Title;