"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _master = require("../hocs/master");

var _master2 = _interopRequireDefault(_master);

var _styles = require("../components/styles");

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