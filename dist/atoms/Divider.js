import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../lib/cn";
const dividerBorder = (variant) => cn(variant === "default" && "border-gray-200 dark:border-gray-700", variant === "cyan" && "border-cyan-500/40 hover:border-cyan-500/60 dark:border-cyan-500/30", variant === "purple" &&
    "border-purple-500/40 hover:border-purple-500/60 dark:border-purple-500/30", variant === "dotted" && "border-dashed border-gray-300 dark:border-gray-600", variant === "gradient" && "border-gradient-to-r from-transparent via-cyan-500/30 to-transparent");
export default function Divider({ className = "", variant = "default", orientation = "horizontal", label = null, size = "md", }) {
    if (orientation === "vertical") {
        return (_jsx("div", { className: cn("h-12 border-l-2 transition-colors", dividerBorder(variant), className) }));
    }
    return (_jsxs("div", { className: cn("w-full flex items-center gap-3", size === "sm" && "my-3", size === "md" && "my-6", size === "lg" && "my-12", className), children: [_jsx("hr", { className: cn("flex-1 border-2 transition-colors", dividerBorder(variant)) }), label && (_jsxs(_Fragment, { children: [_jsx("span", { className: "text-gray-500 text-sm whitespace-nowrap dark:text-gray-400", children: label }), _jsx("hr", { className: cn("flex-1 border-2 transition-colors", dividerBorder(variant)) })] }))] }));
}
