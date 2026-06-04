/**
 * Structure Component and Related Components
 * Layout components for organizing page structure and curriculum/syllabus display
 */
import type { ReactNode } from "react";
import type { CurriculumContentComponent } from "../types";
export interface StructureProps {
    children: ReactNode;
    className?: string;
}
export default function Structure({ children, className }: StructureProps): import("react").JSX.Element;
export interface CurriculumAsideProps {
    children: ReactNode;
    curriculumContent: CurriculumContentComponent;
}
export declare function CurriculumAside({ children, curriculumContent: CurriculumContent, }: CurriculumAsideProps): import("react").JSX.Element;
export interface CurriculumFullProps {
    curriculumContent: CurriculumContentComponent;
}
export declare function CurriculumFull({ curriculumContent: CurriculumContent }: CurriculumFullProps): import("react").JSX.Element;
//# sourceMappingURL=Structure.d.ts.map