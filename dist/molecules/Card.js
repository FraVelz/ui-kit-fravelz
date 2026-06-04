import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../lib/cn";
export default function Card({ children, className = "", title = null, subtitle = null, variant = "default", hoverable = true, }) {
    return (_jsxs("div", { className: cn("p-6 rounded-lg transition-all", variant === "default" &&
            cn("bg-white border border-cyan-500/30 shadow-sm", "dark:bg-gray-900 dark:shadow-none", hoverable &&
                "hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 dark:hover:border-cyan-400/60"), variant === "elevated" &&
            cn("bg-gradient-to-br from-gray-50 to-white border border-purple-500/30", "dark:from-gray-800 dark:to-gray-900", hoverable &&
                "hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 dark:hover:border-purple-400/60"), variant === "gradient" &&
            cn("bg-gradient-to-br from-cyan-50/80 via-white to-purple-50/80", "border border-cyan-500/30", "dark:from-cyan-900/20 dark:via-gray-900 dark:to-purple-900/20", hoverable &&
                "hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 dark:hover:border-cyan-400/60"), variant === "minimal" &&
            cn("bg-gray-50/90 border border-gray-200/80", "dark:bg-gray-950/50 dark:border-gray-700/50", hoverable && "hover:border-gray-300 dark:hover:border-gray-600/50 transition-colors"), className), children: [title && (_jsxs(_Fragment, { children: [_jsx("h3", { className: "text-lg font-semibold text-cyan-700 mb-2 dark:text-cyan-300", children: title }), subtitle && _jsx("p", { className: "text-gray-600 text-sm mb-4 dark:text-gray-400", children: subtitle })] })), _jsx("div", { className: "text-gray-700 dark:text-gray-300", children: children })] }));
}
