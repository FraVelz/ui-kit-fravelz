import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../lib/cn";
export function Table({ children, className = "" }) {
    return (_jsx("div", { className: cn("m-4 h-fit overflow-x-auto rounded-lg border border-cyan-500/30", "hover:border-cyan-400/60 transition-colors", className), children: _jsx("table", { className: "w-full text-left border-collapse bg-gray-900", children: children }) }));
}
export function TableHeader({ headers = [] }) {
    return (_jsx("thead", { className: "bg-gray-800 text-cyan-300 uppercase text-xs font-semibold border-b border-cyan-500/30", children: _jsx("tr", { children: headers.map((header, index) => (_jsx("th", { className: "px-4 py-4", children: header }, index))) }) }));
}
export function TableRow({ children, enableHover = true }) {
    return (_jsx("tr", { className: cn("border-b border-gray-700/50 text-gray-300", enableHover && "hover:bg-gray-800/50 transition-colors"), children: children }));
}
export function TableCell({ children, alignment = "left" }) {
    return (_jsx("td", { className: cn("px-4 py-3 text-sm", alignment === "left" && "text-left", alignment === "center" && "text-center", alignment === "right" && "text-right"), children: children }));
}
export default function ExampleTable() {
    const tableHeaders = ["Name", "Email", "Role", "Status"];
    const tableData = [
        { name: "Carlos Pérez", email: "carlos@example.com", role: "Admin", status: "Active" },
        { name: "Laura Gómez", email: "laura@example.com", role: "Editor", status: "Inactive" },
    ];
    return (_jsxs(Table, { className: "max-w-4xl mx-auto", children: [_jsx(TableHeader, { headers: tableHeaders }), _jsx("tbody", { children: tableData.map((user, index) => (_jsxs(TableRow, { children: [_jsx(TableCell, { children: user.name }), _jsx(TableCell, { children: user.email }), _jsx(TableCell, { children: user.role }), _jsx(TableCell, { children: _jsx("span", { className: cn("px-3 py-1 rounded-full text-xs font-semibold", user.status === "Active" &&
                                    "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40", user.status !== "Active" &&
                                    "bg-gray-700/40 text-gray-400 border border-gray-600/40"), children: user.status }) })] }, index))) })] }));
}
