import React, {createContext, useState} from "react";
import {authenticateUser} from "../service/authService";
import {clearAccessToken, setAccessToken} from "../service/browserStorageService";
import {getAuthenticatedUser} from "../service/userService";

const defaultValue = {
    login: () => {},
    logout: () => {},
    isAuthenticated: false,
    loggedInUser: null
};

export const AuthContext = createContext(defaultValue);

export const AuthProvider = ({children}) => {

    let [isAuthenticated, setIsAuthenticated] = useState();
    let [loggedInUser, setLoggedInUser] = useState();

    let login = async (user) => {
        return new Promise((resolve, reject) => {
            authenticateUser(user).then(response => {
                const bearer = response.headers.authorization; // get user info from auth header from http request
                setAccessToken(bearer); // use user info to create token for user
                setIsAuthenticated(true);
                getAuthenticatedUser().then(userResponse => { // how do we get current this way ??? how does it work
                    setLoggedInUser(userResponse.data);
                });
                console.log("Logged in user: " + user);
                resolve();
            }).catch(reason => { // if login fails
                console.log(reason);
                reject();
            });
        });
    }

    let logout = () => {
        clearAccessToken();
        setIsAuthenticated(false);
    }

    let value = {
        login: login,
        logout: logout,
        isAuthenticated: isAuthenticated,
        loggedInUser: loggedInUser
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}

export const AuthConsumer = AuthContext.Consumer;
