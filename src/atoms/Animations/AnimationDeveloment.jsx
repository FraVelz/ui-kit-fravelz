/**
 * Animation Development Component
 * Displays a Lottie animation
 */
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function AnimationDevelopment() {
  return <DotLottieReact src="./AnimationDeveloment.lottie" loop autoplay className="w-96 h-96" />;
}
