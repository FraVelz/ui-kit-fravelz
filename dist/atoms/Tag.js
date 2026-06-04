import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../lib/cn";
import { IconClose } from "../lib/icons";
export default function Tag({ children, className = "", variant = "cyan", removable = false, onRemove, interactive = false, }) {
    return (_jsxs("span", { role: interactive ? "button" : undefined, tabIndex: interactive ? 0 : undefined, className: cn("inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all", interactive &&
            cn("cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-offset-2", "focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950", variant === "purple"
                ? "focus-visible:ring-purple-400/80"
                : "focus-visible:ring-cyan-400/80"), variant === "cyan" &&
            cn("bg-cyan-500/15 text-cyan-800 border border-cyan-500/40 hover:border-cyan-500/60", "dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-500/30 dark:hover:border-cyan-400/60"), variant === "purple" &&
            cn("bg-purple-500/15 text-purple-800 border border-purple-500/40 hover:border-purple-500/60", "dark:bg-purple-500/10 dark:text-purple-300 dark:border-purple-500/30 dark:hover:border-purple-400/60"), variant === "gray" &&
            cn("bg-gray-100 text-gray-700 border border-gray-300 hover:border-gray-400", "dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 dark:hover:border-gray-600"), variant === "gradient" &&
            cn("bg-gradient-to-r from-cyan-500/15 to-purple-500/15 text-cyan-800", "border border-cyan-500/40 hover:border-cyan-500/60", "dark:from-cyan-500/10 dark:to-purple-500/10 dark:text-cyan-300", "dark:border-cyan-500/30 dark:hover:border-cyan-400/60"), className), children: [children, removable && (_jsx("button", { type: "button", onClick: onRemove, "aria-label": "Remove tag", className: cn("ml-1 hover:opacity-75 transition-opacity cursor-pointer p-0.5 rounded-full", "outline-none focus-visible:ring-2 focus-visible:ring-offset-2", "focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950", variant === "purple"
                    ? "focus-visible:ring-purple-400/80"
                    : "focus-visible:ring-cyan-400/80"), children: _jsx(IconClose, {}) }))] }));
}
