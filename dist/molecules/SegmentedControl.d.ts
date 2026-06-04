/**
 * SegmentedControl — grupo de opciones mutuamente excluyentes (p. ej. idioma ES/EN).
 */
import type { ReactNode } from "react";
export interface SegmentedControlOption<T extends string = string> {
    value: T;
    label: ReactNode;
}
export interface SegmentedControlProps<T extends string = string> {
    value: T;
    onChange: (value: T) => void;
    options: SegmentedControlOption<T>[];
    /** Etiqueta accesible del grupo (role="group") */
    "aria-label": string;
    className?: string;
}
export default function SegmentedControl<T extends string = string>({ value, onChange, options, "aria-label": ariaLabel, className, }: SegmentedControlProps<T>): import("react").JSX.Element;
//# sourceMappingURL=SegmentedControl.d.ts.map