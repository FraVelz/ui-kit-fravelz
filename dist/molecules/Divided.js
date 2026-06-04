import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../lib/cn";
export default function Divided({ secondaryContent, children, hasBorder = false }) {
    return (_jsxs("div", { className: cn("px-3 flex flex-col lg:flex-row justify-center items-center rounded-2xl", hasBorder ? "border-2 border-gray-300 dark:border-gray-400" : "border-0"), children: [_jsx("div", { className: cn("break-words rounded-2xl border border-gray-200/80 bg-white p-4 shadow-sm", "dark:border-transparent dark:bg-gray-900 dark:shadow-none"), children: children }), _jsx("div", { className: "flex justify-center items-center lg:w-96", children: secondaryContent })] }));
}
