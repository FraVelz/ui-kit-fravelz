/**
 * SiteFooter — shell de pie global (marca, columnas y barra inferior configurables).
 */
import type { ReactNode } from "react";
import type { ContainerSize } from "../types";
import { cn } from "../lib/cn";
import Container from "../molecules/Container";

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

export default function SiteFooter({
  brand,
  children,
  toolbar,
  legal,
  className = "",
  containerClassName = "",
  containerSize = "md",
}: SiteFooterProps) {
  const showBottomBar = toolbar != null || legal != null;

  return (
    <footer
      className={cn(
        "mt-auto border-t border-cyan-500/20 bg-gradient-to-b from-gray-50 via-gray-50 to-gray-100/80 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900/80",
        className
      )}
    >
      <Container size={containerSize} className={cn("py-10 md:py-12", containerClassName)}>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-5">{brand}</div>
          <div className="grid grid-cols-1 gap-8 sm:col-span-2 sm:grid-cols-2 lg:col-span-7 lg:gap-10">
            {children}
          </div>
        </div>

        {showBottomBar ? (
          <div className="mt-10 flex flex-col gap-4 border-t border-gray-200 pt-8 dark:border-gray-800/80 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
            {toolbar ? (
              <div className="flex justify-center sm:justify-start">{toolbar}</div>
            ) : (
              <span className="hidden sm:block" />
            )}
            {legal ? (
              <div className="flex flex-col gap-1 text-center text-xs text-gray-600 dark:text-gray-500 sm:items-end sm:text-right">
                {legal}
              </div>
            ) : null}
          </div>
        ) : null}
      </Container>
    </footer>
  );
}
