/**
 * Link Component
 * A custom link component with smooth scrolling for in-page anchors and design guide styling
 */
import React from "react";
export default function Link(_ref) {
  var href = _ref.href,
    children = _ref.children,
    _ref$target = _ref.target,
    target = _ref$target === void 0 ? "_self" : _ref$target,
    className = _ref.className,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "default" : _ref$variant;
  var variants = {
    "default": "\n            text-cyan-300 \n            hover:text-cyan-200\n            underline\n            transition-colors\n        ",
    purple: "\n            text-purple-300 \n            hover:text-purple-200\n            underline\n            transition-colors\n        ",
    accent: "\n            text-cyan-400 \n            font-semibold\n            hover:text-cyan-300\n            underline\n            transition-colors\n        "
  };
  var handleClick = function handleClick(event) {
    // If it's an in-page anchor like #section, scroll to the element instead
    if (href && href.startsWith("#")) {
      event.preventDefault();
      var elementId = href.slice(1);
      var element = document.getElementById(elementId) || document.getElementsByName(elementId)[0];
      if (element) {
        // Account for a fixed header
        var header = document.querySelector("header");
        var offset = header ? header.offsetHeight + 8 : 8;
        var yPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: yPosition,
          behavior: "smooth"
        });
      } else {
        // Element not found — log for debugging
        console.warn("Anchor target not found:", href);
      }
    }
    // For external links or normal hrefs let the browser handle it
  };
  return /*#__PURE__*/ /*#__PURE__*/React.createElement("a", {
    href: href,
    target: target,
    draggable: "false",
    onClick: handleClick,
    className: "\n                select-none\n                ".concat(variants[variant], "\n                ").concat(className, "\n            ")
  }, children);
}