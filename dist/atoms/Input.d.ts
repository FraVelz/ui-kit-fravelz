/**
 * Input Component
 * A flexible input field component with design guide styling
 */
import type { InputHTMLAttributes, ReactNode } from "react";
import type { InputVariant, SizeSmMdLg } from "../types";
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "className" | "placeholder" | "disabled"> {
    placeholder?: string;
    className?: string;
    variant?: InputVariant;
    size?: SizeSmMdLg;
    icon?: ReactNode | null;
    label?: string | null;
    error?: string | null;
    disabled?: boolean;
}
export default function Input({ placeholder, className, variant, size, icon, label, error, disabled, ...props }: InputProps): import("react").JSX.Element;
//# sourceMappingURL=Input.d.ts.map