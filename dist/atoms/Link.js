/**
 * Link Component
 * A custom link component with smooth scrolling for in-page anchors and design guide styling
 */
import React from "react";
import { cn } from "../lib/cn";
import { focusLinkCyan, focusLinkPurple } from "../lib/focus";
export default function Link(_ref) {
  var href = _ref.href,
    children = _ref.children,
    _ref$target = _ref.target,
    target = _ref$target === void 0 ? "_self" : _ref$target,
    className = _ref.className,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "default" : _ref$variant;
  var handleClick = function handleClick(event) {
    if (!(href !== null && href !== void 0 && href.startsWith("#"))) {
      return;
    }
    event.preventDefault();
    var elementId = href.slice(1);
    var element = document.getElementById(elementId) || document.getElementsByName(elementId)[0];
    if (!element) {
      console.warn("Anchor target not found:", href);
      return;
    }
    var header = document.querySelector("header");
    var offset = header ? header.offsetHeight + 8 : 8;
    var yPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top: yPosition,
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    target: target,
    draggable: false,
    onClick: handleClick,
    className: cn("select-none underline transition-colors", variant === "default" && cn("text-cyan-300 hover:text-cyan-200", focusLinkCyan), variant === "purple" && cn("text-purple-300 hover:text-purple-200", focusLinkPurple), variant === "accent" && cn("text-cyan-400 font-semibold hover:text-cyan-300", focusLinkCyan), className)
  }, children);
}