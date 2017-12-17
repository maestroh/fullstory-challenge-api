"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

var _master = require("../hocs/master");

var _master2 = _interopRequireDefault(_master);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = require("../components/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/nael/p/fullstory-challenge/pages/index.js?entry";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  margin-top: 3vh;\n  display: grid;\n  margin-left: 5vw;\n  grid-template-columns: 30vw 30vw 30vw;\n  grid-gap: 1vw;\n"], ["\n  margin-top: 3vh;\n  display: grid;\n  margin-left: 5vw;\n  grid-template-columns: 30vw 30vw 30vw;\n  grid-gap: 1vw;\n"]);

var Items = _styledComponents2.default.div(_templateObject);

var Index = function Index() {
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_styles.H1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Taking on the FullStory Challenge!"), _react2.default.createElement(Items, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement(_styles.H2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "CAPTURE EVERYTHING"), _react2.default.createElement(_styles.P, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "Every click, keypress, page transition and more - automatically indexed and easily accessible to any team with a stake in the customer\u2019s success.")), _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement(_styles.H2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "FAST AND INTUITIVE"), _react2.default.createElement(_styles.P, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "OmniSearch helps you find customers, identify rage clicks, summon page analytics, build funnels and more instantly. Just start typing.")), _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement(_styles.H2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "SMART FRUSTRATION DETECTION"), _react2.default.createElement(_styles.P, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "FullStory intelligently surfaces key moments of potential user frustration. Rage, Error and Dead clicks magically bring different aspects of a faulty UI to light\u2014and show you how to improve."))));
};

exports.default = (0, _master2.default)(Index);