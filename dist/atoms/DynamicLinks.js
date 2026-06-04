import { jsx as _jsx } from "react/jsx-runtime";
/**
 * DynamicLink Component
 * A navigation link component with visited state tracking and active state styling
 */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "../lib/cn";
export default function DynamicLink({ children, to, className = "" }) {
    const [visitedLinks, setVisitedLinks] = useState({});
    const handleClick = () => {
        const path = typeof to === "string" ? to : (to.pathname ?? "");
        setVisitedLinks((previousState) => ({ ...previousState, [path]: true }));
    };
    const pathKey = typeof to === "string" ? to : (to.pathname ?? "");
    return (_jsx(NavLink, { to: to, draggable: false, onClick: handleClick, className: ({ isActive }) => cn("cursor-pointer select-none transition-all duration-300 pb-[2px] border-b-2 rounded-sm", "outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950", isActive && "border-blue-500 focus-visible:ring-blue-400/80", !isActive && visitedLinks[pathKey] && "border-gray-500", !isActive && !visitedLinks[pathKey] && "border-transparent hover:border-gray-400", className), children: children }));
}
