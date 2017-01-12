'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cui = require('./cui.scss');

var _cui2 = _interopRequireDefault(_cui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CenteredHead = function (_Component) {
	_inherits(CenteredHead, _Component);

	function CenteredHead() {
		_classCallCheck(this, CenteredHead);

		return _possibleConstructorReturn(this, (CenteredHead.__proto__ || Object.getPrototypeOf(CenteredHead)).apply(this, arguments));
	}

	_createClass(CenteredHead, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'h3',
				{ className: _cui2.default.centeredheading },
				_react2.default.createElement(
					'span',
					null,
					this.props.title
				)
			);
		}
	}]);

	return CenteredHead;
}(_react.Component);

exports.default = CenteredHead;