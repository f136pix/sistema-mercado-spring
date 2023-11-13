import axios from "axios";

const apiClient = axios.create(
    {
        baseURL:'http://localhost:8080'
    }
)

export const retrieveIndexBean= () => apiClient.get("http://localhost:8080/hello-world");

export const retrievePathBean = (nome) => apiClient.get(`/hello-world/path-variable/${nome}`);
