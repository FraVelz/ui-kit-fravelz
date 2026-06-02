/**
 * Tooltip Component
 * A tooltip component for displaying helpful information on hover
 */
import React, { useState } from "react";
import { cn } from "../lib/cn";

export default function Tooltip({
  children,
  content,
  className = "",
  position = "top",
  variant = "default",
}) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={cn(
            "absolute left-1/2 transform -translate-x-1/2",
            "px-3 py-2 rounded-lg text-sm whitespace-nowrap",
            "pointer-events-none z-50 animation-fadeIn",
            position === "top" && "bottom-full mb-2",
            position === "bottom" && "top-full mt-2",
            position === "left" && "right-full mr-2",
            position === "right" && "left-full ml-2",
            variant === "default" && cn("bg-gray-800 border border-cyan-500/40 text-cyan-300"),
            variant === "dark" && cn("bg-gray-900 border border-gray-700 text-gray-200"),
            variant === "highlight" &&
              cn(
                "bg-gradient-to-r from-cyan-600/20 to-purple-600/20",
                "border border-cyan-500/40 text-cyan-300"
              ),
            className
          )}
        >
          {content}
          <div
            className={cn(
              "absolute w-2 h-2 bg-gray-800 border-b border-r border-cyan-500/40 transform rotate-45",
              position === "top" && "bottom-0 translate-y-1/2",
              position === "bottom" && "top-0 -translate-y-1/2"
            )}
          />
        </div>
      )}
    </div>
  );
}
