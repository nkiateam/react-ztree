import React from 'react';
import ZTree from '../../../../src/components/react-ztree';
import axios from 'axios';

class AjaxLoadExample extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const _this = this;
        axios.get('http://192.168.232.211:9998/rest/resource/group')
            .then(function (response) {
                _this.refTree.addNodes(null, 0, response.data.configuration);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    render() {
        const treeProps = {
            treeId: 'tree',
            type: 'get',
            simpleDataEnable: true,
            pIdKey: 'parentId',
            expandNodeLevel: 2
        }

        return (
            <div>
                <h2>컴포넌트가 생성된 다음에 Ajax로 데이터를 요청하고 트리를 생성하는 예제 입니다.</h2>
                <br />
                <ZTree ref={(tree) => { this.refTree = tree; }} {...treeProps} />
            </div>
        );
    }
}

export default AjaxLoadExample;