/**
 * Divider Component
 * A flexible divider component with multiple variants
 */
import React from "react";
export default function Divider(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "default" : _ref$variant,
    _ref$orientation = _ref.orientation,
    orientation = _ref$orientation === void 0 ? "horizontal" : _ref$orientation,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? null : _ref$label,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "md" : _ref$size;
  var sizes = {
    sm: "my-3",
    md: "my-6",
    lg: "my-12",
  };
  var variants = {
    default: "border-gray-700",
    cyan: "border-cyan-500/30 hover:border-cyan-500/60",
    purple: "border-purple-500/30 hover:border-purple-500/60",
    dotted: "border-dashed border-gray-600",
    gradient: "border-gradient-to-r from-transparent via-cyan-500/30 to-transparent",
  };
  if (orientation === "vertical") {
    return (
      /*#__PURE__*/ <div
        className={"\n                    h-12 border-l-2\n                    "
          .concat(
            variants[variant],
            "\n                    transition-colors\n                    "
          )
          .concat(className, "\n                ")}
      />
    );
  }
  return (
    /*#__PURE__*/ <div
      className={"\n                w-full\n                flex items-center gap-3\n                "
        .concat(sizes[size], "\n                ")
        .concat(className, "\n            ")}
    >
      {
        /*#__PURE__*/ <hr
          className={"\n                flex-1\n                border-2\n                ".concat(
            variants[variant],
            "\n                transition-colors\n            "
          )}
        />
      }
      {label && (
        /*#__PURE__*/ <>
          {/*#__PURE__*/ <span className={"text-gray-500 text-sm whitespace-nowrap"}>{label}</span>}
          {
            /*#__PURE__*/ <hr
              className={"\n                        flex-1\n                        border-2\n                        ".concat(
                variants[variant],
                "\n                        transition-colors\n                    "
              )}
            />
          }
        </>
      )}
    </div>
  );
}
