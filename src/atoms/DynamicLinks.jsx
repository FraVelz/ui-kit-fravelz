/**
 * DynamicLink Component
 * A navigation link component with visited state tracking and active state styling
 */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "../lib/cn";
import { focusLinkCyan } from "../lib/focus";

export default function DynamicLink({ children, to, className = "" }) {
  const [visitedLinks, setVisitedLinks] = useState({});

  const handleClick = () => {
    setVisitedLinks((previousState) => ({ ...previousState, [to]: true }));
  };

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
          !isActive && visitedLinks[to] && "border-gray-500",
          !isActive && !visitedLinks[to] && "border-transparent hover:border-gray-400",
          className
        )
      }
    >
      {children}
    </NavLink>
  );
}
