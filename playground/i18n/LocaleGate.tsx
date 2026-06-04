import { Navigate, Outlet, useParams } from "react-router-dom";
import { DEFAULT_LOCALE, type Locale } from "./types";

function isLocale(value: string | undefined): value is Locale {
  return value === "es" || value === "en";
}

export default function LocaleGate() {
  const { locale } = useParams();

  if (!isLocale(locale)) {
    return <Navigate to={`/${DEFAULT_LOCALE}`} replace />;
  }

  return <Outlet />;
}
