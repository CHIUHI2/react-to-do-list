import { ADD_TO_DO, REMOVE_TO_DO, UPDATE_DONE_STATUS } from './actionTypes';

const toDoList = (state = [], action) => {
    switch(action.type) {
        case ADD_TO_DO :
            return state.concat(action.payload);
        case REMOVE_TO_DO : 
            return state.filter((item) => item.id !== action.payload);
        case UPDATE_DONE_STATUS : 
            return state.map((item) => item.id === action.payload ? {...item, done : !item.done} : item);
        default : 
            return state;
    }
}

export default toDoList;