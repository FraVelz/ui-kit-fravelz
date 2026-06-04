import type { ReactNode } from "react";
import type { AlertType } from "../types";
export interface AlertProps {
    children: ReactNode;
    className?: string;
    type?: AlertType;
    title?: string | null;
    dismissible?: boolean;
    onDismiss?: () => void;
}
export default function Alert({ children, className, type, title, dismissible, onDismiss, }: AlertProps): import("react").JSX.Element;
//# sourceMappingURL=Alert.d.ts.map