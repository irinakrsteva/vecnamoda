import axios from "./http.js";

const apiUri = "/api/images/";

export const uploadImageFile = (file) => {
    let formData = new FormData();
    formData.append('file', file);
    return axios.post(`${apiUri}`, formData);
}
