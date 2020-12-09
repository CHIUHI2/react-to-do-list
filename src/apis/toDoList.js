import api from './api';

export const getToDoList = () => {
    return api.get("/todos");
}

export const addToDo = (message) => {
    return api.post("/todos", { message });
}