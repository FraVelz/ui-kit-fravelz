/**
 * SiteHeader — shell de cabecera global (marca, meta y acciones configurables).
 */
import type { CSSProperties, ReactNode } from "react";
import type { ContainerSize } from "../types";
import { cn } from "../lib/cn";
import Container from "../molecules/Container";

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

export default function SiteHeader({
  brand,
  meta,
  actions,
  className = "",
  style,
  containerClassName = "",
  containerSize = "md",
  sticky = true,
  appearance = "default",
}: SiteHeaderProps) {
  return (
    <header
      id={appearance === "scroll" ? "header" : undefined}
      style={style}
      className={cn(
        "z-50 border-b",
        appearance === "default" &&
          "border-cyan-500/20 bg-white/90 backdrop-blur-md dark:bg-gray-950/95",
        appearance === "scroll" && "border-transparent",
        sticky && "sticky top-0",
        className
      )}
    >
      <Container size={containerSize} className={cn("py-3 md:py-4", containerClassName)}>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between lg:gap-6">
          <div className="min-w-0 w-full md:flex-1">
            {brand}
            {meta ? <div className="mt-0.5">{meta}</div> : null}
          </div>
          <div className="flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end md:w-auto md:max-w-full lg:gap-3">
            {actions}
          </div>
        </div>
      </Container>
    </header>
  );
}
