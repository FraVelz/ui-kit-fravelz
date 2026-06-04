import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "../../kit";
import { useLocalePaths } from "../../i18n/useLocalePaths";

type HeaderComponentsCtaProps = {
  children: ReactNode;
};

export default function HeaderComponentsCta({ children }: HeaderComponentsCtaProps) {
  const { docsHome } = useLocalePaths();

  return (
    <NavLink
      to={docsHome}
      className={cn(
        "flex w-full items-center justify-center gap-1.5 rounded-full px-4 py-2",
        "text-sm font-semibold transition-all",
        "bg-gradient-to-r from-cyan-600 to-purple-600 text-white",
        "hover:from-cyan-500 hover:to-purple-500 shadow-md shadow-cyan-500/25",
        "outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80",
        "focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50",
        "dark:focus-visible:ring-offset-gray-950 sm:inline-flex sm:w-auto"
      )}
    >
      {children}
    </NavLink>
  );
}
