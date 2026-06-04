/**
 * SiteFooter — shell de pie global (marca, columnas y barra inferior configurables).
 */
import type { ReactNode } from "react";
import type { ContainerSize } from "../types";
import { cn } from "../lib/cn";
import Container from "../molecules/Container";
import Line from "../atoms/Line";

export interface SiteFooterColumnProps {
  title: string;
  children: ReactNode;
  /** Etiqueta accesible del bloque (p. ej. en el `<nav>` interno) */
  ariaLabel?: string;
  className?: string;
}

export function SiteFooterColumn({ title, children, ariaLabel, className }: SiteFooterColumnProps) {
  return (
    <div className={className}>
      <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-wider text-purple-400">
        {title}
      </p>
      {ariaLabel ? (
        <div aria-label={ariaLabel}>{children}</div>
      ) : (
        children
      )}
    </div>
  );
}

export interface SiteFooterProps {
  /** Columna principal (logo, tagline, metadatos); ocupa 2 columnas en lg */
  brand: ReactNode;
  /** Columnas secundarias: usar `<SiteFooterColumn />` */
  children: ReactNode;
  /** Barra bajo el separador (copyright, notas) */
  bottom: ReactNode;
  className?: string;
  containerClassName?: string;
  containerSize?: ContainerSize;
}

export default function SiteFooter({
  brand,
  children,
  bottom,
  className = "",
  containerClassName = "",
  containerSize = "md",
}: SiteFooterProps) {
  return (
    <footer
      className={cn(
        "mt-auto border-t border-cyan-500/20 bg-gradient-to-b from-gray-50 via-gray-50 to-gray-100/80 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900/80",
        className
      )}
    >
      <Container size={containerSize} className={cn("py-10 md:py-12", containerClassName)}>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">{brand}</div>
          {children}
        </div>

        <Line variant="subtle" className="!my-8" />

        <div className="flex flex-col gap-3 text-center text-xs text-gray-600 dark:text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          {bottom}
        </div>
      </Container>
    </footer>
  );
}
