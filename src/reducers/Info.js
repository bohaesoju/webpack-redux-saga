import * as Types from '../actions/ActionTypes';

const infoInitialState = {
    data: null
};

const info = (state = infoInitialState, action) => {
    switch(action.type){
        case Types.SUCCESS_INFO:
            return {
                ...state,
                data: action.data
            };
        case Types.FAILURE_INFO:
            return {
                ...state,
                data: null
            };
        default:
            return Object.assign({}, state);
    }
};

export default info;
