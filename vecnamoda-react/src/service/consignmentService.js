import axios from "./http.js";

const apiUri = "api/consignments";

export const createConsignment = () => {
    return axios.post(apiUri);
}