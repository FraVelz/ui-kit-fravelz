/**
 * Note Component
 * A reusable component for displaying notes or secondary text
 */
import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export interface NoteProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Note({ children, className = "", id = "" }: NoteProps) {
  return (
    <p className={cn("text-gray-500 select-auto text-lg py-2", className)} id={id}>
      {children}
    </p>
  );
}
