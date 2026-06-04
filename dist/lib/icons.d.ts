import type { ComponentType, SVGProps } from "react";
import type { AlertType, IconProps } from "../types";
type SvgProps = SVGProps<SVGSVGElement> & {
    className?: string;
};
export declare function IconInfo({ className, ...props }: IconProps & SvgProps): import("react").JSX.Element;
export declare function IconSuccess({ className, ...props }: IconProps & SvgProps): import("react").JSX.Element;
export declare function IconWarning({ className, ...props }: IconProps & SvgProps): import("react").JSX.Element;
export declare function IconError({ className, ...props }: IconProps & SvgProps): import("react").JSX.Element;
export declare function IconClose({ className, ...props }: IconProps & SvgProps): import("react").JSX.Element;
export declare function IconCheck({ className, ...props }: IconProps & SvgProps): import("react").JSX.Element;
export declare function IconCopy({ className, ...props }: IconProps & SvgProps): import("react").JSX.Element;
export declare function IconArrowRight({ className, ...props }: IconProps & SvgProps): import("react").JSX.Element;
export declare const alertIcons: Record<AlertType, ComponentType<IconProps>>;
export {};
//# sourceMappingURL=icons.d.ts.map