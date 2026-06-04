import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../lib/cn";
import Container from "../molecules/Container";
export default function SiteHeader({ brand, meta, actions, className = "", style, containerClassName = "", containerSize = "md", sticky = true, appearance = "default", }) {
    return (_jsx("header", { id: appearance === "scroll" ? "header" : undefined, style: style, className: cn("z-50 border-b", appearance === "default" &&
            "border-cyan-500/20 bg-white/90 backdrop-blur-md dark:bg-gray-950/95", appearance === "scroll" && "border-transparent", sticky && "sticky top-0", className), children: _jsx(Container, { size: containerSize, className: cn("py-3 md:py-4", containerClassName), children: _jsxs("div", { className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between lg:gap-6", children: [_jsxs("div", { className: "min-w-0 w-full md:flex-1", children: [brand, meta ? _jsx("div", { className: "mt-0.5", children: meta }) : null] }), _jsx("div", { className: "flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end md:w-auto md:max-w-full lg:gap-3", children: actions })] }) }) }));
}
