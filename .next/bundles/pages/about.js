
          window.__NEXT_REGISTER_PAGE('/about', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(549);


/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(543);

var _link2 = _interopRequireDefault(_link);

var _master = __webpack_require__(561);

var _master2 = _interopRequireDefault(_master);

var _styles = __webpack_require__(574);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/nael/p/fullstory-challenge/pages/about.js?entry";


var Index = function Index() {
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_styles.H2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Hi! I'm Nael"), _react2.default.createElement(_styles.P, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "In my current position, I'm responsible for the entire development process starting with sales meetings and creating estimates to developing architectures and working along side my teams to build and deliver software. I'm also responsible for overseeing technical solutions created by other architects and oversight of our standard development process"), _react2.default.createElement(_styles.P, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "My specialization is in building enterprise solutions. I've built CRM systems, video conferencing platforms, multitenant platforms and more. I have a background in multiple technologies including Node and .NET. I've delivered multiple projects on AWS and on-premises hosted solutions. I have a Master's degree in Software Engineering, I've been certified as a Scrum Master, and I've gone through a Sherpa leadership training program."), _react2.default.createElement(_styles.P, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "I have 14 years experience in software development and I've been leading teams for the past 5 years. A few years ago, I moved to Atlanta to open an office and extend our software development team for my last company."));
};

exports.default = (0, _master2.default)(Index);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/nael/p/fullstory-challenge/pages/about.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/nael/p/fullstory-challenge/pages/about.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(70)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/about")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _extends2 = __webpack_require__(112);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = __webpack_require__(541);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(226);

var _head2 = _interopRequireDefault(_head);

var _index = __webpack_require__(71);

var _index2 = _interopRequireDefault(_index);

var _styledComponents = __webpack_require__(542);

var _header = __webpack_require__(573);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/nael/p/fullstory-challenge/hocs/master.js";

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/nael/p/fullstory-challenge/hocs/master.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/nael/p/fullstory-challenge/hocs/master.js"); } } })();

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(541);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(63);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _link = __webpack_require__(543);

var _link2 = _interopRequireDefault(_link);

var _styledComponents = __webpack_require__(542);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/nael/p/fullstory-challenge/components/header.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 8vh;\n  font-family: \"Bebas Neue\";\n  font-size: 4vh;\n  color: #4B3A71;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 8vh;\n  font-family: \"Bebas Neue\";\n  font-size: 4vh;\n  color: #4B3A71;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  display: flex;\n  justify-content: flex-end;\n  width: 50vw;\n  margin-right: 2vw;\n"], ["\n  display: flex;\n  justify-content: flex-end;\n  width: 50vw;\n  margin-right: 2vw;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  margin-left: 2vw;\n"], ["\n  margin-left: 2vw;\n"]);

var AppHeader = _styledComponents2.default.div(_templateObject);

var HeaderLinks = _styledComponents2.default.div(_templateObject2);

var MenuItem = _styledComponents2.default.div(_templateObject3);

var links = [{ href: "/magic", text: "Magic" }, { href: "/about", text: "About" }];

var Header = function Header(_ref) {
  var currentUrl = _ref.currentUrl;
  return _react2.default.createElement(AppHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, key: "/", href: "/", __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "FullStory Challenge!")), _react2.default.createElement(HeaderLinks, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, links.map(function (link) {
    return _react2.default.createElement(MenuItem, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      }
    }, _react2.default.createElement(_link2.default, { prefetch: true, key: link.href, href: link.href, __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      }
    }, _react2.default.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      }
    }, link.text)));
  })));
};

Header.propTypes = {
  currentUrl: _propTypes2.default.string.isRequired
};

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/nael/p/fullstory-challenge/components/header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/nael/p/fullstory-challenge/components/header.js"); } } })();

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.P = exports.H2 = exports.H1 = undefined;

