import axios from "./http.js";

const apiUri = "/api/articles";

export const getAvailableArticles = (page, size) => {
    const params =
        {
            page: page-1,
            size: size
        };
    return axios.get(`${apiUri}/available`, { params });
}

export const addArticle = (article) => {
    return axios.post(`${apiUri}/add`, article);
}

export const sellArticles = (ids) => {
    return axios.put(`${apiUri}/batch-sell`, ids);
}