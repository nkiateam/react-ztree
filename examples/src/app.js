import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

import ZTree from '../../lib/react-ztree';
//import ZTree from '../../src/react-ztree';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const nodes= [{
          name: 'b',
          id:0,
          children: [{
            name: 'c',
            id:1
          },{
            name: 'd',
            id:2,
            children:[{
              name:'e',
              id:3
            }]
          }]
        }];

        return (
            <div><ZTree data={nodes} /></div>
        );
    }
}

ReactDom.render(<App />, document.getElementById('app'));
