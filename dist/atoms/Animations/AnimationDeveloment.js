/**
 * Animation Development Component
 * Displays a Lottie animation
 */
import React from 'react';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export default function AnimationDevelopment() {
  return /*#__PURE__*/ /*#__PURE__*/React.createElement(DotLottieReact, {
    src: "./AnimationDeveloment.lottie",
    loop: true,
    autoplay: true,
    className: "w-96 h-96"
  });
}