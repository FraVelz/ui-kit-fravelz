import { useEffect, useState } from "react";

const SCROLL_RANGE_PX = 100;
const LOGO_INTERACTIVE_THRESHOLD = 0.05;

export function useHeaderScroll(enabled: boolean) {
  const [progress, setProgress] = useState(enabled ? 0 : 1);

  useEffect(() => {
    if (!enabled) {
      setProgress(1);
      return;
    }

    const handleScroll = () => {
      const next = Math.min(window.scrollY / SCROLL_RANGE_PX, 1);
      setProgress(next);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enabled]);

  return {
    progress,
    logoOpacity: progress,
    headerOpacity: progress,
    logoInteractive: progress > LOGO_INTERACTIVE_THRESHOLD,
  };
}
