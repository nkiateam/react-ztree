import React from 'react';
import ZTree from '../../../../src/components/react-ztree';
import { InputNumber, Button } from 'antd';

class ExpColExample extends React.Component {

    constructor(props) {
        super(props);
    }

    onExpandClick = () => {
        this.refTree.expandAll();
    }

    onCollpaseClick = () => {
        this.refTree.collpaseAll();
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

        return (
            <div>
                <Button type="primary" onClick={this.onExpandClick}>전체 확장</Button>
                <Button onClick={this.onCollpaseClick}>전체 접기</Button>
                <ZTree ref={(tree) => { this.refTree = tree; }} treeId="tree" nodes={nodes}/>
            </div>
        );
    }
}

export default ExpColExample;