import axios from "./http.js";

const apiUri = "/api/articles";

export const addArticle = (article) => {
    return axios.post(`${apiUri}\add`, article);
}