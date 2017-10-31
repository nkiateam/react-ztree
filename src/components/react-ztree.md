### 기본 Tree

```js

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

<div>
    <ZTree treeId="tree" nodes={nodes}/>
</div>

```

### 체크박스 Tree

```js

 const nodes2 = [
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

<div>
    <ZTree treeId="tree2" nodes={nodes2} checkboxEnable={true} simpleDataEnable={true} />
</div>


```

### URL 요청 Tree

```js

<div>
    <ZTree treeId={'tree3'}
       type={'get'}
       url={'http://192.168.232.211:9998/rest/resource/group'}
       simpleDataEnable={true}
       pIdKey={'parentId'}
       dataFilterKey={'configuration'}
       expandNodeLevel={1} />
</div>

```

### Ajax 요청 Tree
- 컴포넌트 생성 이후에 Ajax로 요청한 데이터로 생성하는 Tree
- 문서에서는 구현이 되지 않아 별도 컴포넌트 예제에서 확인하세요.

### Redux 비동기 요청 Tree
- 컴포넌트 생성 이후에 Redux 비동기 요청한 데이터로 생성하는 Tree
- 문서에서는 구현이 되지 않아 별도 컴포넌트 예제에서 확인하세요.

### Tree 생성시에 확장 레벨(Depth) 설정 

```js

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

<div>
    <ZTree ref={(tree) => { this.refTree = tree; }} treeId="tree4" nodes={nodes} expandNodeLevel={2} />
</div>

```

### Tree 전체 펼침/접기 기능                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
- 문서에서는 구현이 되지 않아 별도 컴포넌트 예제에서 확인하세요.

### Tree Custom Icon

```js

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

<div>
    <ZTree treeId="tree6" nodes={nodes} />
</div>

```
