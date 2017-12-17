"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 8vh;\n  font-family: \"Bebas Neue\";\n  font-size: 4vh;\n  color: #4B3A71;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 8vh;\n  font-family: \"Bebas Neue\";\n  font-size: 4vh;\n  color: #4B3A71;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  display: flex;\n  justify-content: flex-end;\n  width: 50vw;\n  margin-right: 2vw;\n"], ["\n  display: flex;\n  justify-content: flex-end;\n  width: 50vw;\n  margin-right: 2vw;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  margin-left: 2vw;\n"], ["\n  margin-left: 2vw;\n"]);

var AppHeader = _styledComponents2.default.div(_templateObject);

var HeaderLinks = _styledComponents2.default.div(_templateObject2);

var MenuItem = _styledComponents2.default.div(_templateObject3);

var isProd = process.env.NODE_ENV === "production";
var prefix = isProd ? "" : "";
var links = [{ href: prefix + "magic", text: "Magic" }, { href: prefix + "about", text: "About" }];
var home = prefix + "/";

var Header = function Header(_ref) {
  var currentUrl = _ref.currentUrl;
  return _react2.default.createElement(AppHeader, null, _react2.default.createElement(_link2.default, { prefetch: true, key: home, href: home }, _react2.default.createElement("div", null, "FullStory Challenge!")), _react2.default.createElement(HeaderLinks, null, links.map(function (link) {
    return _react2.default.createElement(MenuItem, null, _react2.default.createElement(_link2.default, { prefetch: true, key: link.href, href: link.href }, _react2.default.createElement("div", null, link.text)));
  })));
};

exports.default = Header;