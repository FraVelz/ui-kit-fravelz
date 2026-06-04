/**
 * DynamicLink Component
 * A navigation link component with visited state tracking and active state styling
 */
import { useState } from "react";
import type { ReactNode } from "react";
import { NavLink, type NavLinkProps } from "react-router-dom";
import { cn } from "../lib/cn";
import { focusLinkCyan } from "../lib/focus";

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
          focusLinkCyan,
          isActive && "border-blue-500 focus-visible:ring-blue-400/80",
          !isActive && visitedLinks[pathKey] && "border-gray-500",
          !isActive && !visitedLinks[pathKey] && "border-transparent hover:border-gray-400",
          className
        )
      }
    >
      {children}
    </NavLink>
  );
}
