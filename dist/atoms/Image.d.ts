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
export default function Image({ source, alternateText, width, height, className, }: ImageProps): import("react").JSX.Element;
//# sourceMappingURL=Image.d.ts.map