import type { ReactNode } from "react";
import { type NavLinkProps } from "react-router-dom";
export interface DynamicLinkProps {
    children: ReactNode;
    to: NavLinkProps["to"];
    className?: string;
}
export default function DynamicLink({ children, to, className }: DynamicLinkProps): import("react").JSX.Element;
//# sourceMappingURL=DynamicLinks.d.ts.map