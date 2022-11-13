import axios from "./http.js";

const apiUri = "/api/purchases";

export const getAllPurchases = () => {
    return axios.get(`${apiUri}`);
}

export const getAllPurchasesByCurrentUser = () => {
    return axios.get(`${apiUri}/currentuser`);
}

export const makePurchase = () => {
    return axios.post(`${apiUri}`);
}