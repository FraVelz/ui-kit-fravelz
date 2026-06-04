import { Outlet } from "react-router-dom";
import { Container } from "../../../kit";
import { useLocale } from "../../../i18n/LocaleContext";
import { getDocSections } from "../../../i18n/localize-doc";
import { DocSidebar } from "./ui";

export default function DocsLayout() {
  const { locale } = useLocale();
  const sections = getDocSections(locale);

  return (
    <Container size="md" className="py-6 sm:py-8 md:py-10">
      <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,220px)_1fr] lg:gap-10">
        <aside className="hidden lg:block">
          <DocSidebar sections={sections} />
        </aside>

        <div className="min-w-0 overflow-x-hidden">
          <Outlet />
        </div>
      </div>
    </Container>
  );
}
