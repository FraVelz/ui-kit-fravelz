import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../lib/cn";
import { IconClose } from "../lib/icons";
export default function Tag({ children, className = "", variant = "cyan", removable = false, onRemove, interactive = false, }) {
    return (_jsxs("span", { role: interactive ? "button" : undefined, tabIndex: interactive ? 0 : undefined, className: cn("inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all", interactive &&
            cn("cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950", variant === "purple"
                ? "focus-visible:ring-purple-400/80"
                : "focus-visible:ring-cyan-400/80"), variant === "cyan" &&
            cn("bg-cyan-500/10 text-cyan-300 border border-cyan-500/30", "hover:border-cyan-400/60"), variant === "purple" &&
            cn("bg-purple-500/10 text-purple-300 border border-purple-500/30", "hover:border-purple-400/60"), variant === "gray" &&
            cn("bg-gray-800 text-gray-300 border border-gray-700", "hover:border-gray-600"), variant === "gradient" &&
            cn("bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-300", "border border-cyan-500/30 hover:border-cyan-400/60"), className), children: [children, removable && (_jsx("button", { type: "button", onClick: onRemove, "aria-label": "Remove tag", className: cn("ml-1 hover:opacity-75 transition-opacity cursor-pointer p-0.5 rounded-full", "outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950", variant === "purple"
                    ? "focus-visible:ring-purple-400/80"
                    : "focus-visible:ring-cyan-400/80"), children: _jsx(IconClose, {}) }))] }));
}
