import React from 'react';
import ZTree from '../../../../src/components/react-ztree';

class BasicExample extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const nodes= [{
            name: 'Nkia',
            id:0,
            children: [{
                name: 'R&D',
                id:1
            },{
                name: 'Sales',
                id:2,
                children:[{
                    name:'Global',
                    id:3
                }]
            }]
        }];
        return (
            <div>
                <h2>사용자 정의 데이터로 생성하는 예제 입니다.</h2>
                <br />
                <ZTree treeId="tree" nodes={nodes}/>
            </div>
        );
    }
}

export default BasicExample;