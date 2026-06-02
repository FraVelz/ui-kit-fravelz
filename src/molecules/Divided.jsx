/**
 * Divided Component
 * A two-column layout component with flexible content arrangement
 */
import React from "react";
import { cn } from "../lib/cn";

export default function Divided({ secondaryContent, children, hasBorder = false }) {
  return (
    <div
      className={cn(
        "px-3 flex flex-col lg:flex-row justify-center items-center rounded-2xl",
        hasBorder ? "border-2 border-gray-400" : "border-0"
      )}
    >
      <div className="bg-gray-900 rounded-2xl break-words p-4">{children}</div>
      <div className="flex justify-center items-center lg:w-96">{secondaryContent}</div>
    </div>
  );
}
