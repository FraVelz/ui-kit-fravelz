import { useEffect, useId, useRef, useState, type ReactNode } from "react";

type SiteHeaderNavProps = {
  children: ReactNode;
  menuLabel: string;
  ariaLabel: string;
};

export default function SiteHeaderNav({ children, menuLabel, ariaLabel }: SiteHeaderNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuBtnRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <>
      <nav
        className="hidden w-full flex-wrap items-center justify-end gap-1 lg:flex lg:w-auto lg:gap-2"
        aria-label={ariaLabel}
      >
        {children}
      </nav>

      <div className="relative w-full lg:hidden">
        <button
          ref={menuBtnRef}
          id="menu-btn"
          type="button"
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-300 bg-white/80 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-cyan-500/40 dark:border-gray-700 dark:bg-gray-900/80 dark:text-gray-300"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuLabel}
        </button>

        <nav
          id={menuId}
          className={
            menuOpen
              ? "absolute left-0 right-0 top-[calc(100%+0.5rem)] z-50 flex flex-col gap-1 rounded-lg border border-gray-200 bg-white p-2 shadow-lg dark:border-gray-700 dark:bg-gray-900"
              : "hidden"
          }
          aria-label={ariaLabel}
        >
          {children}
        </nav>
      </div>
    </>
  );
}
