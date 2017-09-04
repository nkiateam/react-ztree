import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import $ from 'jquery';
import 'ztree';

class ZTree extends Component {
  // check, data: {keep, key, simpleData}, edit: {drag,...}, view: {},
  static PropTypes = {
      treeId: PropTypes.string,
      url: PropTypes.string,
      callBack: PropTypes.object,
      rootExpand: PropTypes.bool,
      data: PropTypes.object,
  };
  static defaultProps = {
      treeId: 'treeContainer',
      url: null,
      callBack: {},
      rootExpand: false,
      data: {},
  };

  componentDidMount() {
      const { treeId, url, callBack, rootExpand, data } = this.props;
      const setting = {
          async: {
              enable: false,
          },
          callback: {},
      };
      if (url) {
          Object.assign(setting.async, {
              enable: true,
              url: this.getAsyncUrl,
              type: 'get',
              dataFilter: this.dataFilterHandler,
          });
      }
      if (callBack) {
          Object.assign(setting.callback, callBack);
      }
      if (rootExpand) {
          // 최초 Root Node 확장을 위함
          const rootExpandCallBack = {
              onNodeCreated: this.handleExpandRootNode,
          };
          Object.assign(setting.callback, rootExpandCallBack);
      }

      if (_.isEmpty(data)) {
          const zTreeObj = $.fn.zTree.init($(`#${treeId}`), setting);
      } else {
          const zTreeObj = $.fn.zTree.init($(`#${treeId}`), setting, data);
      }
  }

  getAsyncUrl = (treeId, treeNode) => {
      const leafId = treeNode ? treeNode.id : -1;
      return `${this.props.url}/${leafId}`;
  }

  dataFilterHandler = (treeId, parentNode, responseData) => {
      console.log(treeId, parentNode, responseData);
      return responseData.configuration;
  }

  handleExpandRootNode = (event, treeId, treeNode, msg) => {
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
  }

  render() {
      return (
          <ul id={this.props.treeId} className="ztree" />
      );
  }
}

export default ZTree;
