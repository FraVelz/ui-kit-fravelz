/**
 * SiteFooter — shell de pie global (marca, columnas y barra inferior configurables).
 */
import type { ReactNode } from "react";
import type { ContainerSize } from "../types";
export interface SiteFooterColumnProps {
    title: string;
    children: ReactNode;
    /** Etiqueta accesible del bloque (p. ej. en el `<nav>` interno) */
    ariaLabel?: string;
    className?: string;
}
export declare function SiteFooterColumn({ title, children, ariaLabel, className }: SiteFooterColumnProps): import("react").JSX.Element;
export interface SiteFooterProps {
    /** Columna principal (logo, tagline); ocupa 2 columnas en lg */
    brand: ReactNode;
    /** Columnas secundarias: usar `<SiteFooterColumn />` */
    children: ReactNode;
    /** Barra inferior izquierda (p. ej. selector de tema) */
    toolbar?: ReactNode;
    /** Barra inferior derecha (copyright, legal) */
    legal?: ReactNode;
    className?: string;
    containerClassName?: string;
    containerSize?: ContainerSize;
}
export default function SiteFooter({ brand, children, toolbar, legal, className, containerClassName, containerSize, }: SiteFooterProps): import("react").JSX.Element;
//# sourceMappingURL=SiteFooter.d.ts.map