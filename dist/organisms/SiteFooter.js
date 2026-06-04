import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../lib/cn";
import Container from "../molecules/Container";
import Line from "../atoms/Line";
export function SiteFooterColumn({ title, children, ariaLabel, className }) {
    return (_jsxs("div", { className: className, children: [_jsx("p", { className: "mb-3 font-mono text-[10px] font-semibold uppercase tracking-wider text-purple-400", children: title }), ariaLabel ? (_jsx("div", { "aria-label": ariaLabel, children: children })) : (children)] }));
}
export default function SiteFooter({ brand, children, bottom, className = "", containerClassName = "", containerSize = "md", }) {
    return (_jsx("footer", { className: cn("mt-auto border-t border-cyan-500/20 bg-gradient-to-b from-gray-50 via-gray-50 to-gray-100/80 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900/80", className), children: _jsxs(Container, { size: containerSize, className: cn("py-10 md:py-12", containerClassName), children: [_jsxs("div", { className: "grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4", children: [_jsx("div", { className: "sm:col-span-2 lg:col-span-2", children: brand }), children] }), _jsx(Line, { variant: "subtle", className: "!my-8" }), _jsx("div", { className: "flex flex-col gap-3 text-center text-xs text-gray-600 dark:text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:text-left", children: bottom })] }) }));
}
