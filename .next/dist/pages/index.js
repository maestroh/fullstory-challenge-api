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

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  margin-top: 3vh;\n  display: grid;\n  margin-left: 5vw;\n  grid-template-columns: 30vw 30vw 30vw;\n  grid-gap: 1vw;\n"], ["\n  margin-top: 3vh;\n  display: grid;\n  margin-left: 5vw;\n  grid-template-columns: 30vw 30vw 30vw;\n  grid-gap: 1vw;\n"]);

var Items = _styledComponents2.default.div(_templateObject);

var Index = function Index() {
  return _react2.default.createElement("div", null, _react2.default.createElement(_styles.H1, null, "Taking on the FullStory Challenge!"), _react2.default.createElement(Items, null, _react2.default.createElement("div", null, _react2.default.createElement(_styles.H2, null, "CAPTURE EVERYTHING"), _react2.default.createElement(_styles.P, null, "Every click, keypress, page transition and more - automatically indexed and easily accessible to any team with a stake in the customer\u2019s success.")), _react2.default.createElement("div", null, _react2.default.createElement(_styles.H2, null, "FAST AND INTUITIVE"), _react2.default.createElement(_styles.P, null, "OmniSearch helps you find customers, identify rage clicks, summon page analytics, build funnels and more instantly. Just start typing.")), _react2.default.createElement("div", null, _react2.default.createElement(_styles.H2, null, "SMART FRUSTRATION DETECTION"), _react2.default.createElement(_styles.P, null, "FullStory intelligently surfaces key moments of potential user frustration. Rage, Error and Dead clicks magically bring different aspects of a faulty UI to light\u2014and show you how to improve."))));
};

exports.default = (0, _master2.default)(Index);