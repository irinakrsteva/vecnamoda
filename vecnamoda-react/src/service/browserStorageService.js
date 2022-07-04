const tokenKey = "token";

export const setAccessToken = (token) => {
    localStorage.setItem(tokenKey, token);
    console.log("storage: ", localStorage.getItem(tokenKey));
};

export const getAccessToken = () => {
    console.log("retrieving from localstorage");
    return localStorage.getItem(tokenKey);
};

export const clearAccessToken = () => {
    localStorage.removeItem(tokenKey);
    console.log("cleared access token");
};
