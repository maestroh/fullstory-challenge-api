
          window.__NEXT_REGISTER_PAGE('/magic', function() {
            var comp = module.exports =
webpackJsonp([7],{

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

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(578);


/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(63);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _master = __webpack_require__(561);

var _master2 = _interopRequireDefault(_master);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/nael/p/fullstory-challenge/pages/magic.js?entry';


var Private = function Private() {
  return _react2.default.createElement('iframe', { width: '560', height: '315', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ?&autoplay=1', frameborder: '0', gesture: 'media', allow: 'encrypted-media', allowfullscreen: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  });
};

exports.default = (0, _master2.default)(Private);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/nael/p/fullstory-challenge/pages/magic.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/nael/p/fullstory-challenge/pages/magic.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/magic")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

},[577]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9tYWdpYy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2hvY3MvbWFzdGVyLmpzPzY3NDUyNjkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIuanM/Njc0NTI2OSIsIndlYnBhY2s6Ly8vLi9wYWdlcy9tYWdpYy5qcz82NzQ1MjY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBpbmplY3RHbG9iYWwgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcblxuaW5qZWN0R2xvYmFsYFxuICBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQmViYXMgTmV1ZVwiO1xuICBzcmM6IHVybCgnc3RhdGljL0JlYmFzTmV1ZS13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IHRoaW47XG4gIGZvbnQtc3R5bGU6IHRoaW47XG59XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlID0+XG4gIGNsYXNzIE1hc3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcbiAgICAgIGNvbnN0IHBhZ2VQcm9wcyA9IFBhZ2UuZ2V0SW5pdGlhbFByb3BzICYmIFBhZ2UuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wYWdlUHJvcHMsXG4gICAgICAgIGN1cnJlbnRVcmw6IGN0eC5wYXRobmFtZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICB0aGlzLmxvZ291dCA9IHRoaXMubG9nb3V0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgbG9nb3V0KGV2ZSkge1xuICAgICAgaWYgKGV2ZS5rZXkgPT09IFwibG9nb3V0XCIpIHtcbiAgICAgICAgUm91dGVyLnB1c2goYC8/bG9nb3V0PSR7ZXZlLm5ld1ZhbHVlfWApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIHRoaXMubG9nb3V0LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgdGhpcy5sb2dvdXQsIGZhbHNlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8dGl0bGU+RnVsbFN0b3J5IENoYWxsZW5nZSE8L3RpdGxlPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCJzdGF0aWMvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJzdGF0aWMvc2NyaXB0cy5qc1wiPnt9PC9zY3JpcHQ+XG4gICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bytTYW5zXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgPEhlYWRlciB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICA8UGFnZSB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2hvY3MvbWFzdGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgQXBwSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogOHZoO1xuICBmb250LWZhbWlseTogXCJCZWJhcyBOZXVlXCI7XG4gIGZvbnQtc2l6ZTogNHZoO1xuICBjb2xvcjogIzRCM0E3MTtcbmA7XG5cbmNvbnN0IEhlYWRlckxpbmtzID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgd2lkdGg6IDUwdnc7XG4gIG1hcmdpbi1yaWdodDogMnZ3O1xuYDtcblxuY29uc3QgTWVudUl0ZW0gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogMnZ3O1xuYDtcblxuY29uc3QgbGlua3MgPSBbXG4gIHsgaHJlZjogXCIvbWFnaWNcIiwgdGV4dDogXCJNYWdpY1wiIH0sXG4gIHsgaHJlZjogXCIvYWJvdXRcIiwgdGV4dDogXCJBYm91dFwiIH1cbl07XG5cbmNvbnN0IEhlYWRlciA9ICh7IGN1cnJlbnRVcmwgfSkgPT4gKFxuICA8QXBwSGVhZGVyPlxuICAgIDxMaW5rIHByZWZldGNoIGtleT1cIi9cIiBocmVmPVwiL1wiPlxuICAgICAgPGRpdj5GdWxsU3RvcnkgQ2hhbGxlbmdlITwvZGl2PlxuICAgIDwvTGluaz5cbiAgICA8SGVhZGVyTGlua3M+XG4gICAgICB7bGlua3MubWFwKGxpbmsgPT4gKFxuICAgICAgICA8TWVudUl0ZW0+XG4gICAgICAgICAgPExpbmsgcHJlZmV0Y2gga2V5PXtsaW5rLmhyZWZ9IGhyZWY9e2xpbmsuaHJlZn0+XG4gICAgICAgICAgICA8ZGl2PntsaW5rLnRleHR9PC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgKSl9XG4gICAgPC9IZWFkZXJMaW5rcz5cbiAgPC9BcHBIZWFkZXI+XG4pO1xuXG5IZWFkZXIucHJvcFR5cGVzID0ge1xuICBjdXJyZW50VXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBtYXN0ZXIgZnJvbSAnLi4vaG9jcy9tYXN0ZXInO1xuXG5jb25zdCBQcml2YXRlID0gKCkgPT4gKFxuICA8aWZyYW1lIHdpZHRoPVwiNTYwXCIgaGVpZ2h0PVwiMzE1XCIgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvZFF3NHc5V2dYY1E/JmF1dG9wbGF5PTFcIiBmcmFtZWJvcmRlcj1cIjBcIiBnZXN0dXJlPVwibWVkaWFcIiBhbGxvdz1cImVuY3J5cHRlZC1tZWRpYVwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5cbilcblxuZXhwb3J0IGRlZmF1bHQgbWFzdGVyKFByaXZhdGUpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9tYWdpYy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFRQTtBQUFBO0FBQUE7QUFDQTs7QUFEQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFJQTtBQVZBO0FBQ0E7QUFTQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQWRBO0FBQ0E7O0FBREE7QUFnQkE7QUFDQTtBQUNBO0FBRUE7QUFwQkE7QUFBQTtBQUFBO0FBdUJBO0FBQUE7QUF2QkE7QUFBQTtBQUFBO0FBMkJBO0FBQUE7QUEzQkE7QUFBQTtBQUFBO0FBK0JBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBOztBQUZBO0FBSUE7QUFKQTtBQUNBOztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBR0E7QUFIQTtBQUFBO0FBNUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFNQTtBQUNBO0FBR0E7QUFDQTtBQUlBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTkE7QUFDQTtBQWdCQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        