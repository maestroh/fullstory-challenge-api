webpackHotUpdate(6,{

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

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5lNDU4Yzg4NDg3N2I2MzI3MTI4Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvc3BvdGlmeS5qcz81ZjQzMjdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBtYXN0ZXIgZnJvbSBcIi4uL2hvY3MvbWFzdGVyXCI7XG5pbXBvcnQgeyBIMSwgSDIsIFAsIEl0ZW1zIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvc3R5bGVzXCI7XG5cbmNsYXNzIFNwb3RpZnkgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBzb25nczogW10gfTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBzcFJlZ0V4ID0gL2h0dHBzPzpcXC9cXC8oPzplbWJlZFxcLnxvcGVuXFwuKSg/OnNwb3RpZnlcXC5jb21cXC8pKD86dHJhY2tcXC98XFw/dXJpPXNwb3RpZnk6dHJhY2s6KSgoXFx3fC0pezIyfSkvO1xuICAgIGNvbnN0IGdldElEZnJvbVJlZ0V4ID0gKHNyYywgcmVnRXhweSkgPT5cbiAgICAgIHNyYy5tYXRjaChyZWdFeHB5KSA/IFJlZ0V4cC4kMSA6IG51bGw7XG4gICAgZmV0Y2goXG4gICAgICBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvbWFlc3Ryb2gvZnVsbHN0b3J5LWNoYWxsZW5nZS1hcGkvaXNzdWVzXCJcbiAgICApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgbGV0IHNvbmdzID0ganNvbi5maWx0ZXIoaiA9PiBnZXRJRGZyb21SZWdFeChqLmJvZHksIHNwUmVnRXgpKS5tYXAoaiA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlOiBqLnRpdGxlLFxuICAgICAgICAgICAgc29uZ0lkOiBnZXRJRGZyb21SZWdFeChqLmJvZHksIHNwUmVnRXgpXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNvbmdzKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNvbmdzIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5zb25ncyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIMT5HaXRodWIgSXNzdWVzIEludGVncmF0aW9uPC9IMT5cbiAgICAgICAgPFA+XG4gICAgICAgICAgSSd2ZSB0dXJuZWQgR2l0aHViIElzc3VlcyBpbnRvIGEgaGFja3kgU3BvdGlmeSBwbGF5bGlzdC4gR28gdG8gJm5ic3A7PGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbWFlc3Ryb2gvZnVsbHN0b3J5LWNoYWxsZW5nZS1hcGkvaXNzdWVzXCJcbiAgICAgICAgICAgIGFsdD1cImdpdGh1YiBpc3N1ZXNcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBodHRwczovL2dpdGh1Yi5jb20vbWFlc3Ryb2gvZnVsbHN0b3J5LWNoYWxsZW5nZS1hcGkvaXNzdWVzXG4gICAgICAgICAgPC9hPiZuYnNwOyBhbmQgYWRkIGEgbGluayB0byB5b3VyIGZhdm9yaXRlIHNvbmdzIG9uIFNwb3RpZnkuIFlvdSdsbFxuICAgICAgICAgIHNlZSB0aGUgc29uZ3MgYXBwZWFyIGhlcmUgb25jZSB5b3UgcmVmcmVzaCB0aGUgcGFnZS5cbiAgICAgICAgPC9QPlxuICAgICAgICA8SXRlbXM+XG4gICAgICAgICAge3RoaXMuc3RhdGUuc29uZ3MubWFwKHMgPT4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOjMwMH19PlxuICAgICAgICAgICAgICA8SDI+e3MudGl0bGV9PC9IMj5cbiAgICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9lbWJlZC90cmFjay8ke3Muc29uZ0lkfWB9XG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjM4MFwiXG4gICAgICAgICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcbiAgICAgICAgICAgICAgICBhbGxvd1RyYW5zcGFyZW5jeT1cInRydWVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvSXRlbXM+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1hc3RlcihTcG90aWZ5KTtcblxuLypcbnt0aGlzLnN0YXRlLnNvbmdzLm1hcChzID0+IChcbiAgICAgIHJldHVybiA8aWZyYW1lXG4gICAgICAgIHNyYz17YGh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9lbWJlZC90cmFjay97cy5zb25nSWR9YH1cbiAgICAgICAgd2lkdGg9XCIzMDBcIlxuICAgICAgICBoZWlnaHQ9XCIzODBcIlxuICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxuICAgICAgICBhbGxvd1RyYW5zcGFyZW5jeT1cInRydWVcIlxuICAgIC8+KSlcbiAgICAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvc3BvdGlmeS5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFIQTtBQUtBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTs7QUFIQTtBQUFBO0FBQUE7QUFDQTs7QUFRQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBOztBQUxBO0FBQUE7QUFBQTtBQUNBO0FBV0E7Ozs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=