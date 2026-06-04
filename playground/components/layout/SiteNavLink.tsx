import { NavLink, type NavLinkProps } from "react-router-dom";
import { cn } from "../../kit";

type SiteNavLinkProps = NavLinkProps & {
  layout?: "header" | "footer" | "docs";
};

export default function SiteNavLink({ layout = "header", ...props }: SiteNavLinkProps) {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        cn(
          layout === "header" &&
            cn(
              "block w-full rounded-md px-3 py-2 text-center text-sm font-medium",
              "transition-colors outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80",
              "sm:inline-block sm:w-auto sm:py-1.5 sm:text-left",
              isActive
                ? "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300"
                : cn(
                    "text-gray-600 hover:bg-gray-200/80 hover:text-gray-900",
                    "dark:text-gray-400 dark:hover:bg-gray-800/80 dark:hover:text-gray-200"
                  )
            ),
          layout === "footer" &&
            cn(
              "block rounded-md py-1 text-sm transition-colors",
              "outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80",
              isActive
                ? "text-cyan-700 dark:text-cyan-300"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-300"
            ),
          layout === "docs" &&
            cn(
              "block rounded-md px-2 py-1 text-sm transition-colors",
              "outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80",
              isActive
                ? "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300"
                : cn(
                    "text-gray-600 hover:bg-gray-200/80 hover:text-gray-900",
                    "dark:text-gray-400 dark:hover:bg-gray-800/80 dark:hover:text-gray-200"
                  )
            )
        )
      }
    />
  );
}
