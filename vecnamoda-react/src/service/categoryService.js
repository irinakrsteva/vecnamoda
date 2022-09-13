import axios from "./http";

const apiUri = "/api/categories"

export const getCategories = () => {
    return axios.get(`${apiUri}`);
}

export const getCategory = (id) => {
    return axios.get(`${apiUri}/${id}`)
}