import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import $ from 'jquery';
import 'ztree';
import './react-ztree.css';

/**
 * React-Ztree
 *
 * @version 1.0.0
 * @author NKIA
 */
class ZTree extends React.Component {

    constructor(props) {
        super(props);

        const { iconClass } = this.props;

        /**
         * zTree Object Override
         * Icon 생성 부분 처리
         */
        Object.assign($.fn.zTree._z.view, {
            makeDOMNodeIcon: function(html, setting, node) {
                const consts = $.fn.zTree.consts;
                const data = $.fn.zTree._z.data;
                const view = $.fn.zTree._z.view;

                var nameStr = data.getNodeName(setting, node),
                    name = setting.view.nameIsHTML ? nameStr : nameStr.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

                if (node.iconSkin && Array.isArray(node.iconSkin)) {
                    const iconHtml = [];
                    iconHtml.push("<span id='", node.tId, consts.id.ICON,
                        "' title='' treeNode", consts.id.ICON, " class='fa-stack ",
                        "' style='", view.makeNodeIcoStyle(setting, node), "'>");
                    node.iconSkin.forEach(skin => {
                        iconHtml.push("<i class='fa " + skin +"'></i>");
                    });
                    iconHtml.push("</span>");

                    html.push(iconHtml.join('') + "<span id='", node.tId, consts.id.SPAN,
                        "' class='", consts.className.NAME,
                        "'>", name, "</span>");
                }else{
                    html.push("<span id='", node.tId, consts.id.ICON,
                        "' title='' treeNode", consts.id.ICON, " class='", view.makeNodeIcoClass(setting, node),
                        "' style='", view.makeNodeIcoStyle(setting, node), "'></span><span id='", node.tId, consts.id.SPAN,
                        "' class='", consts.className.NAME,
                        "'>", name, "</span>");
                }
            },
            makeNodeIcoClass: function(setting, node) {
                const consts = $.fn.zTree.consts;
                // iconSkin이 font-awesome인 경우에 처리
                if (node.iconSkin && iconClass === 'font-awesome') {
                    return 'fa ' + node.iconSkin;
                }

                var icoCss = ['ico'];
                if (!node.isAjaxing) {
                    icoCss[0] = (node.iconSkin ? node.iconSkin + '_' : '') + icoCss[0];
                    if (node.isParent) {
                        icoCss.push(node.open ? consts.folder.OPEN : consts.folder.CLOSE);
                    } else {
                        icoCss.push(consts.folder.DOCU);
                    }
                }
                return consts.className.BUTTON + ' ' + icoCss.join('_');
            },
        });
    }

