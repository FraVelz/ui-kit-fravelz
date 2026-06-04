/**
 * Divided Component
 * A two-column layout component with flexible content arrangement
 */
import type { ReactNode } from "react";
export interface DividedProps {
    secondaryContent: ReactNode;
    children: ReactNode;
    hasBorder?: boolean;
}
export default function Divided({ secondaryContent, children, hasBorder }: DividedProps): import("react").JSX.Element;
//# sourceMappingURL=Divided.d.ts.map