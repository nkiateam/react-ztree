import React from 'react';
import {
    Route
} from 'react-router-dom';

import {
    BasicExample,
    CheckboxExample,
    IconExample,
    AjaxUrlExample,
    AjaxLoadExample,
    AjaxReduxExample,
    ExpandNodeLevelExample,
    ExpColExample,
    StateExample,
} from './pages';

export default (
    <div>
        <Route exact path="/" component={BasicExample} />
        <Route exact path="/basic" component={BasicExample} />
        <Route exact path="/checkbox" component={CheckboxExample} />
        <Route exact path="/icon" component={IconExample} />
        <Route exact path="/ajaxurl" component={AjaxUrlExample} />
        <Route exact path="/ajaxload" component={AjaxLoadExample} />
        <Route exact path="/ajaxredux" component={AjaxReduxExample} />
        <Route exact path="/expandnodelevel" component={ExpandNodeLevelExample} />
        <Route exact path="/expcol" component={ExpColExample} />
        <Route exact path="/state" component={StateExample} />
    </div>
);
