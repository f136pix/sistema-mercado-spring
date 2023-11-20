import axios from "axios";

const apiClient = axios.create(
    {
        baseURL:'http://localhost:8080'
    }
)

const headers = {
    headers : {
        Authorization: "Basic ZjEzNnBpeDo4NDMx"
    }
}

export const retrieveIndexBean = () => apiClient.get("http://localhost:8080/hello-world", {
    headers: {
        Authorization: "Basic ZjEzNnBpeDo4NDMx"
    }
});

export const retrievePathBean = (nome) => apiClient.get(`/hello-world/path-variable/${nome}`, {
    headers: {
        Authorization: "Basic ZjEzNnBpeDo4NDMx"
    }
});
