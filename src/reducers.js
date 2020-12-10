import { ADD_TAG, ADD_TO_DO, INIT_TO_DO_LIST, REMOVE_TO_DO, REPLACE_TO_DO, INIT_TAGS, REMOVE_TAG } from './actionTypes';
import { combineReducers } from 'redux';

const toDoList = (state = [], action) => {
    switch(action.type) {
        case ADD_TO_DO :
            return state.concat(action.payload);
        case REMOVE_TO_DO : 
            return state.filter((item) => item.id !== action.payload);
        case REPLACE_TO_DO : 
            return state.map((item) => item.id === action.payload.id ? action.payload : item);
        case INIT_TO_DO_LIST :
            return action.payload;
        default : 
            return state;
    }
}

const tags = (state = [], action) => {
    switch(action.type) {
        case ADD_TAG : 
            return state.concat(action.payload);
        case INIT_TAGS : 
            return action.payload;
        case REMOVE_TAG : 
            return state.filter((tag) => tag.id !== action.payload);
        default : 
            return state;
    }
}

export default combineReducers({
    toDoList,
    tags
});