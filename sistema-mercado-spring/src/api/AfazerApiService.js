import axios from "axios";

const headers = {
    'Origin': 'http://localhost:3000',
};

const apiClient = axios.create({
    baseURL: 'http://localhost:8080',
})

// get all por username
export const retrieveAfazeresByUsernameApi = (username) => {
    return apiClient.get(`users/${username}/afazeres`);
}

// get singleton por id
export const retrieveAfazeresById = (username, id) => {
    return apiClient.get(`users/${username}/afazeres/${id}`)
}

// delete singleton por id
export const deleteAfazerByIdApi = (username, id) => {
    return apiClient.delete(`users/${username}/afazeres/${id}`);
}

// (url, body)
export const updateAfazerApi = (username, id, afazer) => {
    return apiClient.put(`users/${username}/afazeres/${id}`, afazer)
}

export const createAfazerApi = (username, afazer) => {
    return apiClient.post(`users/${username}/afazeres`, afazer)
}



