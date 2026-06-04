import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../lib/cn";
const EMPTY_HEADERS = [];
const EXAMPLE_TABLE_HEADERS = ["Name", "Email", "Role", "Status"];
const EXAMPLE_TABLE_DATA = [
    { name: "Carlos Pérez", email: "carlos@example.com", role: "Admin", status: "Active" },
    { name: "Laura Gómez", email: "laura@example.com", role: "Editor", status: "Inactive" },
];
export function Table({ children, className = "" }) {
    return (_jsx("div", { className: cn("m-4 h-fit overflow-x-auto rounded-lg border border-cyan-500/40 shadow-sm", "hover:border-cyan-500/60 transition-colors", "dark:border-cyan-500/30 dark:shadow-none dark:hover:border-cyan-400/60", className), children: _jsx("table", { className: "w-full text-left border-collapse bg-white dark:bg-gray-900", children: children }) }));
}
export function TableHeader({ headers = EMPTY_HEADERS }) {
    return (_jsx("thead", { className: cn("bg-gray-100 text-xs font-semibold uppercase text-cyan-800", "border-b border-cyan-500/40 dark:bg-gray-800 dark:text-cyan-300 dark:border-cyan-500/30"), children: _jsx("tr", { children: headers.map((header) => (_jsx("th", { className: "px-4 py-4", children: header }, header))) }) }));
}
export function TableRow({ children, enableHover = true }) {
    return (_jsx("tr", { className: cn("border-b border-gray-200/80 text-gray-700 dark:border-gray-700/50 dark:text-gray-300", enableHover && "hover:bg-gray-50 transition-colors dark:hover:bg-gray-800/50"), children: children }));
}
export function TableCell({ children, alignment = "left" }) {
    return (_jsx("td", { className: cn("px-4 py-3 text-sm", alignment === "left" && "text-left", alignment === "center" && "text-center", alignment === "right" && "text-right"), children: children }));
}
export default function ExampleTable() {
    return (_jsxs(Table, { className: "max-w-6xl mx-auto", children: [_jsx(TableHeader, { headers: EXAMPLE_TABLE_HEADERS }), _jsx("tbody", { children: EXAMPLE_TABLE_DATA.map((user) => (_jsxs(TableRow, { children: [_jsx(TableCell, { children: user.name }), _jsx(TableCell, { children: user.email }), _jsx(TableCell, { children: user.role }), _jsx(TableCell, { children: _jsx("span", { className: cn("px-3 py-1 rounded-full text-xs font-semibold", user.status === "Active" &&
                                    cn("border border-cyan-500/50 bg-cyan-500/15 text-cyan-800", "dark:border-cyan-500/40 dark:bg-cyan-500/20 dark:text-cyan-300"), user.status !== "Active" &&
                                    cn("border border-gray-300 bg-gray-100 text-gray-600", "dark:border-gray-600/40 dark:bg-gray-700/40 dark:text-gray-400")), children: user.status }) })] }, user.email))) })] }));
}
