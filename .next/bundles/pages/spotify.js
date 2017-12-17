
          window.__NEXT_REGISTER_PAGE('/spotify', function() {
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\p\\fullstory-challenge-api\\hocs\\master.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\p\\fullstory-challenge-api\\hocs\\master.js"); } } })();

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

var _jsxFileName = "C:\\p\\fullstory-challenge-api\\components\\header.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 8vh;\n  font-family: \"Bebas Neue\";\n  font-size: 4vh;\n  color: #4b3a71;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 8vh;\n  font-family: \"Bebas Neue\";\n  font-size: 4vh;\n  color: #4b3a71;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  display: flex;\n  justify-content: flex-end;\n  width: 50vw;\n  margin-right: 2vw;\n"], ["\n  display: flex;\n  justify-content: flex-end;\n  width: 50vw;\n  margin-right: 2vw;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  margin-left: 2vw;\n"], ["\n  margin-left: 2vw;\n"]);

var AppHeader = _styledComponents2.default.div(_templateObject);

var HeaderLinks = _styledComponents2.default.div(_templateObject2);

var MenuItem = _styledComponents2.default.div(_templateObject3);

var isProd = "development" === "production";
var prefix = isProd ? "" : "";
var links = [{ href: prefix + "spotify", text: "Spotify" }, { href: prefix + "magic", text: "Magic" }, { href: prefix + "about", text: "About" }];
var home = prefix + "/";

var Header = function Header(_ref) {
  var currentUrl = _ref.currentUrl;
  return _react2.default.createElement(AppHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, key: home, href: home, __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "FullStory Challenge!")), _react2.default.createElement(HeaderLinks, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, links.map(function (link) {
    return _react2.default.createElement(MenuItem, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      }
    }, _react2.default.createElement(_link2.default, { prefetch: true, key: link.href, href: link.href, __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      }
    }, _react2.default.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      }
    }, link.text)));
  })));
};

Header.propTypes = {
  currentUrl: _propTypes2.default.string.isRequired
};

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\p\\fullstory-challenge-api\\components\\header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\p\\fullstory-challenge-api\\components\\header.js"); } } })();

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Items = exports.P = exports.H2 = exports.H1 = undefined;

var _taggedTemplateLiteral2 = __webpack_require__(541);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = __webpack_require__(542);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\ndisplay: flex;\njustify-content: space-between;\nwidth: 100%;\nmargin-bottom: 3vh;\nfont-family: \"Bebas Neue\";\nfont-size: 4vh;\ncolor: #1c0e3c;\ntext-align:center;\ndisplay:block;\n"], ["\ndisplay: flex;\njustify-content: space-between;\nwidth: 100%;\nmargin-bottom: 3vh;\nfont-family: \"Bebas Neue\";\nfont-size: 4vh;\ncolor: #1c0e3c;\ntext-align:center;\ndisplay:block;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\nmargin-bottom: 1vh;\nfont-family: \"Nunito Sans\", sans-serif;\nfont-size: 2vh;\ncolor: #1c0e3c;\n"], ["\nmargin-bottom: 1vh;\nfont-family: \"Nunito Sans\", sans-serif;\nfont-size: 2vh;\ncolor: #1c0e3c;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\nfont-family: \"Nunito Sans\", sans-serif;\ncolor: #4b3a71;\n"], ["\nfont-family: \"Nunito Sans\", sans-serif;\ncolor: #4b3a71;\n"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\nmargin-top: 3vh;\ndisplay: grid;\nmargin-left: 5vw;\ngrid-template-columns: 30vw 30vw 30vw;\ngrid-gap: 1vw;\n"], ["\nmargin-top: 3vh;\ndisplay: grid;\nmargin-left: 5vw;\ngrid-template-columns: 30vw 30vw 30vw;\ngrid-gap: 1vw;\n"]);

var H1 = exports.H1 = _styledComponents2.default.h1(_templateObject);

var H2 = exports.H2 = _styledComponents2.default.h2(_templateObject2);

var P = exports.P = _styledComponents2.default.p(_templateObject3);

var Items = exports.Items = _styledComponents2.default.div(_templateObject4);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\p\\fullstory-challenge-api\\components\\styles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\p\\fullstory-challenge-api\\components\\styles.js"); } } })();

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

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(63);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _master = __webpack_require__(561);

var _master2 = _interopRequireDefault(_master);

var _styles = __webpack_require__(574);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\p\\fullstory-challenge-api\\pages\\spotify.js?entry";


var Spotify = function (_Component) {
  (0, _inherits3.default)(Spotify, _Component);

  function Spotify(props) {
    (0, _classCallCheck3.default)(this, Spotify);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Spotify.__proto__ || (0, _getPrototypeOf2.default)(Spotify)).call(this, props));

    _this.state = { songs: [] };
    return _this;
  }

  (0, _createClass3.default)(Spotify, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var spRegEx = /https?:\/\/(?:embed\.|open\.)(?:spotify\.com\/)(?:track\/|\?uri=spotify:track:)((\w|-){22})/;
      var getIDfromRegEx = function getIDfromRegEx(src, regExpy) {
        return src.match(regExpy) ? RegExp.$1 : null;
      };
      fetch("https://api.github.com/repos/maestroh/fullstory-challenge-api/issues").then(function (response) {
        return response.json();
      }).then(function (json) {
        var songs = json.filter(function (j) {
          return getIDfromRegEx(j.body, spRegEx);
        }).map(function (j) {
          return {
            title: j.title,
            songId: getIDfromRegEx(j.body, spRegEx)
          };
        });
        console.log(songs);
        _this2.setState({ songs: songs });
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state.songs);
      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement(_styles.H1, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "Github Issues Integration"), _react2.default.createElement(_styles.P, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "I've turned Github Issues into a hacky Spotify playlist. Go to \xA0", _react2.default.createElement("a", {
        href: "https://github.com/maestroh/fullstory-challenge-api/issues",
        alt: "github issues",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "https://github.com/maestroh/fullstory-challenge-api/issues"), "\xA0 and add a link to your favorite songs on Spotify. You'll see the songs appear here once you refresh the page."), _react2.default.createElement(_styles.Items, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, this.state.songs.map(function (s) {
        return _react2.default.createElement("div", { style: { width: 300 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }, _react2.default.createElement(_styles.H2, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, s.title), _react2.default.createElement("iframe", {
          src: "https://open.spotify.com/embed/track/" + s.songId,
          width: "300",
          height: "380",
          frameBorder: "0",
          allowTransparency: "true",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }));
      })));
    }
  }]);

  return Spotify;
}(_react.Component);

