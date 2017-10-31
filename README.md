# react-ztree

## Dependencies
- zTree
- jQuery

## Install

```
npm install react-ztree --save-dev
```

## Build
- npm run Build

### Examples
https://nkiateam.github.io/react-ztree/examples/example.html

### Docs
https://nkiateam.github.io/react-ztree/docs

## Configuration webpack

```
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

```
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
