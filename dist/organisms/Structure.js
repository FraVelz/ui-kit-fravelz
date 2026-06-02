/**
 * Structure Component and Related Components
 * Layout components for organizing page structure and curriculum/syllabus display
 */
import React from "react";
import { cn } from "../lib/cn";
import Title from "../molecules/Title";
export default function Structure(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-gray-900 rounded-2xl h-fit min-w-2/4 hyphens-auto break-words p-4"
  }, children);
}
export function CurriculumAside(_ref2) {
  var children = _ref2.children,
    CurriculumContent = _ref2.curriculumContent;
  return /*#__PURE__*/React.createElement("aside", {
    className: "hidden 2xl:block sticky top-5 self-start w-4/5 min-w-72"
  }, /*#__PURE__*/React.createElement(Title, {
    headingLevel: "h2",
    className: "select-none"
  }, "Curriculum"), /*#__PURE__*/React.createElement(CurriculumContent, {
    className: cn("bg-gray-900 rounded-md p-4 mb-4 list-decimal h-fit overflow-y-auto", "max-h-[80vh]")
  }, children), children);
}
export function CurriculumFull(_ref3) {
  var CurriculumContent = _ref3.curriculumContent;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Title, {
    headingLevel: "h2",
    className: "2xl:hidden"
  }, "Curriculum"), /*#__PURE__*/React.createElement(CurriculumContent, {
    className: "bg-gray-900 rounded-md p-4 mb-4 list-decimal 2xl:hidden"
  }));
}