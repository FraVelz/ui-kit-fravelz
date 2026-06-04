/**
 * Card Component
 * A flexible card component for containing content with design guide styling
 */
import type { ReactNode } from "react";
import type { CardVariant } from "../types";
export interface CardProps {
    children: ReactNode;
    className?: string;
    title?: string | null;
    subtitle?: string | null;
    variant?: CardVariant;
    hoverable?: boolean;
}
export default function Card({ children, className, title, subtitle, variant, hoverable, }: CardProps): import("react").JSX.Element;
//# sourceMappingURL=Card.d.ts.map