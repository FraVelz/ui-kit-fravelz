/**
 * Link Component
 * A custom link component with smooth scrolling for in-page anchors and design guide styling
 */
import type { ReactNode } from "react";
import type { LinkVariant } from "../types";
export interface LinkProps {
    href: string;
    children: ReactNode;
    target?: string;
    className?: string;
    variant?: LinkVariant;
}
export default function Link({ href, children, target, className, variant, }: LinkProps): import("react").JSX.Element;
//# sourceMappingURL=Link.d.ts.map