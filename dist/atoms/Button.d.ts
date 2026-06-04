import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { ButtonVariant, SizeSmMdLg } from "../types";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    variant?: ButtonVariant;
    size?: SizeSmMdLg;
}
export default function Button({ children, className, variant, size, ...props }: ButtonProps): import("react").JSX.Element;
//# sourceMappingURL=Button.d.ts.map