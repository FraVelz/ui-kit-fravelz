import type { ComponentType, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type SizeSmMdLg = "sm" | "md" | "lg";
export type SizeSmMdLgXl = "sm" | "md" | "lg" | "xl";

export type AlertType = "info" | "success" | "warning" | "error";
export type BadgeVariant = "cyan" | "purple" | "success" | "highlight";
export type TagVariant = "cyan" | "purple" | "gray" | "gradient";
export type LinkVariant = "default" | "purple" | "accent";
export type TextVariant = "default" | "secondary" | "muted" | "accent" | "highlight";
export type TextSize = "sm" | "base" | "lg" | "xl";
export type TextSelectability = "auto" | "none" | "text" | "all";
export type InputVariant = "default" | "purple" | "minimal";
export type DividerVariant = "default" | "cyan" | "purple" | "dotted" | "gradient";
export type DividerOrientation = "horizontal" | "vertical";
export type GradientTextVariant =
  | "cyan-purple"
  | "purple-cyan"
  | "cyan-only"
  | "purple-only"
  | "blue-cyan";
export type GradientTextAs = "span" | "h1" | "h2" | "h3" | "p";
export type LineVariant = "default" | "cyan" | "purple" | "subtle";
export type TooltipPosition = "top" | "bottom" | "left" | "right";
export type TooltipVariant = "default" | "dark" | "highlight";

export type CardVariant = "default" | "elevated" | "gradient" | "minimal";
export type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";
export type ContainerVariant = "default" | "compact" | "relaxed" | "section";
export type GridGap = "sm" | "md" | "lg" | "xl";
export type GridCols = 1 | 2 | 3 | 4 | 6;
export type ListType = "ul" | "ol";
export type ProgressBarVariant = "cyan" | "purple" | "gradient" | "success";
export type CodeLanguage = "javascript" | "bash" | string;
export type TableCellAlignment = "left" | "center" | "right";
export type TitleHeadingLevel = "h1" | "h2" | "h3";
export type TitleVariant = "gradient" | string;

export type SectionVariant = "default" | "highlighted" | "minimal" | "elevated";
export type MessageVariant = "default" | "success" | "warning" | "error";

export interface RoadmapStep {
  title: string;
  description: string;
  additionalContent?: ReactNode;
}

export type CurriculumContentComponent = ComponentType<{
  className?: string;
  children?: ReactNode;
}>;

export interface IconProps {
  className?: string;
}
