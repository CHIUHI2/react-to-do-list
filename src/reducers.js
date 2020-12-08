import { ADD_TO_DO, REMOVE_TO_DO } from './actionTypes';

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
        default : 
            return state;
    }
}

export default reducer;