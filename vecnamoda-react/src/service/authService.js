import axios from "./http.js";

const apiUri = "/login";

export const authenticateUser = (user) => {
    return axios.post(apiUri, user, {withCredentials: true});
}