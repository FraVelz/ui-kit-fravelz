import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../lib/cn";
import Title from "../molecules/Title";
export default function CurriculumAside({ children, curriculumContent: CurriculumContent, }) {
    return (_jsxs("aside", { className: "hidden 2xl:block sticky top-5 self-start w-4/5 min-w-72", children: [_jsx(Title, { headingLevel: "h2", className: "select-none", children: "Curriculum" }), _jsx(CurriculumContent, { className: cn("bg-white border border-gray-200/80 rounded-md p-4 mb-4 list-decimal h-fit overflow-y-auto", "dark:bg-gray-900 dark:border-transparent", "max-h-[80vh]"), children: children })] }));
}
