import React from 'react';
import ZTree from '../../../../src/components/react-ztree';

class CheckboxExample extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const nodes= [
            { id:1, pId:0, name:"Custom Icon 01", open:true, iconSkin:"fa-camera-retro"},
            { id:11, pId:1, name:"leaf node 01", iconSkin:"fa-camera-retro"},
            { id:12, pId:1, name:"leaf node 02", iconSkin:['fa-circle fa-stack-1x', 'fa-flag fa-stack-1x']},
            { id:13, pId:1, name:"leaf node 03", iconSkin:"icon03"},
            { id:2, pId:0, name:"Custom Icon 02", open:true, iconSkin:"pIcon02"},
            { id:21, pId:2, name:"leaf node 01", iconSkin:"icon04"},
            { id:22, pId:2, name:"leaf node 02", iconSkin:"icon05"},
            { id:23, pId:2, name:"leaf node 03", iconSkin:"icon06"},
            { id:3, pId:0, name:"no Custom Icon", open:true },
            { id:31, pId:3, name:"leaf node 01"},
            { id:32, pId:3, name:"leaf node 02"},
            { id:33, pId:3, name:"leaf node 03"}
        ];
        return (
            <div>
                <h2>사용자 정의 ICON을 보여주며, font-awesome을 지원하고 있습니다.</h2>
                <br />
                <ZTree treeId="tree" nodes={nodes} />
            </div>
        );
    }
}

export default CheckboxExample;