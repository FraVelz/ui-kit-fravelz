import { useEffect, useState } from "react";

const SCROLL_RANGE_PX = 100;
const LOGO_INTERACTIVE_THRESHOLD = 0.05;

export function useHeaderScroll(enabled: boolean) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handleScroll = () => {
      const next = Math.min(window.scrollY / SCROLL_RANGE_PX, 1);
      setScrollProgress(next);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enabled]);

  const progress = enabled ? scrollProgress : 1;

  return {
    progress,
    logoOpacity: progress,
    headerOpacity: progress,
    logoInteractive: progress > LOGO_INTERACTIVE_THRESHOLD,
  };
}
