/**
 * Image Component
 * A reusable image component with automatic height calculation
 */

export interface ImageProps {
  source: string;
  alternateText: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function Image({
  source,
  alternateText,
  width = 100,
  height = 0,
  className = "",
}: ImageProps) {
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
