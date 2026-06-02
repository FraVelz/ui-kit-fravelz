/**
 * List Component
 * A flexible list component supporting both ordered and unordered lists
 */
import React from "react";
import { cn } from "../lib/cn";

export default function List({ children, listType = "ul", className = "" }) {
  if (listType === "ol") {
    return (
      <ol
        className={cn(
          "list-inside flex flex-col gap-2 p-1 my-2 list-decimal text-lg text-gray-300 pl-6",
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
        "list-inside flex flex-col gap-2 p-1 list-disc my-2 text-lg text-gray-300 pl-6",
        className
      )}
    >
      {children}
    </ul>
  );
}
