import { combineReducers } from 'redux';
import { GROUP_REQUEST, GROUP_SUCCESS, GROUP_FAILURE } from '../action/group.js';

const defaultState = {
    fetchingUpdate: false,
    data: [],
};
const groupReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GROUP_REQUEST:
            return {
                ...state,
                fetchingUpdate: true
            };
        case GROUP_SUCCESS:
            return {
                ...state,
                fetchingUpdate: false,
                data: action.result.data.configuration,
            };
        case GROUP_FAILURE:
            return {
                ...state,
                fetchingUpdate: false,
            };
        default :
            return {
                ...state,
            };
    }
    return {
        ...state,
    };
};
export default combineReducers({
    group: groupReducer,
});