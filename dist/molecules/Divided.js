import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../lib/cn";
export default function Divided({ secondaryContent, children, hasBorder = false }) {
    return (_jsxs("div", { className: cn("px-3 flex flex-col lg:flex-row justify-center items-center rounded-2xl", hasBorder ? "border-2 border-gray-400" : "border-0"), children: [_jsx("div", { className: "bg-gray-900 rounded-2xl break-words p-4", children: children }), _jsx("div", { className: "flex justify-center items-center lg:w-96", children: secondaryContent })] }));
}
