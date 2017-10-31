import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import ZTree from '../../../../src/components/react-ztree';
import { getGroup } from '../../action/group.js';

class AjaxReduxExample extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getData();
    }

    onClick = () => {
        this.props.getData();
    }

    render() {
        const { group } = this.props;

        const treeProps = {
            treeId: 'tree',
            type: 'get',
            simpleDataEnable: true,
            pIdKey: 'parentId',
            nodes: group,
            nodeState: true,
        }

        return (
            <div>
                <h2>Tree 노드 선택시에 새로고침을 하는 경우 - 마지막 선택 유지해주는 기능</h2>
                <br />
                <Button type="primary" onClick={this.onClick}>데이터 요청</Button>
                <br />
                <ZTree {...treeProps} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(getGroup()),
    }
}

const mapStateToProps = (state) => {
    return { group: state.group.data }
}
export default connect(mapStateToProps, mapDispatchToProps)(AjaxReduxExample);