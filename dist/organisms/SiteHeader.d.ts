/**
 * SiteHeader — shell de cabecera global (marca, meta y acciones configurables).
 */
import type { CSSProperties, ReactNode } from "react";
import type { ContainerSize } from "../types";
export interface SiteHeaderProps {
    /** Bloque izquierdo: título, logo o enlace de inicio */
    brand: ReactNode;
    /** Línea opcional bajo la marca (paquete npm, badge, etc.) */
    meta?: ReactNode;
    /** Bloque derecho: idioma, navegación, CTAs */
    actions: ReactNode;
    className?: string;
    style?: CSSProperties;
    containerClassName?: string;
    containerSize?: ContainerSize;
    sticky?: boolean;
    /** `scroll`: fondo vía CSS vars (--header-opacity) en className del consumidor */
    appearance?: "default" | "scroll";
}
export default function SiteHeader({ brand, meta, actions, className, style, containerClassName, containerSize, sticky, appearance, }: SiteHeaderProps): import("react").JSX.Element;
//# sourceMappingURL=SiteHeader.d.ts.map