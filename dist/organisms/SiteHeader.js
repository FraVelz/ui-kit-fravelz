import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../lib/cn";
import Container from "../molecules/Container";
export default function SiteHeader({ brand, meta, actions, className = "", containerClassName = "", containerSize = "md", sticky = true, }) {
    return (_jsx("header", { className: cn("z-50 border-b border-cyan-500/20 bg-white/90 backdrop-blur-md dark:bg-gray-950/95", sticky && "sticky top-0", className), children: _jsx(Container, { size: containerSize, className: cn("py-3 md:py-4", containerClassName), children: _jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [_jsxs("div", { className: "min-w-0", children: [brand, meta ? _jsx("div", { className: "mt-0.5", children: meta }) : null] }), _jsx("div", { className: "flex flex-wrap items-center gap-2 sm:gap-3", children: actions })] }) }) }));
}
