import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { DOCS_HOME } from "../../features/docs/paths";

type HeaderComponentsCtaProps = {
  children: ReactNode;
};

export default function HeaderComponentsCta({ children }: HeaderComponentsCtaProps) {
  return (
    <NavLink
      to={DOCS_HOME}
      className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-500 hover:to-purple-500 shadow-md shadow-cyan-500/25 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
    >
      {children}
    </NavLink>
  );
}
