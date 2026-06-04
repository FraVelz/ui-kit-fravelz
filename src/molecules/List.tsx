/**
 * List Component
 * A flexible list component supporting both ordered and unordered lists
 */
import type { ReactNode } from "react";
import type { ListType } from "../types";
import { cn } from "../lib/cn";

export interface ListProps {
  children: ReactNode;
  listType?: ListType;
  className?: string;
}

export default function List({ children, listType = "ul", className = "" }: ListProps) {
  if (listType === "ol") {
    return (
      <ol
        className={cn(
          "list-inside flex flex-col gap-2 p-1 my-2 list-decimal text-lg text-gray-700 pl-6 dark:text-gray-300",
          className
        )}
      >
        {children}
      </ol>
    );
  }

  return (
    <ul
      className={cn(
        "list-inside flex flex-col gap-2 p-1 list-disc my-2 text-lg text-gray-700 pl-6 dark:text-gray-300",
        className
      )}
    >
      {children}
    </ul>
  );
}
