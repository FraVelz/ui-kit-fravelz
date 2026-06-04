/**
 * Title Component
 * A flexible heading component supporting h1, h2, h3 tags with gradient styles
 */
import type { ReactNode } from "react";
import type { TitleHeadingLevel, TitleVariant } from "../types";
export interface TitleProps {
    headingLevel: TitleHeadingLevel;
    children: ReactNode;
    className?: string;
    id?: string;
    variant?: TitleVariant;
}
export default function Title({ headingLevel, children, className, id, variant, }: TitleProps): import("react").JSX.Element;
//# sourceMappingURL=Title.d.ts.map