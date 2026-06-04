/**
 * CallToAction Component
 * A prominent call-to-action component with design guide styling
 */
import type { ReactNode } from "react";
import type { ButtonVariant } from "../types";
export interface CallToActionProps {
    children: ReactNode;
    className?: string;
    href?: string;
    icon?: ReactNode | null;
    target?: string;
    variant?: ButtonVariant;
}
export default function CallToAction({ children, className, href, icon, target, variant, }: CallToActionProps): import("react").JSX.Element;
//# sourceMappingURL=CallToAction.d.ts.map