import api from './api';

export const getTags = () => {
    return api.get("/tags");
}

export const addTag = (tag) => {
    return api.post("/tags", tag);
}

export const removeTag = (id) => {
    return api.delete(`/tags/${id}`);
}