import React from 'react';
import ZTree from '../../../../src/components/react-ztree';

class AjaxUrlExample extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const treeProps = {
            treeId: 'tree',
            type: 'get',
            url: 'http://192.168.232.211:9998/rest/resource/group',
            simpleDataEnable: true,
            pIdKey: 'parentId',
            dataFilterKey: 'configuration',
        }

        return (
            <div>
                <h2>zTree가 제공하는 async 데이터 로드를 활용하여 서버에 onDemand로 요청하는 예제 입니다.</h2>
                <br />
                <ZTree {...treeProps} expandNodeLevel={1} />
            </div>
        );
    }
}

export default AjaxUrlExample;