import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../lib/cn";
export default function Badge({ children, className = "", variant = "cyan", size = "md", icon = null, }) {
    return (_jsxs("div", { className: cn("flex items-center gap-2 max-w-fit rounded-full transition-all", size === "sm" && "text-xs px-2 py-1", size === "md" && "text-sm px-3 py-1.5", size === "lg" && "text-base px-4 py-2", variant === "cyan" &&
            cn("text-cyan-300 bg-gray-900 border border-cyan-500/40", "hover:border-cyan-400/60 hover:bg-gray-800"), variant === "purple" &&
            cn("text-purple-300 bg-gray-900 border border-purple-500/40", "hover:border-purple-400/60 hover:bg-gray-800"), variant === "success" &&
            cn("text-cyan-300 bg-cyan-500/10 border border-cyan-500/40", "hover:border-cyan-400/60"), variant === "highlight" &&
            cn("text-white bg-gradient-to-r from-cyan-600/20 to-purple-600/20", "border border-cyan-500/40 hover:border-cyan-400/60"), className), children: [icon && _jsx("span", { className: "text-cyan-400", children: icon }), _jsx("span", { children: children })] }));
}
