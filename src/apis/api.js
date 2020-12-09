import axios from 'axios';

const api = axios.create({
    baseURL : "https://5fd06b8e1f2374001663187e.mockapi.io/api"
});

export default api;