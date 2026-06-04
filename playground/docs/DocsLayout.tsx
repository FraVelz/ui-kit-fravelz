import { Outlet } from "react-router-dom";
import { Container } from "../kit";
import { DOC_SECTIONS } from "./registry";
import { DocSidebar } from "./ui";

export default function DocsLayout() {
  return (
    <Container size="lg" className="py-10">
      <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block">
          <DocSidebar sections={DOC_SECTIONS} />
        </aside>

        <div className="min-w-0">
          <Outlet />
        </div>
      </div>
    </Container>
  );
}
