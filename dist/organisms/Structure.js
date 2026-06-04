import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../lib/cn";
export default function Structure({ children, className = "" }) {
    return (_jsx("div", { className: cn("bg-white border border-gray-200/80 rounded-2xl h-fit min-w-2/4 hyphens-auto break-words p-4 shadow-sm", "dark:bg-gray-900 dark:border-transparent dark:shadow-none", className), children: children }));
}
