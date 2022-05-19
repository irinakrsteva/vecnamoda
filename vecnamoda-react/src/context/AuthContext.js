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

    let [isAuthenticated, setIsAuthenticated] = useState(false);
    let [loggedInUser, setLoggedInUser] = useState(null);

    let login = async (user) => {
        return new Promise((resolve, reject) => {
            authenticateUser(user).then(response => {
                const bearer = response.headers.authorization;
                setAccessToken(bearer);
                setIsAuthenticated(true);
                getAuthenticatedUser().then(userResponse => {
                    setLoggedInUser(userResponse.data); // UserGetDto: { email, name, username, role }
                    console.log("Logging in user: ", userResponse.data);
                });
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

// export const AuthConsumer = AuthContext.Consumer;
