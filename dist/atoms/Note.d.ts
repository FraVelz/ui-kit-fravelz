/**
 * Note Component
 * A reusable component for displaying notes or secondary text
 */
import type { ReactNode } from "react";
export interface NoteProps {
    children: ReactNode;
    className?: string;
    id?: string;
}
export default function Note({ children, className, id }: NoteProps): import("react").JSX.Element;
//# sourceMappingURL=Note.d.ts.map