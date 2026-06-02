/**
 * Table Component
 * A collection of components for building responsive tables with design guide styling
 */
import React from 'react';
export var Table = function Table(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className;
  return /*#__PURE__*/<div className={"\n            m-4\n            h-fit\n            overflow-x-auto\n            rounded-lg \n            border border-cyan-500/30\n            hover:border-cyan-400/60\n            transition-colors\n            ".concat(className, "\n        ")}>{/*#__PURE__*/<table className={"\n                    w-full text-left\n                    border-collapse\n                    bg-gray-900\n                "}>{children}</table>}</div>;
};
export var TableHeader = function TableHeader(_ref2) {
  var _ref2$headers = _ref2.headers,
    headers = _ref2$headers === void 0 ? [] : _ref2$headers;
  return /*#__PURE__*/<thead className={" bg-gray-800  text-cyan-300 uppercase text-xs font-semibold border-b border-cyan-500/30 "}>{/*#__PURE__*/<tr>{headers.map(function (header, index) {
        return /*#__PURE__*/<th key={index} className={" px-4 py-4 "}>{header}</th>;
      })}</tr>}</thead>;
};
export var TableRow = function TableRow(_ref3) {
  var children = _ref3.children,
    _ref3$enableHover = _ref3.enableHover,
    enableHover = _ref3$enableHover === void 0 ? true : _ref3$enableHover;
  return /*#__PURE__*/<tr className={"\n                border-b border-gray-700/50\n                ".concat(enableHover ? "hover:bg-gray-800/50 transition-colors" : "", " \n                text-gray-300\n            ")}>{children}</tr>;
};
export var TableCell = function TableCell(_ref4) {
  var children = _ref4.children,
    _ref4$alignment = _ref4.alignment,
    alignment = _ref4$alignment === void 0 ? "left" : _ref4$alignment;
  return /*#__PURE__*/<td className={"\n                px-4 py-3\n                text-".concat(alignment, " text-sm\n            ")}>{children}</td>;
};
export default function ExampleTable() {
  var tableHeaders = ["Name", "Email", "Role", "Status"];
  var tableData = [{
    name: "Carlos Pérez",
    email: "carlos@example.com",
    role: "Admin",
    status: "Active"
  }, {
    name: "Laura Gómez",
    email: "laura@example.com",
    role: "Editor",
    status: "Inactive"
  }];
  return /*#__PURE__*/<Table className={"max-w-4xl mx-auto"}>{/*#__PURE__*/<TableHeader headers={tableHeaders} />}{/*#__PURE__*/<tbody>{tableData.map(function (user, index) {
        return /*#__PURE__*/<TableRow key={index}>{/*#__PURE__*/<TableCell>{user.name}</TableCell>}{/*#__PURE__*/<TableCell>{user.email}</TableCell>}{/*#__PURE__*/<TableCell>{user.role}</TableCell>}{/*#__PURE__*/<TableCell>{/*#__PURE__*/<span className={"px-3 py-1 rounded-full text-xs font-semibold ".concat(user.status === "Active" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "bg-gray-700/40 text-gray-400 border border-gray-600/40")}>{user.status}</span>}</TableCell>}</TableRow>;
      })}</tbody>}</Table>;
}