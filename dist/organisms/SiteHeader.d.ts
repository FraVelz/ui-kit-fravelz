/**
 * SiteHeader — shell de cabecera global (marca, meta y acciones configurables).
 */
import type { ReactNode } from "react";
import type { ContainerSize } from "../types";
export interface SiteHeaderProps {
    /** Bloque izquierdo: título, logo o enlace de inicio */
    brand: ReactNode;
    /** Línea opcional bajo la marca (paquete npm, badge, etc.) */
    meta?: ReactNode;
    /** Bloque derecho: idioma, navegación, CTAs */
    actions: ReactNode;
    className?: string;
    containerClassName?: string;
    containerSize?: ContainerSize;
    sticky?: boolean;
}
export default function SiteHeader({ brand, meta, actions, className, containerClassName, containerSize, sticky, }: SiteHeaderProps): import("react").JSX.Element;
//# sourceMappingURL=SiteHeader.d.ts.map