/**
 * CurriculumAside — barra lateral de curriculum en pantallas anchas.
 */
import type { ReactNode } from "react";
import type { CurriculumContentComponent } from "../types";
import { cn } from "../lib/cn";
import Title from "../molecules/Title";

export interface CurriculumAsideProps {
  children: ReactNode;
  curriculumContent: CurriculumContentComponent;
}

export default function CurriculumAside({
  children,
  curriculumContent: CurriculumContent,
}: CurriculumAsideProps) {
  return (
    <aside className="hidden 2xl:block sticky top-5 self-start w-4/5 min-w-72">
      <Title headingLevel="h2" className="select-none">
        Curriculum
      </Title>
      <CurriculumContent
        className={cn(
          "bg-white border border-gray-200/80 rounded-md p-4 mb-4 list-decimal h-fit overflow-y-auto",
          "dark:bg-gray-900 dark:border-transparent",
          "max-h-[80vh]"
        )}
      >
        {children}
      </CurriculumContent>
    </aside>
  );
}
