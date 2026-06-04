import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../lib/cn";
import Title from "../molecules/Title";
export default function CurriculumFull({ curriculumContent: CurriculumContent, }) {
    return (_jsxs(_Fragment, { children: [_jsx(Title, { headingLevel: "h2", className: "2xl:hidden", children: "Curriculum" }), _jsx(CurriculumContent, { className: cn("mb-4 list-decimal rounded-md border border-gray-200/80 bg-white p-4 2xl:hidden", "dark:border-transparent dark:bg-gray-900") })] }));
}
