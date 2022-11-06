import axios from "./http.js";
import * as qs from 'qs';

const apiUri = "/api/articles";

export const getAvailableArticles = (page, size, searchString, filters) => {
    const params =
        {
            page: page-1,
            size,

            searchString,
            // Is this the best way to define the filters? vvv
            startPrice: filters.priceFilter[0],
            endPrice: filters.priceFilter[1],
            conditions: filters.conditionFilter,
            categoryIds: filters.categoryFilter,
            sizeIds: filters.sizeFilter,
            colorIds: filters.colorFilter
        };
    // console.log("Request for article with params: ", params);
    return axios.get(`${apiUri}/available`, {
        params,
        paramsSerializer: params => qs.stringify(params,{ arrayFormat: 'comma', encode: false })
    });
}

export const addArticle = (article) => {
    return axios.post(`${apiUri}/add`, article);
}

export const sellArticles = (ids) => {
    return axios.put(`${apiUri}/batch-sell`, ids);
}