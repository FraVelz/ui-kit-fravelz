import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../lib/cn";
export default function List({ children, listType = "ul", className = "" }) {
    if (listType === "ol") {
        return (_jsx("ol", { className: cn("list-inside flex flex-col gap-2 p-1 my-2 list-decimal text-lg text-gray-700 pl-6 dark:text-gray-300", className), children: children }));
    }
    return (_jsx("ul", { className: cn("list-inside flex flex-col gap-2 p-1 list-disc my-2 text-lg text-gray-700 pl-6 dark:text-gray-300", className), children: children }));
}
