import api from './api';

export const getToDoList = () => {
    return api.get("/todos");
}

export const addToDo = (message) => {
    return api.post("/todos", { message });
}

export const removeToDo = (id) => {
    return api.delete(`/todos/${id}`);
}

export const replaceToDo = (item) => {
    return api.put(`/todos/${item.id}`, item);
}