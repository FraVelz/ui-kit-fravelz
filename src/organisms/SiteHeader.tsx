/**
 * SiteHeader — shell de cabecera global (marca, meta y acciones configurables).
 */
import type { ReactNode } from "react";
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
  containerClassName?: string;
  containerSize?: ContainerSize;
  sticky?: boolean;
}

export default function SiteHeader({
  brand,
  meta,
  actions,
  className = "",
  containerClassName = "",
  containerSize = "md",
  sticky = true,
}: SiteHeaderProps) {
  return (
    <header
      className={cn(
        "z-50 border-b border-cyan-500/20 bg-white/90 backdrop-blur-md dark:bg-gray-950/95",
        sticky && "sticky top-0",
        className
      )}
    >
      <Container size={containerSize} className={cn("py-3 md:py-4", containerClassName)}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="min-w-0">
            {brand}
            {meta ? <div className="mt-0.5">{meta}</div> : null}
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">{actions}</div>
        </div>
      </Container>
    </header>
  );
}
