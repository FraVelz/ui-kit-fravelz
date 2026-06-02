/**
 * Image Component
 * A reusable image component with automatic height calculation
 */
import React from "react";

export default function Image({ source, alternateText, width = 100, height = 0, className = "" }) {
  const displayHeight = height === 0 ? width : height;

  return (
    <img
      src={source}
      alt={alternateText}
      width={width}
      height={displayHeight}
      draggable={false}
      className={className}
    />
  );
}
