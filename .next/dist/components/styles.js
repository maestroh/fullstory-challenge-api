"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.P = exports.H2 = exports.H1 = undefined;

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\ndisplay: flex;\njustify-content: space-between;\nwidth: 100%;\nmargin-bottom: 3vh;\nfont-family: \"Bebas Neue\";\nfont-size: 4vh;\ncolor: #1c0e3c;\ntext-align:center;\ndisplay:block;\n"], ["\ndisplay: flex;\njustify-content: space-between;\nwidth: 100%;\nmargin-bottom: 3vh;\nfont-family: \"Bebas Neue\";\nfont-size: 4vh;\ncolor: #1c0e3c;\ntext-align:center;\ndisplay:block;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\nmargin-bottom: 1vh;\nfont-family: \"Nunito Sans\", sans-serif;\nfont-size: 2vh;\ncolor: #1c0e3c;\n"], ["\nmargin-bottom: 1vh;\nfont-family: \"Nunito Sans\", sans-serif;\nfont-size: 2vh;\ncolor: #1c0e3c;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\nfont-family: \"Nunito Sans\", sans-serif;\ncolor: #4b3a71;\n"], ["\nfont-family: \"Nunito Sans\", sans-serif;\ncolor: #4b3a71;\n"]);

var H1 = exports.H1 = _styledComponents2.default.h1(_templateObject);

var H2 = exports.H2 = _styledComponents2.default.h2(_templateObject2);

var P = exports.P = _styledComponents2.default.p(_templateObject3);