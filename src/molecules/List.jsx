/**
 * List Component
 * A flexible list component supporting both ordered and unordered lists
 */
import React from 'react';
export default function List(_ref) {
  var children = _ref.children,
    _ref$listType = _ref.listType,
    listType = _ref$listType === void 0 ? "ul" : _ref$listType,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className;
  if (listType === "ol") {
    return /*#__PURE__*/<ol className={"\n                    list-inside flex flex-col gap-2\n                    p-1 my-2 list-decimal\n                    text-lg text-gray-300 pl-6\n                    ".concat(className, "\n                ")}>{children}</ol>;
  }
  if (listType === "ul") {
    return /*#__PURE__*/<ul className={"\n                    list-inside flex flex-col gap-2\n                    p-1 list-disc my-2\n                    text-lg text-gray-300 pl-6\n                    ".concat(className, "\n                ")}>{children}</ul>;
  }
}