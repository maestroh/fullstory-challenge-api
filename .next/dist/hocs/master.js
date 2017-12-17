"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _head = require("next\\dist\\lib\\head.js");

var _head2 = _interopRequireDefault(_head);

var _index = require("next\\dist\\lib\\router\\index.js");

var _index2 = _interopRequireDefault(_index);

var _styledComponents = require("styled-components");

var _header = require("../components/header");

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\p\\fullstory-challenge-api\\hocs\\master.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  @font-face {\n  font-family: \"Bebas Neue\";\n  src: url('static/BebasNeue-webfont.woff') format('woff');\n  font-weight: thin;\n  font-style: thin;\n}\n"], ["\n  @font-face {\n  font-family: \"Bebas Neue\";\n  src: url('static/BebasNeue-webfont.woff') format('woff');\n  font-weight: thin;\n  font-style: thin;\n}\n"]);

(0, _styledComponents.injectGlobal)(_templateObject);

exports.default = function (Page) {
  return function (_React$Component) {
    (0, _inherits3.default)(Master, _React$Component);

    (0, _createClass3.default)(Master, null, [{
      key: "getInitialProps",
      value: function getInitialProps(ctx) {
        var pageProps = Page.getInitialProps && Page.getInitialProps(ctx);
        return (0, _extends3.default)({}, pageProps, {
          currentUrl: ctx.pathname
        });
      }
    }]);

    function Master(props) {
      (0, _classCallCheck3.default)(this, Master);

      var _this = (0, _possibleConstructorReturn3.default)(this, (Master.__proto__ || (0, _getPrototypeOf2.default)(Master)).call(this, props));

      _this.logout = _this.logout.bind(_this);
      return _this;
    }

    (0, _createClass3.default)(Master, [{
      key: "logout",
      value: function logout(eve) {
        if (eve.key === "logout") {
          _index2.default.push("/?logout=" + eve.newValue);
        }
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        window.addEventListener("storage", this.logout, false);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener("storage", this.logout, false);
      }
    }, {
      key: "render",
      value: function render() {
        return _react2.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, _react2.default.createElement(_head2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, _react2.default.createElement("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }), _react2.default.createElement("title", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }, "FullStory Challenge!"), _react2.default.createElement("link", { rel: "shortcut icon", href: "static/favicon.ico", __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }), _react2.default.createElement("script", { src: "static/scripts.js", __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }), _react2.default.createElement("link", { href: "https://fonts.googleapis.com/css?family=Nunito+Sans", rel: "stylesheet", __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        })), _react2.default.createElement(_header2.default, (0, _extends3.default)({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        })), _react2.default.createElement(Page, (0, _extends3.default)({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        })));
      }
    }]);

    return Master;
  }(_react2.default.Component);
};