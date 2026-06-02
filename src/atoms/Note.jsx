/**
 * Note Component
 * A reusable component for displaying notes or secondary text
 */
import React from 'react';
function Note(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$id = _ref.id,
    id = _ref$id === void 0 ? "" : _ref$id;
  return /*#__PURE__*/<p className={"\n                text-gray-500\n                select-auto\n                text-lg\n                py-2\n                ".concat(className, "\n            ")} id={id}>{children}</p>;
}
export default Note;