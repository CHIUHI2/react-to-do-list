import { ADD_TO_DO, REMOVE_TO_DO, REPLACE_TO_DO, INIT_TO_DO_LIST, ADD_TAG, INIT_TAGS, REMOVE_TAG } from './actionTypes';

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

export const replaceToDo = (item) => {
    return {
        type : REPLACE_TO_DO,
        payload : item
    };
}

export const initToDoList = (toDoList) => {
    return {
        type : INIT_TO_DO_LIST,
        payload : toDoList 
    }
}


export const addTag = (tag) => {
    return {
        type : ADD_TAG,
        payload : tag
    }
}

export const removeTag = (id) => {
    return {
        type : REMOVE_TAG,
        payload : id
    }
}

export const initTags = (tags) => {
    return {
        type : INIT_TAGS,
        payload : tags
    }
}