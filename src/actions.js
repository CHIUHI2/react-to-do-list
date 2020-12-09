import { ADD_TO_DO, REMOVE_TO_DO, UPDATE_DONE_STATUS, INIT_TO_DO_LIST } from './actionTypes';

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

export const updateDoneStatus = (id) => {
    return {
        type : UPDATE_DONE_STATUS,
        payload : id
    };
}

export const initToDoList = (toDoList) => {
    return {
        type : INIT_TO_DO_LIST,
        payload : toDoList 
    }
}