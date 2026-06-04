import { Outlet } from "react-router-dom";
import { cn, Container } from "../../../kit";
import { useLocale } from "../../../i18n/LocaleContext";
import { getDocSections } from "../../../i18n/localize-doc";
import DocSidebar from "./DocSidebar";

export default function DocsLayout() {
  const { locale } = useLocale();
  const sections = getDocSections(locale);

  return (
    <Container size="md" className="py-6 sm:py-8 md:py-10">
      <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,220px)_1fr] lg:gap-10">
        <aside
          className={cn(
            "hidden lg:sticky lg:top-24 lg:z-40 lg:block lg:self-start lg:overflow-y-auto",
            "lg:max-h-[calc(100vh-6rem)]"
          )}
        >
          <DocSidebar sections={sections} />
        </aside>

        <div className="min-w-0 overflow-x-hidden">
          <Outlet />
        </div>
      </div>
    </Container>
  );
}
