/**
 * Section Component
 * A semantic section component for organizing content
 */
import type { ReactNode } from "react";
import type { SectionVariant } from "../types";
export interface SectionProps {
    children: ReactNode;
    className?: string;
    title?: string | null;
    subtitle?: string | null;
    variant?: SectionVariant;
    id?: string | null;
    /** Alineación del bloque título/subtítulo */
    align?: "left" | "center";
}
export default function Section({ children, className, title, subtitle, variant, id, align, }: SectionProps): import("react").JSX.Element;
//# sourceMappingURL=Section.d.ts.map