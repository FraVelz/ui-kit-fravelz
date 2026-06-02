/**
 * Structure Component and Related Components
 * Layout components for organizing page structure and curriculum/syllabus display
 */
import React from 'react';
import Title from "../molecules/Title";

/**
 * Structure Component
 * Main container for page content
 */
function Structure({
  children
}) {
  return /*#__PURE__*/<div className={" bg-gray-900 rounded-2xl h-fit min-w-2/4 hyphens-auto break-words p-4 "}>{children}</div>;
}

/**
 * CurriculumAside Component
 * Sidebar for displaying curriculum on larger screens (2xl and up)
 */
function CurriculumAside(_ref2) {
  var children = _ref2.children,
    CurriculumContent = _ref2.curriculumContent;
  return /*#__PURE__*/<aside className={" hidden 2xl:block sticky top-5 self-start w-4/5 min-w-72 "}>{/*#__PURE__*/<Title headingLevel={"h2"} className={"select-none"}>Curriculum</Title>}{/*#__PURE__*/<CurriculumContent className={"\n                    bg-gray-900\n                    rounded-md\n                    p-4 mb-4\n                    list-decimal\n                    h-fit\n                    max-h-[80vh]     /* maximum height 80% of viewport */\n                    overflow-y-auto  /* vertical scroll */\n                "}>{children}</CurriculumContent>}{children}</aside>;
}

/**
 * CurriculumFull Component
 * Full-width curriculum display for smaller screens
 */
function CurriculumFull(_ref3) {
  var CurriculumContent = _ref3.curriculumContent;
  return /*#__PURE__*/<>{/*#__PURE__*/<Title headingLevel={"h2"} className={"2xl:hidden"}>Curriculum</Title>}{/*#__PURE__*/<CurriculumContent className={" bg-gray-900 rounded-md p-4 mb-4 list-decimal 2xl:hidden "} />}</>;
}
export default Structure;
export { CurriculumAside, CurriculumFull };