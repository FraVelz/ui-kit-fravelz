/**
 * Structure Component and Related Components
 * Layout components for organizing page structure and curriculum/syllabus display
 */
import type { ReactNode } from "react";
import type { CurriculumContentComponent } from "../types";
import { cn } from "../lib/cn";
import Title from "../molecules/Title";

export interface StructureProps {
  children: ReactNode;
  className?: string;
}

export default function Structure({ children, className = "" }: StructureProps) {
  return (
    <div
      className={cn(
        "bg-gray-900 rounded-2xl h-fit min-w-2/4 hyphens-auto break-words p-4",
        className
      )}
    >
      {children}
    </div>
  );
}

export interface CurriculumAsideProps {
  children: ReactNode;
  curriculumContent: CurriculumContentComponent;
}

export function CurriculumAside({
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

export interface CurriculumFullProps {
  curriculumContent: CurriculumContentComponent;
}

export function CurriculumFull({ curriculumContent: CurriculumContent }: CurriculumFullProps) {
  return (
    <>
      <Title headingLevel="h2" className="2xl:hidden">
        Curriculum
      </Title>
      <CurriculumContent className="bg-gray-900 rounded-md p-4 mb-4 list-decimal 2xl:hidden" />
    </>
  );
}
