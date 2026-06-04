import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { cn } from "../lib/cn";
export default function Title({ headingLevel, children, className = "", id = "", variant = "gradient", }) {
    if (headingLevel === "h1") {
        return (_jsx("h1", { id: id || undefined, className: cn("text-4xl font-bold mb-4", variant === "gradient" &&
                "bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent", className), children: children }));
    }
    if (headingLevel === "h2") {
        return (_jsx("h2", { id: id || undefined, className: cn("text-3xl font-semibold mb-3 mt-5", variant === "gradient" &&
                "bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent", className), children: children }));
    }
    if (headingLevel === "h3") {
        return (_jsx("h3", { id: id || undefined, className: cn("text-2xl font-medium mb-2 mt-4", variant === "gradient" &&
                "bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent", className), children: children }));
    }
    return _jsx(_Fragment, { children: children });
}
