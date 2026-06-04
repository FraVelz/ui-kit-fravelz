/**
 * CurriculumAside — barra lateral de curriculum en pantallas anchas.
 */
import type { ReactNode } from "react";
import type { CurriculumContentComponent } from "../types";
export interface CurriculumAsideProps {
    children: ReactNode;
    curriculumContent: CurriculumContentComponent;
}
export default function CurriculumAside({ children, curriculumContent: CurriculumContent, }: CurriculumAsideProps): import("react").JSX.Element;
//# sourceMappingURL=CurriculumAside.d.ts.map