'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _master = require('../hocs/master');

var _master2 = _interopRequireDefault(_master);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Private = function Private() {
  return _react2.default.createElement('iframe', { width: '560', height: '315', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ?&autoplay=1', frameborder: '0', gesture: 'media', allow: 'encrypted-media', allowfullscreen: true });
};

exports.default = (0, _master2.default)(Private);