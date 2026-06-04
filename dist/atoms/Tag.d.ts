/**
 * Tag Component
 * A flexible tag/pill component for labeling and categorization
 */
import type { ReactNode } from "react";
import type { TagVariant } from "../types";
export interface TagProps {
    children: ReactNode;
    className?: string;
    variant?: TagVariant;
    removable?: boolean;
    onRemove?: () => void;
    interactive?: boolean;
}
export default function Tag({ children, className, variant, removable, onRemove, interactive, }: TagProps): import("react").JSX.Element;
//# sourceMappingURL=Tag.d.ts.map