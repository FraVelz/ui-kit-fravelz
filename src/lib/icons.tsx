import type { ComponentType, SVGProps } from "react";
import type { AlertType, IconProps } from "../types";
import { cn } from "./cn";

type SvgProps = SVGProps<SVGSVGElement> & { className?: string };

function Svg({ className, children, viewBox = "0 0 24 24", ...props }: SvgProps) {
  return (
    <svg
      className={cn("inline-block shrink-0 size-5", className)}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconInfo({ className, ...props }: IconProps & SvgProps) {
  return (
    <Svg className={className} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </Svg>
  );
}

export function IconSuccess({ className, ...props }: IconProps & SvgProps) {
  return (
    <Svg className={className} {...props}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="M22 4 12 14.01l-3-3" />
    </Svg>
  );
}

export function IconWarning({ className, ...props }: IconProps & SvgProps) {
  return (
    <Svg className={className} {...props}>
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </Svg>
  );
}

export function IconError({ className, ...props }: IconProps & SvgProps) {
  return (
    <Svg className={className} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </Svg>
  );
}

export function IconClose({ className, ...props }: IconProps & SvgProps) {
  return (
    <Svg className={cn("size-4", className)} {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </Svg>
  );
}

export function IconCheck({ className, ...props }: IconProps & SvgProps) {
  return (
    <Svg className={cn("size-4", className)} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </Svg>
  );
}

export function IconCopy({ className, ...props }: IconProps & SvgProps) {
  return (
    <Svg className={cn("size-4", className)} {...props}>
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </Svg>
  );
}

export function IconArrowRight({ className, ...props }: IconProps & SvgProps) {
  return (
    <Svg className={className} {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </Svg>
  );
}

export const alertIcons: Record<AlertType, ComponentType<IconProps>> = {
  info: IconInfo,
  success: IconSuccess,
  warning: IconWarning,
  error: IconError,
};
