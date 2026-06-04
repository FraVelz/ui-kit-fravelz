/**
 * Text Component
 * A reusable paragraph component with customizable text selection behavior and variants
 */
import type { ReactNode } from "react";
import type { TextSelectability, TextSize, TextVariant } from "../types";
export interface TextProps {
    children: ReactNode;
    className?: string;
    selectability?: TextSelectability;
    variant?: TextVariant;
    size?: TextSize;
}
export default function Text({ children, className, selectability, variant, size, }: TextProps): import("react").JSX.Element;
//# sourceMappingURL=Text.d.ts.map