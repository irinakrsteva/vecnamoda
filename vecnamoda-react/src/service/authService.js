import axios from "./http.js";

const apiUri = "/auth";

export const authenticateUser = (user) => {
    return axios.post(apiUri, user, {withCredentials: true});
}