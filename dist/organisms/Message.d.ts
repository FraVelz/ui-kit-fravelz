import type { ReactNode } from "react";
import type { MessageVariant } from "../types";
export interface MessageProps {
    children: ReactNode;
    onClose: () => void;
    title?: string;
    variant?: MessageVariant;
}
export default function Message({ children, onClose, title, variant }: MessageProps): import("react").ReactPortal;
//# sourceMappingURL=Message.d.ts.map