/**
 * Table Component
 * A collection of components for building responsive tables with design guide styling
 */
import React from "react";
import { cn } from "../lib/cn";

export function Table({ children, className = "" }) {
  return (
    <div
      className={cn(
        "m-4 h-fit overflow-x-auto rounded-lg border border-cyan-500/30",
        "hover:border-cyan-400/60 transition-colors",
        className
      )}
    >
      <table className="w-full text-left border-collapse bg-gray-900">{children}</table>
    </div>
  );
}

export function TableHeader({ headers = [] }) {
  return (
    <thead className="bg-gray-800 text-cyan-300 uppercase text-xs font-semibold border-b border-cyan-500/30">
      <tr>
        {headers.map((header, index) => (
          <th key={index} className="px-4 py-4">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export function TableRow({ children, enableHover = true }) {
  return (
    <tr
      className={cn(
        "border-b border-gray-700/50 text-gray-300",
        enableHover && "hover:bg-gray-800/50 transition-colors"
      )}
    >
      {children}
    </tr>
  );
}

export function TableCell({ children, alignment = "left" }) {
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
  const tableHeaders = ["Name", "Email", "Role", "Status"];
  const tableData = [
    { name: "Carlos Pérez", email: "carlos@example.com", role: "Admin", status: "Active" },
    { name: "Laura Gómez", email: "laura@example.com", role: "Editor", status: "Inactive" },
  ];

  return (
    <Table className="max-w-4xl mx-auto">
      <TableHeader headers={tableHeaders} />
      <tbody>
        {tableData.map((user, index) => (
          <TableRow key={index}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>
              <span
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-semibold",
                  user.status === "Active" &&
                    "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40",
                  user.status !== "Active" &&
                    "bg-gray-700/40 text-gray-400 border border-gray-600/40"
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
