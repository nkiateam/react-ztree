'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('ztree');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ZTree = function (_Component) {
    _inherits(ZTree, _Component);

    function ZTree() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ZTree);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ZTree.__proto__ || Object.getPrototypeOf(ZTree)).call.apply(_ref, [this].concat(args))), _this), _this.getAsyncUrl = function (treeId, treeNode) {
            var leafId = treeNode ? treeNode.id : -1;
            return _this.props.url + '/' + leafId;
        }, _this.dataFilterHandler = function (treeId, parentNode, responseData) {
            console.log(treeId, parentNode, responseData);
            return responseData.configuration;
        }, _this.handleExpandRootNode = function (event, treeId, treeNode, msg) {
            // console.log('root', event, treeId, treeNode, msg);
            // if (treeNode === undefined) {
            //     const treeObj = $.fn.zTree.getZTreeObj(this.props.treeId);
            //     const items = JSON.parse(msg);
            //     if (items) {
            //         items.configuration.forEach((item) => {
            //             console.log('item', item.id);
            //         });
            //     }
            // }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    // check, data: {keep, key, simpleData}, edit: {drag,...}, view: {},


    _createClass(ZTree, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props,
                treeId = _props.treeId,
                url = _props.url,
                callBack = _props.callBack,
                rootExpand = _props.rootExpand,
                data = _props.data;

            var setting = {
                async: {
                    enable: false
                },
                callback: {}
            };
            if (url) {
                Object.assign(setting.async, {
                    enable: true,
                    url: this.getAsyncUrl,
                    type: 'get',
                    dataFilter: this.dataFilterHandler
                });
            }
            if (callBack) {
                Object.assign(setting.callback, callBack);
            }
            if (rootExpand) {
                // 최초 Root Node 확장을 위함
                var rootExpandCallBack = {
                    onNodeCreated: this.handleExpandRootNode
                };
                Object.assign(setting.callback, rootExpandCallBack);
            }

            if (_lodash2.default.isEmpty(data)) {
                var zTreeObj = _jquery2.default.fn.zTree.init((0, _jquery2.default)('#' + treeId), setting);
            } else {
                var _zTreeObj = _jquery2.default.fn.zTree.init((0, _jquery2.default)('#' + treeId), setting, data);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('ul', { id: this.props.treeId, className: 'ztree' });
        }
    }]);

    return ZTree;
}(_react.Component);

ZTree.PropTypes = {
    treeId: _propTypes2.default.string,
    url: _propTypes2.default.string,
    callBack: _propTypes2.default.object,
    rootExpand: _propTypes2.default.bool,
    data: _propTypes2.default.object
};
ZTree.defaultProps = {
    treeId: 'treeContainer',
    url: null,
    callBack: {},
    rootExpand: false,
    data: {}
};
exports.default = ZTree;