/**
 * Message Component
 * A modal message component using React portals with design guide styling
 */
import React from "react";
import { createPortal } from "react-dom";
function Message(_ref) {
  var children = _ref.children,
    onClose = _ref.onClose,
    title = _ref.title,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "default" : _ref$variant;
  var variantStyles = {
    default: "bg-gray-900 border-cyan-500/30",
    success: "bg-gray-900 border-cyan-500/30",
    warning: "bg-gray-900 border-purple-500/30",
    error: "bg-gray-900 border-purple-500/30",
  };
  return /*#__PURE__*/ createPortal(
    /*#__PURE__*/ <div
      className={
        " bg-black/60 backdrop-blur-sm cursor-default z-50 fixed inset-0 flex items-center justify-center p-4 "
      }
    >
      {
        /*#__PURE__*/ <div
          className={"\n                    rounded-xl \n                    border-2\n                    hover:border-cyan-400/60\n                    lg:w-2/4\n                    md:w-3/4\n                    p-6 \n                    shadow-2xl \n                    shadow-cyan-500/10\n                    text-center\n                    transition-all\n                    ".concat(
            variantStyles[variant],
            "\n                "
          )}
        >
          {title && (
            /*#__PURE__*/ <h2
              className={
                " text-2xl font-bold mb-4 bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent "
              }
            >
              {title}
            </h2>
          )}
          {/*#__PURE__*/ <div className={"max-w-screen p-4 text-gray-300"}>{children}</div>}
          {
            /*#__PURE__*/ <button
              onClick={onClose}
              className={
                " mt-6 bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-500 hover:to-purple-500 cursor-pointer px-6 py-2 rounded-full transition-all font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 "
              }
            >
              Close
            </button>
          }
        </div>
      }
    </div>,
    document.body
  );
}
export default Message;
