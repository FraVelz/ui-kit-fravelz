import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../lib/cn";
export default function Note({ children, className = "", id = "" }) {
    return (_jsx("p", { className: cn("text-gray-500 select-auto text-lg py-2", className), id: id, children: children }));
}
