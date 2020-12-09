import api from './api';

export const getToDoList = () => {
    return api.get("/todos");
}

export const addToDo = (message) => {
    return api.post("/todos", { message });
}

export const removeToDo = (id) => {
    return api.delete("/todos/" + id);
}