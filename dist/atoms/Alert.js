import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../lib/cn";
import { alertIcons, IconClose } from "../lib/icons";
export default function Alert({ children, className = "", type = "info", title = null, dismissible = false, onDismiss, }) {
    const TypeIcon = alertIcons[type];
    return (_jsx("div", { className: cn("p-4 rounded-lg transition-all", (type === "info" || type === "success") &&
            cn("bg-cyan-50 border border-cyan-500/40 text-cyan-900 hover:border-cyan-500/70", "dark:bg-cyan-500/10 dark:border-cyan-500/30 dark:text-cyan-300 dark:hover:border-cyan-500/60"), (type === "warning" || type === "error") &&
            cn("bg-purple-50 border border-purple-500/40 text-purple-900 hover:border-purple-500/70", "dark:bg-purple-500/10 dark:border-purple-500/30 dark:text-purple-300 dark:hover:border-purple-500/60"), className), children: _jsxs("div", { className: "flex items-start gap-3", children: [_jsx(TypeIcon, { className: "mt-0.5" }), _jsxs("div", { className: "flex-1", children: [title && _jsx("h4", { className: "font-semibold mb-1", children: title }), _jsx("p", { className: "text-sm", children: children })] }), dismissible && (_jsx("button", { type: "button", onClick: onDismiss, "aria-label": "Dismiss alert", className: cn("hover:opacity-75 transition-opacity cursor-pointer p-0.5 rounded-md", "outline-none focus-visible:ring-2 focus-visible:ring-offset-2", "focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950", type === "warning" || type === "error"
                        ? "focus-visible:ring-purple-400/80"
                        : "focus-visible:ring-cyan-400/80"), children: _jsx(IconClose, {}) }))] }) }));
}
