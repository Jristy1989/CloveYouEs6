'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ICommentList = require('./ICommentList.js');

var _ICommentList2 = _interopRequireDefault(_ICommentList);

var _cui = require('./cui.scss');

var _cui2 = _interopRequireDefault(_cui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ICommentBox = function (_Component) {
    _inherits(ICommentBox, _Component);

    function ICommentBox() {
        _classCallCheck(this, ICommentBox);

        return _possibleConstructorReturn(this, (ICommentBox.__proto__ || Object.getPrototypeOf(ICommentBox)).apply(this, arguments));
    }

    _createClass(ICommentBox, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: _cui2.default.clearboth + ' ' + _cui2.default.minsu_comments },
                _react2.default.createElement(
                    'div',
                    { className: _cui2.default.comment },
                    _react2.default.createElement(
                        'div',
                        { className: _cui2.default.comment_score + ' ' + _cui2.default.wth_small + ' ' + _cui2.default.left },
                        _react2.default.createElement('span', { className: 'icon-star-full' }),
                        _react2.default.createElement('span', { className: 'icon-star-full' }),
                        _react2.default.createElement('span', { className: 'icon-star-full' }),
                        _react2.default.createElement('span', { className: 'icon-star-full' }),
                        _react2.default.createElement('span', { className: 'icon-star-empty' }),
                        _react2.default.createElement(
                            'p',
                            null,
                            _react2.default.createElement(
                                'span',
                                { className: _cui2.default.pricePerNight },
                                '4.5'
                            ),
                            '/50\u4EBA\u8BC4\u4EF7'
                        )
                    )
                ),
                _react2.default.createElement(_ICommentList2.default, { data: this.props.data })
            );
        }
    }]);

    return ICommentBox;
}(_react.Component);

exports.default = ICommentBox;