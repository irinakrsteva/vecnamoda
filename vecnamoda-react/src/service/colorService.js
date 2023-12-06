import axios from "./http";

const apiUri = "/api/colors"

export const getColors = () => {
    return axios.get(`${apiUri}`);
}

export const getColor = (id) => {
    return axios.get(`${apiUri}/${id}`)
}
