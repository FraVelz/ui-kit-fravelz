/**
 * Grid Component
 * A flexible grid layout component
 */
import type { ReactNode } from "react";
import type { GridCols, GridGap } from "../types";
export interface GridProps {
    children: ReactNode;
    className?: string;
    cols?: GridCols;
    gap?: GridGap;
    responsive?: boolean;
}
export default function Grid({ children, className, cols, gap, responsive, }: GridProps): import("react").JSX.Element;
//# sourceMappingURL=Grid.d.ts.map