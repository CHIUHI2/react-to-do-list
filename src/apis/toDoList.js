import api from './api';

export const getToDoList = () => {
    return api.get("/todos");
}