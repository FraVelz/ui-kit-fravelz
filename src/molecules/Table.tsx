/**
 * Table Component
 * A collection of components for building responsive tables with design guide styling
 */
import type { ReactNode } from "react";
import type { TableCellAlignment } from "../types";
import { cn } from "../lib/cn";

const EMPTY_HEADERS: string[] = [];

const EXAMPLE_TABLE_HEADERS = ["Name", "Email", "Role", "Status"];

const EXAMPLE_TABLE_DATA = [
  { name: "Carlos Pérez", email: "carlos@example.com", role: "Admin", status: "Active" },
  { name: "Laura Gómez", email: "laura@example.com", role: "Editor", status: "Inactive" },
];

export interface TableProps {
  children: ReactNode;
  className?: string;
}

export function Table({ children, className = "" }: TableProps) {
  return (
    <div
      className={cn(
        "m-4 h-fit overflow-x-auto rounded-lg border border-cyan-500/40 shadow-sm",
        "hover:border-cyan-500/60 transition-colors",
        "dark:border-cyan-500/30 dark:shadow-none dark:hover:border-cyan-400/60",
        className
      )}
    >
      <table className="w-full text-left border-collapse bg-white dark:bg-gray-900">
        {children}
      </table>
    </div>
  );
}

export interface TableHeaderProps {
  headers?: string[];
}

export function TableHeader({ headers = EMPTY_HEADERS }: TableHeaderProps) {
  return (
    <thead
      className={cn(
        "bg-gray-100 text-xs font-semibold uppercase text-cyan-800",
        "border-b border-cyan-500/40 dark:bg-gray-800 dark:text-cyan-300 dark:border-cyan-500/30"
      )}
    >
      <tr>
        {headers.map((header) => (
          <th key={header} className="px-4 py-4">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export interface TableRowProps {
  children: ReactNode;
  enableHover?: boolean;
}

export function TableRow({ children, enableHover = true }: TableRowProps) {
  return (
    <tr
      className={cn(
        "border-b border-gray-200/80 text-gray-700 dark:border-gray-700/50 dark:text-gray-300",
        enableHover && "hover:bg-gray-50 transition-colors dark:hover:bg-gray-800/50"
      )}
    >
      {children}
    </tr>
  );
}

export interface TableCellProps {
  children: ReactNode;
  alignment?: TableCellAlignment;
}

export function TableCell({ children, alignment = "left" }: TableCellProps) {
  return (
    <td
      className={cn(
        "px-4 py-3 text-sm",
        alignment === "left" && "text-left",
        alignment === "center" && "text-center",
        alignment === "right" && "text-right"
      )}
    >
      {children}
    </td>
  );
}

export default function ExampleTable() {
  return (
    <Table className="max-w-6xl mx-auto">
      <TableHeader headers={EXAMPLE_TABLE_HEADERS} />
      <tbody>
        {EXAMPLE_TABLE_DATA.map((user) => (
          <TableRow key={user.email}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>
              <span
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-semibold",
                  user.status === "Active" &&
                    cn(
                      "border border-cyan-500/50 bg-cyan-500/15 text-cyan-800",
                      "dark:border-cyan-500/40 dark:bg-cyan-500/20 dark:text-cyan-300"
                    ),
                  user.status !== "Active" &&
                    cn(
                      "border border-gray-300 bg-gray-100 text-gray-600",
                      "dark:border-gray-600/40 dark:bg-gray-700/40 dark:text-gray-400"
                    )
                )}
              >
                {user.status}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
}
