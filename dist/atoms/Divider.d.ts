/**
 * Divider Component
 * A flexible divider component with multiple variants
 */
import type { ReactNode } from "react";
import type { DividerOrientation, DividerVariant, SizeSmMdLg } from "../types";
export interface DividerProps {
    className?: string;
    variant?: DividerVariant;
    orientation?: DividerOrientation;
    label?: ReactNode | null;
    size?: SizeSmMdLg;
}
export default function Divider({ className, variant, orientation, label, size, }: DividerProps): import("react").JSX.Element;
//# sourceMappingURL=Divider.d.ts.map