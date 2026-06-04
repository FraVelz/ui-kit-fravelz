/**
 * Table Component
 * A collection of components for building responsive tables with design guide styling
 */
import type { ReactNode } from "react";
import type { TableCellAlignment } from "../types";
export interface TableProps {
    children: ReactNode;
    className?: string;
}
export declare function Table({ children, className }: TableProps): import("react").JSX.Element;
export interface TableHeaderProps {
    headers?: string[];
}
export declare function TableHeader({ headers }: TableHeaderProps): import("react").JSX.Element;
export interface TableRowProps {
    children: ReactNode;
    enableHover?: boolean;
}
export declare function TableRow({ children, enableHover }: TableRowProps): import("react").JSX.Element;
export interface TableCellProps {
    children: ReactNode;
    alignment?: TableCellAlignment;
}
export declare function TableCell({ children, alignment }: TableCellProps): import("react").JSX.Element;
export default function ExampleTable(): import("react").JSX.Element;
//# sourceMappingURL=Table.d.ts.map