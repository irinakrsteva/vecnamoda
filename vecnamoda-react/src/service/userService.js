import axios from "./http.js";

const apiUri = "api/users";

export const registerUser = (user) => {
    return axios.post(`${apiUri}/register`, user);
}

export const getUserByUsername = (username) => {
    return axios.get(`${apiUri}/${username}`);
}

export const getAuthenticatedUser = () => {
    return axios.get(`${apiUri}/authenticated`);
}