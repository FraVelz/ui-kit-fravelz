import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Message Component
 * A modal message component using React portals with design guide styling
 */
import { createPortal } from "react-dom";
import { cn } from "../lib/cn";
export default function Message({ children, onClose, title, variant = "default" }) {
    return createPortal(_jsx("div", { className: cn("fixed inset-0 z-50 flex cursor-default items-center justify-center p-4", "bg-black/60 backdrop-blur-sm"), children: _jsxs("div", { className: cn("rounded-xl border-2 hover:border-cyan-400/60 lg:w-2/4 md:w-3/4 p-6", "shadow-2xl shadow-cyan-500/10 text-center transition-all", "bg-white dark:bg-gray-900", (variant === "default" || variant === "success") && "border-cyan-500/30", (variant === "warning" || variant === "error") && "border-purple-500/30"), children: [title && (_jsx("h2", { className: cn("text-2xl font-bold mb-4", "bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"), children: title })), _jsx("div", { className: "max-w-screen p-4 text-gray-700 dark:text-gray-300", children: children }), _jsx("button", { type: "button", onClick: onClose, className: cn("mt-6 cursor-pointer px-6 py-2 rounded-full transition-all font-semibold text-white", "bg-gradient-to-r from-cyan-600 to-purple-600", "hover:from-cyan-500 hover:to-purple-500", "shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50", "outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80", "focus-visible:ring-offset-2 focus-visible:ring-offset-white", "dark:focus-visible:ring-offset-gray-950"), children: "Close" })] }) }), document.body);
}
