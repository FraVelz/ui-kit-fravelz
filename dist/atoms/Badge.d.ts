/**
 * Badge Component
 * A flexible badge/chip component following the design guide
 */
import type { ReactNode } from "react";
import type { BadgeVariant, SizeSmMdLg } from "../types";
export interface BadgeProps {
    children: ReactNode;
    className?: string;
    variant?: BadgeVariant;
    size?: SizeSmMdLg;
    icon?: ReactNode | null;
}
export default function Badge({ children, className, variant, size, icon, }: BadgeProps): import("react").JSX.Element;
//# sourceMappingURL=Badge.d.ts.map