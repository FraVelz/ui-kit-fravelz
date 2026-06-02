/**
 * Structure Component and Related Components
 * Layout components for organizing page structure and curriculum/syllabus display
 */
import React from "react";
import { cn } from "../lib/cn";
import Title from "../molecules/Title";

export default function Structure({ children }) {
  return (
    <div className="bg-gray-900 rounded-2xl h-fit min-w-2/4 hyphens-auto break-words p-4">
      {children}
    </div>
  );
}

export function CurriculumAside({ children, curriculumContent: CurriculumContent }) {
  return (
    <aside className="hidden 2xl:block sticky top-5 self-start w-4/5 min-w-72">
      <Title headingLevel="h2" className="select-none">
        Curriculum
      </Title>
      <CurriculumContent
        className={cn(
          "bg-gray-900 rounded-md p-4 mb-4 list-decimal h-fit overflow-y-auto",
          "max-h-[80vh]"
        )}
      >
        {children}
      </CurriculumContent>
      {children}
    </aside>
  );
}

export function CurriculumFull({ curriculumContent: CurriculumContent }) {
  return (
    <>
      <Title headingLevel="h2" className="2xl:hidden">
        Curriculum
      </Title>
      <CurriculumContent className="bg-gray-900 rounded-md p-4 mb-4 list-decimal 2xl:hidden" />
    </>
  );
}
