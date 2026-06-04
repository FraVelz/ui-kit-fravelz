import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../lib/cn";
export default function SegmentedControl({ value, onChange, options, "aria-label": ariaLabel, className = "", }) {
    return (_jsx("fieldset", { "aria-label": ariaLabel, className: cn("inline-flex min-w-0 items-center rounded-md border border-gray-300 p-0.5 dark:border-gray-700", "m-0 border-solid", className), children: options.map((option) => (_jsx("button", { type: "button", onClick: () => onChange(option.value), "aria-pressed": value === option.value, className: cn("rounded px-2 py-1 font-mono text-xs transition-colors", "outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80", value === option.value
                ? "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300"
                : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"), children: option.label }, option.value))) }));
}
