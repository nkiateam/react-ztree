import React from 'react';
import ZTree from '../../../../src/components/react-ztree';


class CheckboxExample extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
        const nodes= [
            { id:1, pId:0, name:"can check 1", open:true},
            { id:11, pId:1, name:"can check 1-1", open:true},
            { id:111, pId:11, name:"can check 1-1-1"},
            { id:112, pId:11, name:"can check 1-1-2"},
            { id:12, pId:1, name:"can check 1-2", open:true},
            { id:121, pId:12, name:"can check 1-2-1"},
            { id:122, pId:12, name:"can check 1-2-2"},
            { id:2, pId:0, name:"can check 2", checked:true, open:true},
            { id:21, pId:2, name:"can check 2-1"},
            { id:22, pId:2, name:"can check 2-2", open:true},
            { id:221, pId:22, name:"can check 2-2-1", checked:true},
            { id:222, pId:22, name:"can check 2-2-2"},
            { id:23, pId:2, name:"can check 2-3"}
        ];
        return (
            <div>
                <ZTree treeId="tree" nodes={nodes} checkboxEnable={true} simpleDataEnable={true} />

            </div>
        );
    }
}

export default CheckboxExample;