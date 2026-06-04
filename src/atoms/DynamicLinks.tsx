/**
 * DynamicLink Component
 * A navigation link component with visited state tracking and active state styling
 */
import { useState } from "react";
import type { ReactNode } from "react";
import { NavLink, type NavLinkProps } from "react-router-dom";
import { cn } from "../lib/cn";

export interface DynamicLinkProps {
  children: ReactNode;
  to: NavLinkProps["to"];
  className?: string;
}

export default function DynamicLink({ children, to, className = "" }: DynamicLinkProps) {
  const [visitedLinks, setVisitedLinks] = useState<Record<string, boolean>>({});

  const handleClick = () => {
    const path = typeof to === "string" ? to : (to.pathname ?? "");
    setVisitedLinks((previousState) => ({ ...previousState, [path]: true }));
  };

  const pathKey = typeof to === "string" ? to : (to.pathname ?? "");

  return (
    <NavLink
      to={to}
      draggable={false}
      onClick={handleClick}
      className={({ isActive }) =>
        cn(
          "cursor-pointer select-none transition-all duration-300 pb-[2px] border-b-2 rounded-sm",
          "outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80",
          "focus-visible:ring-offset-2 focus-visible:ring-offset-white",
          "dark:focus-visible:ring-offset-gray-950",
          isActive &&
            cn(
              "border-blue-600 text-gray-900 dark:border-blue-500 dark:text-gray-100",
              "focus-visible:ring-blue-400/80"
            ),
          !isActive &&
            visitedLinks[pathKey] &&
            "border-gray-400 text-gray-600 dark:border-gray-500 dark:text-gray-400",
          !isActive &&
            !visitedLinks[pathKey] &&
            "border-transparent text-gray-700 hover:border-gray-400 dark:text-gray-300",
          className
        )
      }
    >
      {children}
    </NavLink>
  );
}
