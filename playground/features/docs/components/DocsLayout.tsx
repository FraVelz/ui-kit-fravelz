import { Outlet } from "react-router-dom";
import { Container } from "../../../kit";
import { useLocale } from "../../../i18n/LocaleContext";
import { getDocSections } from "../../../i18n/localize-doc";
import { DocSidebar } from "./ui";

export default function DocsLayout() {
  const { locale } = useLocale();
  const sections = getDocSections(locale);

  return (
    <Container size="xl" className="py-10">
      <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block">
          <DocSidebar sections={sections} />
        </aside>

        <div className="min-w-0">
          <Outlet />
        </div>
      </div>
    </Container>
  );
}
