/**
 * Table Component
 * A collection of components for building responsive tables with design guide styling
 */
import React from 'react';
export var Table = function Table(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className;
  return /*#__PURE__*/ /*#__PURE__*/React.createElement("div", {
    className: "\n            m-4\n            h-fit\n            overflow-x-auto\n            rounded-lg \n            border border-cyan-500/30\n            hover:border-cyan-400/60\n            transition-colors\n            ".concat(className, "\n        ")
  },
  /*#__PURE__*/
  /*#__PURE__*/
  React.createElement("table", {
    className: "\n                    w-full text-left\n                    border-collapse\n                    bg-gray-900\n                "
  }, children));
};
export var TableHeader = function TableHeader(_ref2) {
  var _ref2$headers = _ref2.headers,
    headers = _ref2$headers === void 0 ? [] : _ref2$headers;
  return /*#__PURE__*/ /*#__PURE__*/React.createElement("thead", {
    className: " bg-gray-800  text-cyan-300 uppercase text-xs font-semibold border-b border-cyan-500/30 "
  },
  /*#__PURE__*/
  /*#__PURE__*/
  React.createElement("tr", null, headers.map(function (header, index) {
    return /*#__PURE__*/ /*#__PURE__*/React.createElement("th", {
      key: index,
      className: " px-4 py-4 "
    }, header);
  })));
};
export var TableRow = function TableRow(_ref3) {
  var children = _ref3.children,
    _ref3$enableHover = _ref3.enableHover,
    enableHover = _ref3$enableHover === void 0 ? true : _ref3$enableHover;
  return /*#__PURE__*/ /*#__PURE__*/React.createElement("tr", {
    className: "\n                border-b border-gray-700/50\n                ".concat(enableHover ? "hover:bg-gray-800/50 transition-colors" : "", " \n                text-gray-300\n            ")
  }, children);
};
export var TableCell = function TableCell(_ref4) {
  var children = _ref4.children,
    _ref4$alignment = _ref4.alignment,
    alignment = _ref4$alignment === void 0 ? "left" : _ref4$alignment;
  return /*#__PURE__*/ /*#__PURE__*/React.createElement("td", {
    className: "\n                px-4 py-3\n                text-".concat(alignment, " text-sm\n            ")
  }, children);
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
  return /*#__PURE__*/ /*#__PURE__*/React.createElement(Table, {
    className: "max-w-4xl mx-auto"
  },
  /*#__PURE__*/
  /*#__PURE__*/
  React.createElement(TableHeader, {
    headers: tableHeaders
  }),
  /*#__PURE__*/
  /*#__PURE__*/
  React.createElement("tbody", null, tableData.map(function (user, index) {
    return /*#__PURE__*/ /*#__PURE__*/React.createElement(TableRow, {
      key: index
    },
    /*#__PURE__*/
    /*#__PURE__*/
    React.createElement(TableCell, null, user.name),
    /*#__PURE__*/
    /*#__PURE__*/
    React.createElement(TableCell, null, user.email),
    /*#__PURE__*/
    /*#__PURE__*/
    React.createElement(TableCell, null, user.role),
    /*#__PURE__*/
    /*#__PURE__*/
    React.createElement(TableCell, null,
    /*#__PURE__*/
    /*#__PURE__*/
    React.createElement("span", {
      className: "px-3 py-1 rounded-full text-xs font-semibold ".concat(user.status === "Active" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "bg-gray-700/40 text-gray-400 border border-gray-600/40")
    }, user.status)));
  })));
}