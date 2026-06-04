import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../lib/cn";
import Container from "../molecules/Container";
export function SiteFooterColumn({ title, children, ariaLabel, className }) {
    return (_jsxs("div", { className: className, children: [_jsx("p", { className: cn("mb-3 font-mono text-[10px] font-semibold uppercase tracking-wider", "text-purple-600 dark:text-purple-400"), children: title }), ariaLabel ? _jsx("div", { "aria-label": ariaLabel, children: children }) : children] }));
}
export default function SiteFooter({ brand, children, toolbar, legal, className = "", containerClassName = "", containerSize = "md", }) {
    const showBottomBar = toolbar != null || legal != null;
    return (_jsx("footer", { className: cn("mt-auto border-t border-cyan-500/20 bg-gradient-to-b", "from-gray-50 via-gray-50 to-gray-100/80", "dark:from-gray-950 dark:via-gray-950 dark:to-gray-900/80", className), children: _jsxs(Container, { size: containerSize, className: cn("py-10 md:py-12", containerClassName), children: [_jsxs("div", { className: "grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8", children: [_jsx("div", { className: "sm:col-span-2 lg:col-span-5", children: brand }), _jsx("div", { className: "grid grid-cols-1 gap-8 sm:col-span-2 sm:grid-cols-2 lg:col-span-7 lg:gap-10", children: children })] }), showBottomBar ? (_jsxs("div", { className: cn("mt-10 flex flex-col gap-4 border-t border-gray-200 pt-8", "dark:border-gray-800/80 sm:mt-12 sm:flex-row sm:items-center sm:justify-between"), children: [toolbar ? (_jsx("div", { className: "flex justify-center sm:justify-start", children: toolbar })) : (_jsx("span", { className: "hidden sm:block" })), legal ? (_jsx("div", { className: cn("flex flex-col gap-1 text-center text-xs text-gray-600", "dark:text-gray-500 sm:items-end sm:text-right"), children: legal })) : null] })) : null] }) }));
}
