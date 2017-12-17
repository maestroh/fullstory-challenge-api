
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([6],{

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

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(576);


/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(541);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(543);

var _link2 = _interopRequireDefault(_link);

var _master = __webpack_require__(561);

var _master2 = _interopRequireDefault(_master);

var _styledComponents = __webpack_require__(542);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(574);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/nael/p/fullstory-challenge/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/nael/p/fullstory-challenge/pages/index.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

},[575]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2hvY3MvbWFzdGVyLmpzP2Y5YzQxMGUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIuanM/ZjljNDEwZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlcy5qcz9mOWM0MTBlIiwid2VicGFjazovLy8uL3BhZ2VzP2Y5YzQxMGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGluamVjdEdsb2JhbCB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiO1xuXG5pbmplY3RHbG9iYWxgXG4gIEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJCZWJhcyBOZXVlXCI7XG4gIHNyYzogdXJsKCdzdGF0aWMvQmViYXNOZXVlLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogdGhpbjtcbiAgZm9udC1zdHlsZTogdGhpbjtcbn1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2UgPT5cbiAgY2xhc3MgTWFzdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xuICAgICAgY29uc3QgcGFnZVByb3BzID0gUGFnZS5nZXRJbml0aWFsUHJvcHMgJiYgUGFnZS5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnBhZ2VQcm9wcyxcbiAgICAgICAgY3VycmVudFVybDogY3R4LnBhdGhuYW1lXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgIHRoaXMubG9nb3V0ID0gdGhpcy5sb2dvdXQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBsb2dvdXQoZXZlKSB7XG4gICAgICBpZiAoZXZlLmtleSA9PT0gXCJsb2dvdXRcIikge1xuICAgICAgICBSb3V0ZXIucHVzaChgLz9sb2dvdXQ9JHtldmUubmV3VmFsdWV9YCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgdGhpcy5sb2dvdXQsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic3RvcmFnZVwiLCB0aGlzLmxvZ291dCwgZmFsc2UpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDx0aXRsZT5GdWxsU3RvcnkgQ2hhbGxlbmdlITwvdGl0bGU+XG4gICAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cInN0YXRpYy9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cInN0YXRpYy9zY3JpcHRzLmpzXCI+e308L3NjcmlwdD5cbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvK1NhbnNcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICA8SGVhZGVyIHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICAgIDxQYWdlIHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaG9jcy9tYXN0ZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBBcHBIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA4dmg7XG4gIGZvbnQtZmFtaWx5OiBcIkJlYmFzIE5ldWVcIjtcbiAgZm9udC1zaXplOiA0dmg7XG4gIGNvbG9yOiAjNEIzQTcxO1xuYDtcblxuY29uc3QgSGVhZGVyTGlua3MgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB3aWR0aDogNTB2dztcbiAgbWFyZ2luLXJpZ2h0OiAydnc7XG5gO1xuXG5jb25zdCBNZW51SXRlbSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiAydnc7XG5gO1xuXG5jb25zdCBsaW5rcyA9IFtcbiAgeyBocmVmOiBcIi9tYWdpY1wiLCB0ZXh0OiBcIk1hZ2ljXCIgfSxcbiAgeyBocmVmOiBcIi9hYm91dFwiLCB0ZXh0OiBcIkFib3V0XCIgfVxuXTtcblxuY29uc3QgSGVhZGVyID0gKHsgY3VycmVudFVybCB9KSA9PiAoXG4gIDxBcHBIZWFkZXI+XG4gICAgPExpbmsgcHJlZmV0Y2gga2V5PVwiL1wiIGhyZWY9XCIvXCI+XG4gICAgICA8ZGl2PkZ1bGxTdG9yeSBDaGFsbGVuZ2UhPC9kaXY+XG4gICAgPC9MaW5rPlxuICAgIDxIZWFkZXJMaW5rcz5cbiAgICAgIHtsaW5rcy5tYXAobGluayA9PiAoXG4gICAgICAgIDxNZW51SXRlbT5cbiAgICAgICAgICA8TGluayBwcmVmZXRjaCBrZXk9e2xpbmsuaHJlZn0gaHJlZj17bGluay5ocmVmfT5cbiAgICAgICAgICAgIDxkaXY+e2xpbmsudGV4dH08L2Rpdj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICApKX1cbiAgICA8L0hlYWRlckxpbmtzPlxuICA8L0FwcEhlYWRlcj5cbik7XG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGN1cnJlbnRVcmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9oZWFkZXIuanMiLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgSDEgPSBzdHlsZWQuaDFgXG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xud2lkdGg6IDEwMCU7XG5tYXJnaW4tYm90dG9tOiAzdmg7XG5mb250LWZhbWlseTogXCJCZWJhcyBOZXVlXCI7XG5mb250LXNpemU6IDR2aDtcbmNvbG9yOiAjMWMwZTNjO1xudGV4dC1hbGlnbjpjZW50ZXI7XG5kaXNwbGF5OmJsb2NrO1xuYDtcblxuZXhwb3J0IGNvbnN0IEgyID0gc3R5bGVkLmgyYFxubWFyZ2luLWJvdHRvbTogMXZoO1xuZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIiwgc2Fucy1zZXJpZjtcbmZvbnQtc2l6ZTogMnZoO1xuY29sb3I6ICMxYzBlM2M7XG5gO1xuXG5leHBvcnQgY29uc3QgUCA9IHN0eWxlZC5wYFxuZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIiwgc2Fucy1zZXJpZjtcbmNvbG9yOiAjNGIzYTcxO1xuYDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3N0eWxlcy5qcyIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBtYXN0ZXIgZnJvbSBcIi4uL2hvY3MvbWFzdGVyXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgSDEsIEgyLCBQIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvc3R5bGVzXCI7XG5cbmNvbnN0IEl0ZW1zID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogM3ZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBtYXJnaW4tbGVmdDogNXZ3O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwdncgMzB2dyAzMHZ3O1xuICBncmlkLWdhcDogMXZ3O1xuYDtcblxubGV0IEluZGV4ID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxIMT5UYWtpbmcgb24gdGhlIEZ1bGxTdG9yeSBDaGFsbGVuZ2UhPC9IMT5cbiAgICA8SXRlbXM+XG4gICAgICA8ZGl2PlxuICAgICAgICA8SDI+Q0FQVFVSRSBFVkVSWVRISU5HPC9IMj5cbiAgICAgICAgPFA+XG4gICAgICAgICAgRXZlcnkgY2xpY2ssIGtleXByZXNzLCBwYWdlIHRyYW5zaXRpb24gYW5kIG1vcmUgLSBhdXRvbWF0aWNhbGx5XG4gICAgICAgICAgaW5kZXhlZCBhbmQgZWFzaWx5IGFjY2Vzc2libGUgdG8gYW55IHRlYW0gd2l0aCBhIHN0YWtlIGluIHRoZVxuICAgICAgICAgIGN1c3RvbWVy4oCZcyBzdWNjZXNzLlxuICAgICAgICA8L1A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxIMj5GQVNUIEFORCBJTlRVSVRJVkU8L0gyPlxuICAgICAgICA8UD5cbiAgICAgICAgICBPbW5pU2VhcmNoIGhlbHBzIHlvdSBmaW5kIGN1c3RvbWVycywgaWRlbnRpZnkgcmFnZSBjbGlja3MsIHN1bW1vbiBwYWdlXG4gICAgICAgICAgYW5hbHl0aWNzLCBidWlsZCBmdW5uZWxzIGFuZCBtb3JlIGluc3RhbnRseS4gSnVzdCBzdGFydCB0eXBpbmcuXG4gICAgICAgIDwvUD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPEgyPlNNQVJUIEZSVVNUUkFUSU9OIERFVEVDVElPTjwvSDI+XG4gICAgICAgIDxQPlxuICAgICAgICAgIEZ1bGxTdG9yeSBpbnRlbGxpZ2VudGx5IHN1cmZhY2VzIGtleSBtb21lbnRzIG9mIHBvdGVudGlhbCB1c2VyXG4gICAgICAgICAgZnJ1c3RyYXRpb24uIFJhZ2UsIEVycm9yIGFuZCBEZWFkIGNsaWNrcyBtYWdpY2FsbHkgYnJpbmcgZGlmZmVyZW50XG4gICAgICAgICAgYXNwZWN0cyBvZiBhIGZhdWx0eSBVSSB0byBsaWdodOKAlGFuZCBzaG93IHlvdSBob3cgdG8gaW1wcm92ZS5cbiAgICAgICAgPC9QPlxuICAgICAgPC9kaXY+XG4gICAgPC9JdGVtcz5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBtYXN0ZXIoSW5kZXgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7O0FBREE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBSUE7QUFWQTtBQUNBO0FBU0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFkQTtBQUNBOztBQURBO0FBZ0JBO0FBQ0E7QUFDQTtBQUVBO0FBcEJBO0FBQUE7QUFBQTtBQXVCQTtBQUFBO0FBdkJBO0FBQUE7QUFBQTtBQTJCQTtBQUFBO0FBM0JBO0FBQUE7QUFBQTtBQStCQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUdBO0FBSEE7QUFBQTtBQTVDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBTUE7QUFDQTtBQUdBO0FBQ0E7QUFJQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU5BO0FBQ0E7QUFnQkE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUNBOzs7Ozs7Ozs7QUFEQTtBQUNBO0FBV0E7QUFDQTtBQU1BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFPQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQU1BO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUtBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        