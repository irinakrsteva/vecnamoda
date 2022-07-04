import axios from "./http";

const apiUri = "/api/colors"

export const getColors = () => {
    return axios.get(`${apiUri}/getall`);
}

export const saveColor = (color) => {
    return axios.post(`${apiUri}/add`);
}