    static propTypes = {
        /** zTree unique identifier. After the initialization, it equals to the id attribute value of the user-defined zTree container. */
        treeId: PropTypes.string,
        /**
         * zTree DOM's jQuery object, the main function: easy to internal operations.
         */
        treeObj: PropTypes.object,
        /**
         * During asynchronous loading, a request is sent to the server, which contains the identify of the parent node, so it can retrieve the children. This attribute is an array of strings, which is the identity parameter (or parameters). It applies when [setting.async.enable = true]
         */
        autoParam: PropTypes.array,
        /**
         * When Ajax sends data to the server, it uses this content-type. It is used when [setting.async.enable = true]
         */
        contentType: PropTypes.string,
        /**
         * Callback function to pre-process Ajax return data. It is valid when [setting.async.enable = true]
         */
        dataFilter: PropTypes.func,
        /**
         * The data type of Ajax requests. It is valid when [setting.async.enable = true]
         */
        dataType: PropTypes.string,
        /**
         * Set zTree asynchronous loading mode on/off.
         */
        ayncEnable: PropTypes.bool,
        /**
         * The query parameters of the Ajax request. (key - value) It is valid when [setting.async.enable = true]
         */
        otherParam: PropTypes.array,
        /**
         * Http request tyoe in ajax. It is valid when [setting.async.enable = true]
         */
        type: PropTypes.string,

        /**
         * The URL to which the ajax request is sent. It is valid when [setting.async.enable = true]
         */
        url: PropTypes.string,

        /**
         * This callback is made before zTree makes an ajax request, giving you an opportunity to decide if it should proceed or not. Return false to prevent zTree from sending the ajax request.
         */
        beforeAsync: PropTypes.func,

        /**
         * When one node is checked or unchecked, control its parent node and its child node auto checked or unchecked. It is valid when [setting.check.enable = true & setting.check.chkStyle = "checkbox"]
         */
        chkboxType: PropTypes.object,

        /**
         * Set to use checkbox or radio in zTree
         */
        checkboxEnable: PropTypes.bool,

        /**
         * Use the checkbox or radio. It is valid when [setting.check.enable = true]
         */
        chkStyle: PropTypes.string,

        /**
         * Personalized text style, only applies to <A> object in the node DOM
         */
        fontCss: PropTypes.object,

        /**
         * Set to use HTML in 'name' attribute.
         */
        nameIsHTML: PropTypes.bool,

        /**
         * The node data's attribute to save its parent node data's unique identifier. It is valid when [setting.data.simpleData.enable = true]
         */
        pIdKey: PropTypes.string,

        /**
         * The node data's attribute to save node data's unique identifier. It is valid when [setting.data.simpleData.enable = true]
         */
        idKey: PropTypes.string,

        /**
         * Set the default value of root's 'pIdKey' specified attribute values​​. It is valid when [setting.data.simpleData.enable = true]
         */
        rootPid: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),

        /**
         * Ajax 요청에 대한 데이터 추출 Key(JSON 구조)
         */
        dataFilterKey: PropTypes.string,

        /**
         * 사용자 정의 데이터
         */
        nodes: PropTypes.array,

        /**
         * Icon 기본 클래스 정의
         */
        iconClass: PropTypes.string,

        /**
         * Tree 확장 레벨 설정
         */
        expandNodeLevel: PropTypes.number,

        /**
         * Tree Node의 상태를 저장(미구현)
         */
        nodeState: PropTypes.bool,

