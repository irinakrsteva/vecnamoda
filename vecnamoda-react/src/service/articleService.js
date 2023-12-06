import axios from "./http.js";
import * as qs from 'qs';

const apiUri = "/api/articles";

export const getAvailableArticles = (page, size, searchString, filters) => {
    const params =
        {
            page: page-1,
            size,
            searchString,
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
