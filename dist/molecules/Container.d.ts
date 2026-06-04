/**
 * Container Component
 * A flexible container component for layout and spacing
 */
import type { ReactNode } from "react";
import type { ContainerSize, ContainerVariant } from "../types";
export interface ContainerProps {
    children: ReactNode;
    className?: string;
    variant?: ContainerVariant;
    size?: ContainerSize;
}
export default function Container({ children, className, variant, size, }: ContainerProps): import("react").JSX.Element;
//# sourceMappingURL=Container.d.ts.map