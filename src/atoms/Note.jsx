/**
 * Note Component
 * A reusable component for displaying notes or secondary text
 */
import React from "react";
import { cn } from "../lib/cn";

export default function Note({ children, className = "", id = "" }) {
  return (
    <p className={cn("text-gray-500 select-auto text-lg py-2", className)} id={id}>
      {children}
    </p>
  );
}
