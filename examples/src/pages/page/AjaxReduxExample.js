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
            expandNodeLevel: 2,
            nodes: group,
        }

        return (
            <div>
                <h2>컴포넌트가 생성된 다음에 Redux 데이터를 요청하고 트리를 생성하는 예제 입니다.</h2>
                <br />
                <Button type="primary" onClick={this.onClick}>데이터 요청</Button>
                <br />
                <ZTree ref={(tree) => { this.refTree = tree; }} {...treeProps} />
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