import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../lib/cn";
export default function Line({ variant = "default", className = "" }) {
    return (_jsx("hr", { className: cn("my-6", variant === "default" && "border-gray-700", variant === "cyan" && "border-cyan-500/30", variant === "purple" && "border-purple-500/30", variant === "subtle" && "border-gray-700/50", className) }));
}
