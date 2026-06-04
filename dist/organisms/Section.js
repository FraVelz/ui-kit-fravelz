import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../lib/cn";
export default function Section({ children, className = "", title = null, subtitle = null, variant = "default", id = null, }) {
    return (_jsxs("section", { id: id ?? undefined, className: cn("py-12 px-4 transition-all", variant === "default" && cn("bg-gray-900/50 border-t border-b border-cyan-500/20"), variant === "highlighted" &&
            cn("bg-gradient-to-br from-cyan-900/10 via-gray-900 to-purple-900/10", "border border-cyan-500/30 rounded-lg"), variant === "minimal" && "bg-transparent", variant === "elevated" &&
            cn("bg-gradient-to-br from-gray-800 to-gray-900", "border border-purple-500/20 rounded-lg shadow-lg shadow-purple-500/5"), className), children: [title && (_jsxs("div", { className: "mb-8", children: [_jsx("h2", { className: cn("text-4xl font-bold mb-3", "bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"), children: title }), subtitle && _jsx("p", { className: "text-gray-400 text-lg", children: subtitle })] })), _jsx("div", { className: "max-w-4xl mx-auto", children: children })] }));
}
