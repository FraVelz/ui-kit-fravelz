/**
 * List Component
 * A flexible list component supporting both ordered and unordered lists
 */
import type { ReactNode } from "react";
import type { ListType } from "../types";
export interface ListProps {
    children: ReactNode;
    listType?: ListType;
    className?: string;
}
export default function List({ children, listType, className }: ListProps): import("react").JSX.Element;
//# sourceMappingURL=List.d.ts.map