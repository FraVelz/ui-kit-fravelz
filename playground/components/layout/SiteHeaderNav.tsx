import type { ReactNode } from "react";

type SiteHeaderNavProps = {
  children: ReactNode;
  menuLabel: string;
  ariaLabel: string;
};

export default function SiteHeaderNav({ children, menuLabel, ariaLabel }: SiteHeaderNavProps) {
  return (
    <>
      <nav
        className="hidden w-full flex-wrap items-center justify-end gap-1 lg:flex lg:w-auto lg:gap-2"
        aria-label={ariaLabel}
      >
        {children}
      </nav>

      <details className="group relative w-full lg:hidden">
        <summary className="flex w-full cursor-pointer list-none items-center justify-center gap-2 rounded-md border border-gray-300 bg-white/80 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-cyan-500/40 dark:border-gray-700 dark:bg-gray-900/80 dark:text-gray-300 [&::-webkit-details-marker]:hidden">
          {menuLabel}
        </summary>
        <nav
          className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-50 flex flex-col gap-1 rounded-lg border border-gray-200 bg-white p-2 shadow-lg dark:border-gray-700 dark:bg-gray-900"
          aria-label={ariaLabel}
        >
          {children}
        </nav>
      </details>
    </>
  );
}
