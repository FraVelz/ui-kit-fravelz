import type { ReactNode } from "react";
import type { GradientTextAs, GradientTextVariant } from "../types";
export interface GradientTextProps {
    children: ReactNode;
    className?: string;
    variant?: GradientTextVariant;
    as?: GradientTextAs;
}
export default function GradientText({ children, className, variant, as: Tag, }: GradientTextProps): import("react").DetailedReactHTMLElement<{
    className: string;
}, HTMLElement>;
//# sourceMappingURL=GradientText.d.ts.map