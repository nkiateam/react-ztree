import React from 'react';
import ZTree from '../../../../src/components/react-ztree';
import { InputNumber, Button } from 'antd';

class ExpandNodeLevelExample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            expandNodeLevel: 1
        }
    }

    onChange = (value) => {
        this.setState({
            expandNodeLevel: value
        });
    }

    onClick = () => {
        this.refTree.refresh();
    }

    render() {
        const nodes= [{
            name: 'Nkia',
            id: 0,
            children: [{
                name: 'R&D',
                id: 1
            },{
                name: 'Sales',
                id: 2,
                children:[{
                    name: 'Global',
                    id: 3,
                    children:[{
                        name: 'Global #1',
                        id: 4
                    },{
                        name: 'Global #2',
                        id: 5
                    },{
                        name: 'Global #3',
                        id: 6
                    },{
                        name: 'Global #4',
                        id: 7
                    }]
                }]
            }]
        }];
        console.info('this.state.expandNodeLevel', this.state.expandNodeLevel)

        return (
            <div>
                <ZTree ref={(tree) => { this.refTree = tree; }} treeId="tree" nodes={nodes} expandNodeLevel={this.state.expandNodeLevel} />
                <InputNumber min={0} max={10} defaultValue={1} onChange={this.onChange} />
                <Button type="primary" onClick={this.onClick}>확장 레벨 변경</Button>
            </div>
        );
    }
}

export default ExpandNodeLevelExample;