exports.default = (0, _master2.default)(Spotify);

/*
{this.state.songs.map(s => (
      return <iframe
        src={`https://open.spotify.com/embed/track/{s.songId}`}
        width="300"
        height="380"
        frameBorder="0"
        allowTransparency="true"
    />))
    */

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\p\\fullstory-challenge-api\\pages\\spotify.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\p\\fullstory-challenge-api\\pages\\spotify.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/spotify")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

},[577]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXHNwb3RpZnkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob2NzL21hc3Rlci5qcz81ZjQzMjdjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyLmpzPzVmNDMyN2MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdHlsZXMuanM/NWY0MzI3YyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9zcG90aWZ5LmpzPzVmNDMyN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGluamVjdEdsb2JhbCB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiO1xuXG5pbmplY3RHbG9iYWxgXG4gIEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJCZWJhcyBOZXVlXCI7XG4gIHNyYzogdXJsKCdzdGF0aWMvQmViYXNOZXVlLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogdGhpbjtcbiAgZm9udC1zdHlsZTogdGhpbjtcbn1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2UgPT5cbiAgY2xhc3MgTWFzdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xuICAgICAgY29uc3QgcGFnZVByb3BzID0gUGFnZS5nZXRJbml0aWFsUHJvcHMgJiYgUGFnZS5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnBhZ2VQcm9wcyxcbiAgICAgICAgY3VycmVudFVybDogY3R4LnBhdGhuYW1lXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgIHRoaXMubG9nb3V0ID0gdGhpcy5sb2dvdXQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBsb2dvdXQoZXZlKSB7XG4gICAgICBpZiAoZXZlLmtleSA9PT0gXCJsb2dvdXRcIikge1xuICAgICAgICBSb3V0ZXIucHVzaChgLz9sb2dvdXQ9JHtldmUubmV3VmFsdWV9YCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgdGhpcy5sb2dvdXQsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic3RvcmFnZVwiLCB0aGlzLmxvZ291dCwgZmFsc2UpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDx0aXRsZT5GdWxsU3RvcnkgQ2hhbGxlbmdlITwvdGl0bGU+XG4gICAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cInN0YXRpYy9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cInN0YXRpYy9zY3JpcHRzLmpzXCI+e308L3NjcmlwdD5cbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvK1NhbnNcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICA8SGVhZGVyIHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICAgIDxQYWdlIHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaG9jcy9tYXN0ZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBBcHBIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA4dmg7XG4gIGZvbnQtZmFtaWx5OiBcIkJlYmFzIE5ldWVcIjtcbiAgZm9udC1zaXplOiA0dmg7XG4gIGNvbG9yOiAjNGIzYTcxO1xuYDtcblxuY29uc3QgSGVhZGVyTGlua3MgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB3aWR0aDogNTB2dztcbiAgbWFyZ2luLXJpZ2h0OiAydnc7XG5gO1xuXG5jb25zdCBNZW51SXRlbSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiAydnc7XG5gO1xuXG5jb25zdCBpc1Byb2QgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCI7XG5jb25zdCBwcmVmaXggPSBpc1Byb2QgPyBcIlwiIDogXCJcIjtcbmNvbnN0IGxpbmtzID0gW1xuICB7IGhyZWY6IHByZWZpeCArIFwic3BvdGlmeVwiLCB0ZXh0OiBcIlNwb3RpZnlcIiB9LFxuICB7IGhyZWY6IHByZWZpeCArIFwibWFnaWNcIiwgdGV4dDogXCJNYWdpY1wiIH0sXG4gIHsgaHJlZjogcHJlZml4ICsgXCJhYm91dFwiLCB0ZXh0OiBcIkFib3V0XCIgfVxuXTtcbmNvbnN0IGhvbWUgPSBwcmVmaXggKyBcIi9cIjtcblxuY29uc3QgSGVhZGVyID0gKHsgY3VycmVudFVybCB9KSA9PiAoXG4gIDxBcHBIZWFkZXI+XG4gICAgPExpbmsgcHJlZmV0Y2gga2V5PXtob21lfSBocmVmPXtob21lfT5cbiAgICAgIDxkaXY+RnVsbFN0b3J5IENoYWxsZW5nZSE8L2Rpdj5cbiAgICA8L0xpbms+XG4gICAgPEhlYWRlckxpbmtzPlxuICAgICAge2xpbmtzLm1hcChsaW5rID0+IChcbiAgICAgICAgPE1lbnVJdGVtPlxuICAgICAgICAgIDxMaW5rIHByZWZldGNoIGtleT17bGluay5ocmVmfSBocmVmPXtsaW5rLmhyZWZ9PlxuICAgICAgICAgICAgPGRpdj57bGluay50ZXh0fTwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICkpfVxuICAgIDwvSGVhZGVyTGlua3M+XG4gIDwvQXBwSGVhZGVyPlxuKTtcblxuSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgY3VycmVudFVybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2hlYWRlci5qcyIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBIMSA9IHN0eWxlZC5oMWBcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG53aWR0aDogMTAwJTtcbm1hcmdpbi1ib3R0b206IDN2aDtcbmZvbnQtZmFtaWx5OiBcIkJlYmFzIE5ldWVcIjtcbmZvbnQtc2l6ZTogNHZoO1xuY29sb3I6ICMxYzBlM2M7XG50ZXh0LWFsaWduOmNlbnRlcjtcbmRpc3BsYXk6YmxvY2s7XG5gO1xuXG5leHBvcnQgY29uc3QgSDIgPSBzdHlsZWQuaDJgXG5tYXJnaW4tYm90dG9tOiAxdmg7XG5mb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuZm9udC1zaXplOiAydmg7XG5jb2xvcjogIzFjMGUzYztcbmA7XG5cbmV4cG9ydCBjb25zdCBQID0gc3R5bGVkLnBgXG5mb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuY29sb3I6ICM0YjNhNzE7XG5gO1xuXG5leHBvcnQgY29uc3QgSXRlbXMgPSBzdHlsZWQuZGl2YFxubWFyZ2luLXRvcDogM3ZoO1xuZGlzcGxheTogZ3JpZDtcbm1hcmdpbi1sZWZ0OiA1dnc7XG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwdncgMzB2dyAzMHZ3O1xuZ3JpZC1nYXA6IDF2dztcbmA7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zdHlsZXMuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgbWFzdGVyIGZyb20gXCIuLi9ob2NzL21hc3RlclwiO1xuaW1wb3J0IHsgSDEsIEgyLCBQLCBJdGVtcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL3N0eWxlc1wiO1xuXG5jbGFzcyBTcG90aWZ5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgc29uZ3M6IFtdIH07XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qgc3BSZWdFeCA9IC9odHRwcz86XFwvXFwvKD86ZW1iZWRcXC58b3BlblxcLikoPzpzcG90aWZ5XFwuY29tXFwvKSg/OnRyYWNrXFwvfFxcP3VyaT1zcG90aWZ5OnRyYWNrOikoKFxcd3wtKXsyMn0pLztcbiAgICBjb25zdCBnZXRJRGZyb21SZWdFeCA9IChzcmMsIHJlZ0V4cHkpID0+XG4gICAgICBzcmMubWF0Y2gocmVnRXhweSkgPyBSZWdFeHAuJDEgOiBudWxsO1xuICAgIGZldGNoKFxuICAgICAgXCJodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL21hZXN0cm9oL2Z1bGxzdG9yeS1jaGFsbGVuZ2UtYXBpL2lzc3Vlc1wiXG4gICAgKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGxldCBzb25ncyA9IGpzb24uZmlsdGVyKGogPT4gZ2V0SURmcm9tUmVnRXgoai5ib2R5LCBzcFJlZ0V4KSkubWFwKGogPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZTogai50aXRsZSxcbiAgICAgICAgICAgIHNvbmdJZDogZ2V0SURmcm9tUmVnRXgoai5ib2R5LCBzcFJlZ0V4KVxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhzb25ncyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzb25ncyB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuc29uZ3MpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SDE+R2l0aHViIElzc3VlcyBJbnRlZ3JhdGlvbjwvSDE+XG4gICAgICAgIDxQPlxuICAgICAgICAgIEkndmUgdHVybmVkIEdpdGh1YiBJc3N1ZXMgaW50byBhIGhhY2t5IFNwb3RpZnkgcGxheWxpc3QuIEdvIHRvICZuYnNwOzxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL21hZXN0cm9oL2Z1bGxzdG9yeS1jaGFsbGVuZ2UtYXBpL2lzc3Vlc1wiXG4gICAgICAgICAgICBhbHQ9XCJnaXRodWIgaXNzdWVzXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL21hZXN0cm9oL2Z1bGxzdG9yeS1jaGFsbGVuZ2UtYXBpL2lzc3Vlc1xuICAgICAgICAgIDwvYT4mbmJzcDsgYW5kIGFkZCBhIGxpbmsgdG8geW91ciBmYXZvcml0ZSBzb25ncyBvbiBTcG90aWZ5LiBZb3UnbGxcbiAgICAgICAgICBzZWUgdGhlIHNvbmdzIGFwcGVhciBoZXJlIG9uY2UgeW91IHJlZnJlc2ggdGhlIHBhZ2UuXG4gICAgICAgIDwvUD5cbiAgICAgICAgPEl0ZW1zPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnNvbmdzLm1hcChzID0+IChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDozMDB9fT5cbiAgICAgICAgICAgICAgPEgyPntzLnRpdGxlfTwvSDI+XG4gICAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL29wZW4uc3BvdGlmeS5jb20vZW1iZWQvdHJhY2svJHtzLnNvbmdJZH1gfVxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzODBcIlxuICAgICAgICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgICAgICAgICAgICAgYWxsb3dUcmFuc3BhcmVuY3k9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0l0ZW1zPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBtYXN0ZXIoU3BvdGlmeSk7XG5cbi8qXG57dGhpcy5zdGF0ZS5zb25ncy5tYXAocyA9PiAoXG4gICAgICByZXR1cm4gPGlmcmFtZVxuICAgICAgICBzcmM9e2BodHRwczovL29wZW4uc3BvdGlmeS5jb20vZW1iZWQvdHJhY2sve3Muc29uZ0lkfWB9XG4gICAgICAgIHdpZHRoPVwiMzAwXCJcbiAgICAgICAgaGVpZ2h0PVwiMzgwXCJcbiAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcbiAgICAgICAgYWxsb3dUcmFuc3BhcmVuY3k9XCJ0cnVlXCJcbiAgICAvPikpXG4gICAgKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3Nwb3RpZnkuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7O0FBREE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBSUE7QUFWQTtBQUNBO0FBU0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFkQTtBQUNBOztBQURBO0FBZ0JBO0FBQ0E7QUFDQTtBQUVBO0FBcEJBO0FBQUE7QUFBQTtBQXVCQTtBQUFBO0FBdkJBO0FBQUE7QUFBQTtBQTJCQTtBQUFBO0FBM0JBO0FBQUE7QUFBQTtBQStCQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUdBO0FBSEE7QUFBQTtBQTVDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBTUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU5BO0FBQ0E7QUFnQkE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUNBOzs7Ozs7Ozs7O0FBREE7QUFDQTtBQVdBO0FBQ0E7QUFNQTtBQUNBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFIQTtBQUtBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTs7QUFIQTtBQUFBO0FBQUE7QUFDQTs7QUFRQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBOztBQUxBO0FBQUE7QUFBQTtBQUNBO0FBV0E7Ozs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        