/**
 * Image Component
 * A reusable image component with automatic height calculation
 */
import React from 'react';
function Image(_ref) {
  var source = _ref.source,
    alternateText = _ref.alternateText,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 100 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 0 : _ref$height,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className;
  var displayHeight = height === 0 ? width : height;
  return /*#__PURE__*/<img src={source} alt={alternateText} width={width} height={displayHeight} draggable={"false"} className={className} />;
}
export default Image;