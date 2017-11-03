# react-ztree
[![npm](https://img.shields.io/npm/v/react-ztree.svg)](https://www.npmjs.com/package/react-ztree)
[![Build Status](https://travis-ci.org/nkiateam/react-ztree.svg?branch=master)](https://travis-ci.org/nkiateam/react-ztree)
[![Dependencies](https://img.shields.io/david/nkiateam/react-ztree.svg)](https://david-dm.org/nkiateam/react-ztree)
[![DevDependencies](https://img.shields.io/david/dev/nkiateam/react-ztree.svg)](https://david-dm.org/nkiateam/react-ztree?type=dev)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/nkiateam/react-ztree/master/LICENSE)

react-ztree is react-based implementation of zTree(http://www.treejs.cn/v3/main.php#_zTreeInfo)

## Installation

```sh
npm install react-ztree --save-dev
```

## Usage

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import ZTree from 'react-ztree';

const App = () => {
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
        <ZTree treeId='tree' nodes={nodes}/>
    );
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

## Demo Build

```sh
npm run examples
```

### Documentation

https://nkiateam.github.io/react-ztree/docs

## Configuration webpack

```js
-- webpack
// jquery expose
module: {
   rules: [
       {
          test:require.resolve('jquery'),
          use: [{
              loader: 'expose-loader',
              options: 'jQuery'
          }]
       }
   ],
},
```

## Import css

```css
-- css
  -- style
    // css file-path - ../node_modules/ztree/css/zTreeStyle/zTreeStyle.css
    <link rel="stylesheet" href="{public-path}/ztree/css/zTreeStyle/zTreeStyle.css">

  -- import
    @import '~ztree/css/zTreeStyle/zTreeStyle.css';

    /**
     * If a gif file error is found...
     * 1. npm install --save-dev file-loader
     * 2. webpack
     */
    module: {
       rules: [
           {
             test: /\.(png|jpg|gif)$/,
             use: [
               {
                 loader: 'file-loader',
                 options: {}  
               }
             ]
           }
       ],
    }
```

## License

[The MIT License (MIT)](/LICENSE)