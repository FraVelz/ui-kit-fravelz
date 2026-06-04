import { jsx as _jsx } from "react/jsx-runtime";
/**
 * Animation Development Component
 * Displays a Lottie animation
 */
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export default function AnimationDevelopment() {
    return _jsx(DotLottieReact, { src: "./AnimationDeveloment.lottie", loop: true, autoplay: true, className: "w-96 h-96" });
}
