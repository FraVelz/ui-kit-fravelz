/**
 * Card Component
 * A flexible card component for containing content with design guide styling
 */
import React from 'react';
export default function Card(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? null : _ref$title,
    _ref$subtitle = _ref.subtitle,
    subtitle = _ref$subtitle === void 0 ? null : _ref$subtitle,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "default" : _ref$variant,
    _ref$hoverable = _ref.hoverable,
    hoverable = _ref$hoverable === void 0 ? true : _ref$hoverable;
  var variants = {
    "default": "\n            bg-gray-900 \n            border border-cyan-500/30\n            ".concat(hoverable ? "hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/10" : "", "\n        "),
    elevated: "\n            bg-gradient-to-br from-gray-800 to-gray-900\n            border border-purple-500/30\n            ".concat(hoverable ? "hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/10" : "", "\n        "),
    gradient: "\n            bg-gradient-to-br from-cyan-900/20 via-gray-900 to-purple-900/20\n            border border-cyan-500/30\n            ".concat(hoverable ? "hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/10" : "", "\n        "),
    minimal: "\n            bg-gray-950/50\n            border border-gray-700/50\n            ".concat(hoverable ? "hover:border-gray-600/50 transition-colors" : "", "\n        ")
  };
  return /*#__PURE__*/ /*#__PURE__*/React.createElement("div", {
    className: "\n                ".concat(variants[variant], "\n                p-6\n                rounded-lg\n                transition-all\n                ").concat(className, "\n            ")
  }, title &&
  /*#__PURE__*/
  /*#__PURE__*/
  React.createElement(React.Fragment, null,
  /*#__PURE__*/
  /*#__PURE__*/
  React.createElement("h3", {
    className: " text-lg font-semibold text-cyan-300 mb-2 "
  }, title), subtitle &&
  /*#__PURE__*/
  /*#__PURE__*/
  React.createElement("p", {
    className: "text-gray-400 text-sm mb-4"
  }, subtitle)),
  /*#__PURE__*/
  /*#__PURE__*/
  React.createElement("div", {
    className: "text-gray-300"
  }, children));
}