var _taggedTemplateLiteral2 = __webpack_require__(541);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = __webpack_require__(542);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\ndisplay: flex;\njustify-content: space-between;\nwidth: 100%;\nmargin-bottom: 3vh;\nfont-family: \"Bebas Neue\";\nfont-size: 4vh;\ncolor: #1c0e3c;\ntext-align:center;\ndisplay:block;\n"], ["\ndisplay: flex;\njustify-content: space-between;\nwidth: 100%;\nmargin-bottom: 3vh;\nfont-family: \"Bebas Neue\";\nfont-size: 4vh;\ncolor: #1c0e3c;\ntext-align:center;\ndisplay:block;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\nmargin-bottom: 1vh;\nfont-family: \"Nunito Sans\", sans-serif;\nfont-size: 2vh;\ncolor: #1c0e3c;\n"], ["\nmargin-bottom: 1vh;\nfont-family: \"Nunito Sans\", sans-serif;\nfont-size: 2vh;\ncolor: #1c0e3c;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\nfont-family: \"Nunito Sans\", sans-serif;\ncolor: #4b3a71;\n"], ["\nfont-family: \"Nunito Sans\", sans-serif;\ncolor: #4b3a71;\n"]);

var H1 = exports.H1 = _styledComponents2.default.h1(_templateObject);

var H2 = exports.H2 = _styledComponents2.default.h2(_templateObject2);

var P = exports.P = _styledComponents2.default.p(_templateObject3);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/nael/p/fullstory-challenge/components/styles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/nael/p/fullstory-challenge/components/styles.js"); } } })();

