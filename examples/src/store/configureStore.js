import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducer/group';
import promiseMiddleware from '../middleware/promiseMiddleware';

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(promiseMiddleware),
    // other store enhancers if any
));

export default store;