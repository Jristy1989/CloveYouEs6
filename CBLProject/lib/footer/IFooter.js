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

var IFooter = function (_Component) {
	_inherits(IFooter, _Component);

	function IFooter() {
		_classCallCheck(this, IFooter);

		return _possibleConstructorReturn(this, (IFooter.__proto__ || Object.getPrototypeOf(IFooter)).apply(this, arguments));
	}

	_createClass(IFooter, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: _cui2.default.footer_copy },
				_react2.default.createElement(
					'div',
					{ className: _cui2.default.cui_footer },
					_react2.default.createElement(
						'p',
						null,
						'Copyright \xA92015_2025 cloveyou.com\uFF0CAll Rights Reserved \u6D59ICP\u590715026724\u53F7_1',
						_react2.default.createElement('a', { target: '_blank', href: 'http://cloveyou.com' })
					),
					_react2.default.createElement(
						'div',
						{ className: _cui2.default.beian_gov },
						_react2.default.createElement(
							'a',
							{ target: '_blank', href: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33018502001058' },
							_react2.default.createElement('img', { src: '../img/gov.png' }),
							_react2.default.createElement(
								'p',
								{ className: _cui2.default.beian_gov_content },
								'\u6D59\u516C\u7F51\u5B89\u5907 33018502001058\u53F7'
							)
						)
					)
				)
			);
		}
	}]);

	return IFooter;
}(_react.Component);

exports.default = IFooter;