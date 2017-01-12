'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IAvatorComment = require('./IAvatorComment.js');

var _IAvatorComment2 = _interopRequireDefault(_IAvatorComment);

var _IComment = require('./IComment.js');

var _IComment2 = _interopRequireDefault(_IComment);

var _cui = require('./cui.scss');

var _cui2 = _interopRequireDefault(_cui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ICommentList = function (_Component) {
	_inherits(ICommentList, _Component);

	function ICommentList() {
		_classCallCheck(this, ICommentList);

		return _possibleConstructorReturn(this, (ICommentList.__proto__ || Object.getPrototypeOf(ICommentList)).apply(this, arguments));
	}

	_createClass(ICommentList, [{
		key: 'render',
		value: function render() {
			var commentList = this.props.data.map(function (item, index) {
				return _react2.default.createElement(
					'div',
					{ className: _cui2.default.minsu_section, key: item.id },
					_react2.default.createElement(
						'div',
						{ className: _cui2.default.comment_item },
						_react2.default.createElement(_IAvatorComment2.default, { commentsrc: item.avatorsrc, commentcontent: item.avatorname }),
						_react2.default.createElement(_IComment2.default, { comments: item.comments, commentdate: item.commentdate, score: item.score, commentlist: item.commentlist })
					)
				);
			});
			return _react2.default.createElement(
				'div',
				{ className: _cui2.default.minsu_commentscontent },
				commentList
			);
		}
	}]);

	return ICommentList;
}(_react.Component);

exports.default = ICommentList;