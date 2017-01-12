'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ICommentScore = require('./ICommentScore.js');

var _ICommentScore2 = _interopRequireDefault(_ICommentScore);

var _cui = require('./cui.scss');

var _cui2 = _interopRequireDefault(_cui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IComment = function (_Component) {
	_inherits(IComment, _Component);

	function IComment() {
		_classCallCheck(this, IComment);

		return _possibleConstructorReturn(this, (IComment.__proto__ || Object.getPrototypeOf(IComment)).apply(this, arguments));
	}

	_createClass(IComment, [{
		key: 'render',
		value: function render() {
			var list = void 0;
			if (this.props.commentlist !== undefined) {
				list = this.props.commentlist.map(function (item, i) {
					return _react2.default.createElement('img', { src: item.datasrc, className: _cui2.default.comment_minsuimg + ' ' + _cui2.default.lazy, key: i, alt: '' });
				});
			}

			return _react2.default.createElement(
				'div',
				{ className: _cui2.default.comment_content },
				_react2.default.createElement(_ICommentScore2.default, { score: this.props.score }),
				_react2.default.createElement(
					'p',
					null,
					this.props.comments
				),
				_react2.default.createElement(
					'div',
					{ className: _cui2.default.comment_imglist },
					list,
					' '
				),
				_react2.default.createElement(
					'p',
					{ className: _cui2.default.comment_on },
					'\u53D1\u8868\u4E8E\xA0',
					this.props.commentdate
				)
			);
		}
	}]);

	return IComment;
}(_react.Component);

exports.default = IComment;