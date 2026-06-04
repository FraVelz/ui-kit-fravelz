import type { ReactNode } from "react";
import { cn } from "../../kit";

type SiteExternalLinkProps = {
  href: string;
  children: ReactNode;
  layout?: "header" | "footer";
};

export default function SiteExternalLink({
  href,
  children,
  layout = "footer",
}: SiteExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "rounded-md text-sm text-gray-600 transition-colors dark:text-gray-500",
        "hover:text-purple-700 dark:hover:text-purple-300 outline-none focus-visible:ring-2 focus-visible:ring-purple-400/80",
        layout === "header" &&
          "block w-full px-3 py-2 text-center sm:inline-block sm:w-auto sm:py-1.5 sm:text-left",
        layout === "footer" && "block py-1"
      )}
    >
      {children}
    </a>
  );
}
