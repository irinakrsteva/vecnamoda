import axios from "./http";

const apiUri = "/api/sizes"

export const getSizes = () => {
    return axios.get(`${apiUri}`);
}

export const getSize = (id) => {
    return axios.get(`${apiUri}/${id}`)
}
