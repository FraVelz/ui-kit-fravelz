/**
 * CurriculumFull — bloque de curriculum visible en pantallas estrechas.
 */
import type { CurriculumContentComponent } from "../types";
import { cn } from "../lib/cn";
import Title from "../molecules/Title";

export interface CurriculumFullProps {
  curriculumContent: CurriculumContentComponent;
}

export default function CurriculumFull({
  curriculumContent: CurriculumContent,
}: CurriculumFullProps) {
  return (
    <>
      <Title headingLevel="h2" className="2xl:hidden">
        Curriculum
      </Title>
      <CurriculumContent
        className={cn(
          "mb-4 list-decimal rounded-md border border-gray-200/80 bg-white p-4 2xl:hidden",
          "dark:border-transparent dark:bg-gray-900"
        )}
      />
    </>
  );
}
