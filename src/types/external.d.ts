declare module "prismjs/themes/prism-twilight.css";

declare module "@lottiefiles/dotlottie-react" {
  import type { ComponentType } from "react";

  export interface DotLottieReactProps {
    src: string;
    loop?: boolean;
    autoplay?: boolean;
    className?: string;
  }

  export const DotLottieReact: ComponentType<DotLottieReactProps>;
}
