/**
 * ProgressBar Component
 * A progress bar component for showing progress with design guide styling
 */
import type { ProgressBarVariant, SizeSmMdLgXl } from "../types";
export interface ProgressBarProps {
    value?: number;
    max?: number;
    className?: string;
    variant?: ProgressBarVariant;
    size?: SizeSmMdLgXl;
    label?: string | null;
    showPercentage?: boolean;
    animated?: boolean;
}
export default function ProgressBar({ value, max, className, variant, size, label, showPercentage, animated, }: ProgressBarProps): import("react").JSX.Element;
//# sourceMappingURL=ProgressBar.d.ts.map