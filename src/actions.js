import { ADD_TO_DO, REMOVE_TO_DO } from './actionTypes';

export const addToDo = (item) => {
    return {
        type : ADD_TO_DO,
        payload : item
    };
}

export const removeToDo = (id) => {
    return {
        type : REMOVE_TO_DO,
        payload : id
    };
}