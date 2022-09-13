import axios from "./http.js";

const apiUri = "/api/articles";

export const getAvailableArticles = () => {
    return axios.get(`${apiUri}/available`);
}

export const addArticle = (article) => {
    return axios.post(`${apiUri}/add`, article);
}
