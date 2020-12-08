import { ADD_TO_DO, REMOVE_TO_DO, UPDATE_DONE_STATUS } from './actionTypes';

const initState = {
    toDoList : []
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case ADD_TO_DO :
            return {
                toDoList : state.toDoList.concat(action.payload)
            };
        case REMOVE_TO_DO : 
            return {
                toDoList : state.toDoList.filter((item) => item.id !== action.payload)
            };
        case UPDATE_DONE_STATUS : 
            return {
                toDoList : state.toDoList.map((item) => item.id === action.payload ? {...item, done : item.done ? false : true} : item)
            };
        default : 
            return state;
    }
}

export default reducer;