/***/ })

},[548]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9hYm91dC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2Fib3V0LmpzPzA5YjhmM2YiLCJ3ZWJwYWNrOi8vLy4vaG9jcy9tYXN0ZXIuanM/MDliOGYzZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcz80Zjg4MzY1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3R5bGVzLmpzPzRmODgzNjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IG1hc3RlciBmcm9tIFwiLi4vaG9jcy9tYXN0ZXJcIjtcbmltcG9ydCB7IEgxLCBIMiwgUCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3N0eWxlc1wiO1xuXG5sZXQgSW5kZXggPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEgyPkhpISBJJ20gTmFlbDwvSDI+XG4gICAgPFA+XG4gICAgICBJbiBteSBjdXJyZW50IHBvc2l0aW9uLCBJJ20gcmVzcG9uc2libGUgZm9yIHRoZSBlbnRpcmUgZGV2ZWxvcG1lbnQgcHJvY2Vzc1xuICAgICAgc3RhcnRpbmcgd2l0aCBzYWxlcyBtZWV0aW5ncyBhbmQgY3JlYXRpbmcgZXN0aW1hdGVzIHRvIGRldmVsb3BpbmdcbiAgICAgIGFyY2hpdGVjdHVyZXMgYW5kIHdvcmtpbmcgYWxvbmcgc2lkZSBteSB0ZWFtcyB0byBidWlsZCBhbmQgZGVsaXZlclxuICAgICAgc29mdHdhcmUuIEknbSBhbHNvIHJlc3BvbnNpYmxlIGZvciBvdmVyc2VlaW5nIHRlY2huaWNhbCBzb2x1dGlvbnMgY3JlYXRlZFxuICAgICAgYnkgb3RoZXIgYXJjaGl0ZWN0cyBhbmQgb3ZlcnNpZ2h0IG9mIG91ciBzdGFuZGFyZCBkZXZlbG9wbWVudCBwcm9jZXNzXG4gICAgPC9QPlxuICAgIDxQPlxuICAgICAgTXkgc3BlY2lhbGl6YXRpb24gaXMgaW4gYnVpbGRpbmcgZW50ZXJwcmlzZSBzb2x1dGlvbnMuIEkndmUgYnVpbHQgQ1JNXG4gICAgICBzeXN0ZW1zLCB2aWRlbyBjb25mZXJlbmNpbmcgcGxhdGZvcm1zLCBtdWx0aXRlbmFudCBwbGF0Zm9ybXMgYW5kIG1vcmUuIElcbiAgICAgIGhhdmUgYSBiYWNrZ3JvdW5kIGluIG11bHRpcGxlIHRlY2hub2xvZ2llcyBpbmNsdWRpbmcgTm9kZSBhbmQgLk5FVC4gSSd2ZVxuICAgICAgZGVsaXZlcmVkIG11bHRpcGxlIHByb2plY3RzIG9uIEFXUyBhbmQgb24tcHJlbWlzZXMgaG9zdGVkIHNvbHV0aW9ucy4gSVxuICAgICAgaGF2ZSBhIE1hc3RlcidzIGRlZ3JlZSBpbiBTb2Z0d2FyZSBFbmdpbmVlcmluZywgSSd2ZSBiZWVuIGNlcnRpZmllZCBhcyBhXG4gICAgICBTY3J1bSBNYXN0ZXIsIGFuZCBJJ3ZlIGdvbmUgdGhyb3VnaCBhIFNoZXJwYSBsZWFkZXJzaGlwIHRyYWluaW5nIHByb2dyYW0uXG4gICAgPC9QPlxuICAgIDxQPlxuICAgICAgSSBoYXZlIDE0IHllYXJzIGV4cGVyaWVuY2UgaW4gc29mdHdhcmUgZGV2ZWxvcG1lbnQgYW5kIEkndmUgYmVlbiBsZWFkaW5nXG4gICAgICB0ZWFtcyBmb3IgdGhlIHBhc3QgNSB5ZWFycy4gQSBmZXcgeWVhcnMgYWdvLCBJIG1vdmVkIHRvIEF0bGFudGEgdG8gb3BlbiBhblxuICAgICAgb2ZmaWNlIGFuZCBleHRlbmQgb3VyIHNvZnR3YXJlIGRldmVsb3BtZW50IHRlYW0gZm9yIG15IGxhc3QgY29tcGFueS5cbiAgICA8L1A+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgbWFzdGVyKEluZGV4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2Fib3V0LmpzP2VudHJ5IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGluamVjdEdsb2JhbCB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiO1xuXG5pbmplY3RHbG9iYWxgXG4gIEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJCZWJhcyBOZXVlXCI7XG4gIHNyYzogdXJsKCdzdGF0aWMvQmViYXNOZXVlLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogdGhpbjtcbiAgZm9udC1zdHlsZTogdGhpbjtcbn1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2UgPT5cbiAgY2xhc3MgTWFzdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xuICAgICAgY29uc3QgcGFnZVByb3BzID0gUGFnZS5nZXRJbml0aWFsUHJvcHMgJiYgUGFnZS5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnBhZ2VQcm9wcyxcbiAgICAgICAgY3VycmVudFVybDogY3R4LnBhdGhuYW1lXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgIHRoaXMubG9nb3V0ID0gdGhpcy5sb2dvdXQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBsb2dvdXQoZXZlKSB7XG4gICAgICBpZiAoZXZlLmtleSA9PT0gXCJsb2dvdXRcIikge1xuICAgICAgICBSb3V0ZXIucHVzaChgLz9sb2dvdXQ9JHtldmUubmV3VmFsdWV9YCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgdGhpcy5sb2dvdXQsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic3RvcmFnZVwiLCB0aGlzLmxvZ291dCwgZmFsc2UpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDx0aXRsZT5GdWxsU3RvcnkgQ2hhbGxlbmdlITwvdGl0bGU+XG4gICAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cInN0YXRpYy9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cInN0YXRpYy9zY3JpcHRzLmpzXCI+e308L3NjcmlwdD5cbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvK1NhbnNcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICA8SGVhZGVyIHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICAgIDxQYWdlIHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaG9jcy9tYXN0ZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBBcHBIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA4dmg7XG4gIGZvbnQtZmFtaWx5OiBcIkJlYmFzIE5ldWVcIjtcbiAgZm9udC1zaXplOiA0dmg7XG4gIGNvbG9yOiAjNEIzQTcxO1xuYDtcblxuY29uc3QgSGVhZGVyTGlua3MgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB3aWR0aDogNTB2dztcbiAgbWFyZ2luLXJpZ2h0OiAydnc7XG5gO1xuXG5jb25zdCBNZW51SXRlbSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiAydnc7XG5gO1xuXG5jb25zdCBsaW5rcyA9IFtcbiAgeyBocmVmOiBcIi9tYWdpY1wiLCB0ZXh0OiBcIk1hZ2ljXCIgfSxcbiAgeyBocmVmOiBcIi9hYm91dFwiLCB0ZXh0OiBcIkFib3V0XCIgfVxuXTtcblxuY29uc3QgSGVhZGVyID0gKHsgY3VycmVudFVybCB9KSA9PiAoXG4gIDxBcHBIZWFkZXI+XG4gICAgPExpbmsgcHJlZmV0Y2gga2V5PVwiL1wiIGhyZWY9XCIvXCI+XG4gICAgICA8ZGl2PkZ1bGxTdG9yeSBDaGFsbGVuZ2UhPC9kaXY+XG4gICAgPC9MaW5rPlxuICAgIDxIZWFkZXJMaW5rcz5cbiAgICAgIHtsaW5rcy5tYXAobGluayA9PiAoXG4gICAgICAgIDxNZW51SXRlbT5cbiAgICAgICAgICA8TGluayBwcmVmZXRjaCBrZXk9e2xpbmsuaHJlZn0gaHJlZj17bGluay5ocmVmfT5cbiAgICAgICAgICAgIDxkaXY+e2xpbmsudGV4dH08L2Rpdj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICApKX1cbiAgICA8L0hlYWRlckxpbmtzPlxuICA8L0FwcEhlYWRlcj5cbik7XG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGN1cnJlbnRVcmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9oZWFkZXIuanMiLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgSDEgPSBzdHlsZWQuaDFgXG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xud2lkdGg6IDEwMCU7XG5tYXJnaW4tYm90dG9tOiAzdmg7XG5mb250LWZhbWlseTogXCJCZWJhcyBOZXVlXCI7XG5mb250LXNpemU6IDR2aDtcbmNvbG9yOiAjMWMwZTNjO1xudGV4dC1hbGlnbjpjZW50ZXI7XG5kaXNwbGF5OmJsb2NrO1xuYDtcblxuZXhwb3J0IGNvbnN0IEgyID0gc3R5bGVkLmgyYFxubWFyZ2luLWJvdHRvbTogMXZoO1xuZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIiwgc2Fucy1zZXJpZjtcbmZvbnQtc2l6ZTogMnZoO1xuY29sb3I6ICMxYzBlM2M7XG5gO1xuXG5leHBvcnQgY29uc3QgUCA9IHN0eWxlZC5wYFxuZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIiwgc2Fucy1zZXJpZjtcbmNvbG9yOiAjNGIzYTcxO1xuYDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3N0eWxlcy5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQU9BO0FBQUE7QUFBQTtBQUFBOztBQVFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFRQTtBQUFBO0FBQUE7QUFDQTs7QUFEQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFJQTtBQVZBO0FBQ0E7QUFTQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQWRBO0FBQ0E7O0FBREE7QUFnQkE7QUFDQTtBQUNBO0FBRUE7QUFwQkE7QUFBQTtBQUFBO0FBdUJBO0FBQUE7QUF2QkE7QUFBQTtBQUFBO0FBMkJBO0FBQUE7QUEzQkE7QUFBQTtBQUFBO0FBK0JBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBOztBQUZBO0FBSUE7QUFKQTtBQUNBOztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBR0E7QUFIQTtBQUFBO0FBNUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFNQTtBQUNBO0FBR0E7QUFDQTtBQUlBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTkE7QUFDQTtBQWdCQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQ0E7Ozs7Ozs7OztBQURBO0FBQ0E7QUFXQTtBQUNBO0FBTUE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        