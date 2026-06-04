import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { cn } from "../lib/cn";
import Title from "../molecules/Title";
export default function Structure({ children, className = "" }) {
    return (_jsx("div", { className: cn("bg-gray-900 rounded-2xl h-fit min-w-2/4 hyphens-auto break-words p-4", className), children: children }));
}
export function CurriculumAside({ children, curriculumContent: CurriculumContent, }) {
    return (_jsxs("aside", { className: "hidden 2xl:block sticky top-5 self-start w-4/5 min-w-72", children: [_jsx(Title, { headingLevel: "h2", className: "select-none", children: "Curriculum" }), _jsx(CurriculumContent, { className: cn("bg-gray-900 rounded-md p-4 mb-4 list-decimal h-fit overflow-y-auto", "max-h-[80vh]"), children: children }), children] }));
}
export function CurriculumFull({ curriculumContent: CurriculumContent }) {
    return (_jsxs(_Fragment, { children: [_jsx(Title, { headingLevel: "h2", className: "2xl:hidden", children: "Curriculum" }), _jsx(CurriculumContent, { className: "bg-gray-900 rounded-md p-4 mb-4 list-decimal 2xl:hidden" })] }));
}
