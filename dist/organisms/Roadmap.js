/**
 * Roadmap Component
 * A timeline-style component for displaying learning or project steps with design guide styling
 */
import React from 'react';
export default function Roadmap(_ref) {
  var steps = _ref.steps;
  return /*#__PURE__*/ /*#__PURE__*/React.createElement(React.Fragment, null,
  /*#__PURE__*/
  /*#__PURE__*/
  React.createElement("h1", {
    className: " text-4xl font-bold mb-16 text-center bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent "
  }, "Learning Roadmap"),
  /*#__PURE__*/
  /*#__PURE__*/
  React.createElement("div", {
    className: " relative w-full max-w-4xl mx-auto py-16 "
  },
  /*#__PURE__*/
  /*#__PURE__*/
  React.createElement("div", {
    className: " absolute left-1/2 top-0 h-full w-1  bg-gradient-to-b from-cyan-500/30 via-purple-500/30 to-cyan-500/30 transform -translate-x-1/2 "
  }),
  /*#__PURE__*/
  /*#__PURE__*/
  React.createElement("div", {
    className: "space-y-16"
  }, steps.map(function (step, index) {
    var isLeftAligned = index % 2 === 0;
    return /*#__PURE__*/ /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "relative w-full flex"
    },
    /*#__PURE__*/
    /*#__PURE__*/
    React.createElement("div", {
      className: "w-1/2 pr-10 ".concat(isLeftAligned ? "" : "opacity-0 pointer-events-none")
    }, isLeftAligned &&
    /*#__PURE__*/
    /*#__PURE__*/
    React.createElement("div", {
      className: " bg-gray-900  p-6  rounded-lg border border-cyan-500/30 hover:border-cyan-400/60 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all "
    },
    /*#__PURE__*/
    /*#__PURE__*/
    React.createElement("h3", {
      className: " text-xl font-bold  text-cyan-300 mb-2 "
    }, step.title),
    /*#__PURE__*/
    /*#__PURE__*/
    React.createElement("p", {
      className: "mt-2 text-gray-400"
    }, step.description), step.additionalContent)),
    /*#__PURE__*/
    /*#__PURE__*/
    React.createElement("div", {
      className: " absolute left-1/2 top-4 w-6 h-6 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full border-4 border-gray-900 shadow-lg shadow-cyan-500/50 transform -translate-x-1/2 "
    }),
    /*#__PURE__*/
    /*#__PURE__*/
    React.createElement("div", {
      className: "w-1/2 pl-10 ".concat(!isLeftAligned ? "" : "opacity-0 pointer-events-none")
    }, !isLeftAligned &&
    /*#__PURE__*/
    /*#__PURE__*/
    React.createElement("div", {
      className: " bg-gray-900  p-6 rounded-lg border border-purple-500/30 hover:border-purple-400/60 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all "
    },
    /*#__PURE__*/
    /*#__PURE__*/
    React.createElement("h3", {
      className: " text-xl font-bold  text-purple-300 mb-2 "
    }, step.title),
    /*#__PURE__*/
    /*#__PURE__*/
    React.createElement("p", {
      className: "mt-2 text-gray-400"
    }, step.description), step.additionalContent)));
  }))));
}