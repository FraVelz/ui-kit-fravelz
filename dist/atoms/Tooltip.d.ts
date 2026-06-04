import type { ReactNode } from "react";
import type { TooltipPosition, TooltipVariant } from "../types";
export interface TooltipProps {
    children: ReactNode;
    content: ReactNode;
    className?: string;
    position?: TooltipPosition;
    variant?: TooltipVariant;
}
export default function Tooltip({ children, content, className, position, variant, }: TooltipProps): import("react").JSX.Element;
//# sourceMappingURL=Tooltip.d.ts.map