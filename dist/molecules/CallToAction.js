import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../lib/cn";
import { focusForVariant } from "../lib/focus";
export default function CallToAction({ children, className = "", href = "#", icon = null, target = "_self", variant = "primary", }) {
    return (_jsxs("a", { href: href, target: target, draggable: false, className: cn("inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all text-lg", focusForVariant(variant), variant === "primary" &&
            cn("bg-gradient-to-r from-cyan-600 to-purple-600 text-white", "hover:from-cyan-500 hover:to-purple-500", "shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"), variant === "secondary" &&
            cn("bg-gray-900 border-2 border-cyan-500/40 text-cyan-300", "hover:border-cyan-400/60 hover:text-cyan-200"), variant === "outline" &&
            cn("bg-transparent border-2 border-purple-500/40 text-purple-300", "hover:border-purple-400/60 hover:text-purple-200"), variant === "ghost" && "text-cyan-300 hover:text-cyan-200 hover:bg-cyan-500/10", className), children: [icon && (_jsx("span", { className: "inline-flex shrink-0", "aria-hidden": true, children: icon })), children] }));
}