        /**
         * Set zTree's node to accept the simple data format, when zTree is initialized or when ajax get / or when use addNodes method.
         * Don't have to generate the complex nested data
         */
        simpleDataEnable: PropTypes.bool,
    };

    static defaultProps = {
        treeId: 'treeContainer',
        treeObj: null,
        autoParam: [],
        contentType: 'application/x-www-form-urlencoded',
        dataFilter: null,
        dataType: 'text',
        ayncEnable: false,
        otherParam: [],
        type: 'post',
        url: '',
        beforeAsync: null,
        chkboxType: { Y: 'ps', N: 'ps' },
        checkboxEnable: false,
        chkStyle: 'checkbox',
        fontCss: {},
        nameIsHTML: false,
        simpleDataEnable: true,
        idKey: 'id',
        pIdKey: 'pId',
        rootPid: null,

        nodes: [],
        iconClass: 'font-awesome',
        expandNodeLevel: 0,
        dataFilterKey: null,
        nodeState: false,
    };

    componentDidMount() {
        const { treeId, treeObj } = this.props;
        /**
         * aync properties
         */
        const { autoParam, contentType, dataFilter, dataType, ayncEnable, otherParam, type, url } = this.props;
        /**
         * callback properties
         */
        const { beforeAsync } = this.props;
        /**
         * checkbox properties
         */
        const { checkboxEnable, chkboxType, chkStyle } = this.props;
        /**
         * simpleData properties
         */
        const { simpleDataEnable, pIdKey, idKey, rootPid } = this.props;
        /**
         * view properties
         */
        const { fontCss, nameIsHTML } = this.props;

        /**
         * Custom properties
         */
        const { nodes, expandNodeLevel, nodeState } = this.props;

        const setting = {
            treeId,
            treeObj,
            async: {
                autoParam,
                contentType,
                dataFilter,
                dataType,
                otherParam,
                type,
                url,
                enable: ayncEnable,
            },
            callback: {
                beforeAsync
            },
            check: {
                enable: checkboxEnable,
                chkboxType,
                chkStyle,
            },
            data: {
                simpleData: {
                    enable: simpleDataEnable,
                    pIdKey,
                    idKey,
                    rootPid,
                },
            },
            view: {
                fontCss,
                nameIsHTML,
            },
        };

        if (url) {
            Object.assign(setting.async, {
                enable: true,
                dataFilter: this._dataFilterHandler,
            });
        }

        if (expandNodeLevel > 0) {
            // 최초 Root Node 확장을 위함
            Object.assign(setting.callback, {
                onNodeCreated: this._expandNodeHandler
            });
        }

        if (nodeState) {
            Object.assign(setting.callback, {
                onClick: this.onClickHandler
            });
        }

        if (_.isEmpty(nodes)) {
            this.treeObj = $.fn.zTree.init($(`#${treeId}`), setting);
        } else {
            this.treeObj = $.fn.zTree.init($(`#${treeId}`), setting, nodes);
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        const { treeId } = this.props;

        if (this.props.nodes.length !== nextProps.nodes.length || nextProps.nodes.length > 0) {
            // 기존 tree를 제거하고 새로 생성한다.
            const setting = this.treeObj.setting;
            this.treeObj.destroy(treeId);
            this.treeObj = $.fn.zTree.init($(`#${treeId}`), setting, nextProps.nodes);
        }
        return false;
    }

    onClickHandler = (event, treeId, treeNode) => {
        this.selectedNodeId = treeNode.id;
    };

    getAsyncUrl = (treeId, treeNode) => {
        const leafId = treeNode ? treeNode.id : -1;
        return `${this.props.url}/${leafId}`;
    }

    /**
     * Tree 노드 추가
     *
     * @param {string} parentNode
     * @param {number} index
     * @param {array} newNodes
     * @param {bool} isSlient
     * @public
     */
    addNodes = (parentNode, index = 0, newNodes, isSlient = false) => {
        this.treeObj.addNodes(parentNode, index, newNodes, isSlient);
    }

    /**
     * Tree 전체 확장
     *
     * @public
     */
    expandAll(){
        this.treeObj.expandAll(true);
    }

    /**
     * Tree 전체 접기
     *
     * @public
     */
    collpaseAll(){
        this.treeObj.expandAll(false);
    }

    /**
     * Tree 새로고침
     *
     * @public
     */
    refresh() {
        this.treeObj.refresh();
    }

    /**
     * Tree Async - 응답 데이터에 대한 데이터 필터 핸들러
     *
     * @param treeId
     * @param parentNode
     * @param responseData
     * @returns {*}
     * @private
     */
    _dataFilterHandler = (treeId, parentNode, responseData) => {
        if (this.props.dataFilterKey !== null && this.props.dataFilterKey.length > 0) {
            const filterKeyArray = this.props.dataFilterKey.split('.');
            for (const i in filterKeyArray) {
                responseData = responseData[filterKeyArray[i]];
            }
        }
        return responseData;
    }

    /**
     * Tree 레벨 확장에서 사용되는 핸들러
     *
     * @param event
     * @param treeId
     * @param treeNode
     * @private
     */
    _expandNodeHandler = (event, treeId, treeNode) => {
        if (this.props.expandNodeLevel > 0) {
            const treeObj = $.fn.zTree.getZTreeObj(this.props.treeId);
            if (treeNode.level < this.props.expandNodeLevel) {
                treeObj.expandNode(treeNode, true, false, false);
            }
        }
    }

    render() {
        return (
            <ul id={this.props.treeId} className="ztree" />
        );
    }
}

export default ZTree;
