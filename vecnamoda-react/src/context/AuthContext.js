import React, {createContext, useEffect, useState} from "react";
import {authenticateUser} from "../service/authService";
import {clearAccessToken, getAccessToken, setAccessToken} from "../service/browserStorageService";
import {getAuthenticatedUser} from "../service/userService";
import {Spinner} from "react-bootstrap";

const defaultValue = {
    login: () => {
    },
    logout: () => {
    },
    loggedInUser: null,
    isAuthenticated: false,
};

export const AuthContext = createContext(defaultValue);

export const AuthProvider = ({children}) => {

    let [isAuthenticated, setIsAuthenticated] = useState(!!getAccessToken());
    let [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        if (isAuthenticated && !loggedInUser) {
            getAuthenticatedUser().then(response => {
                // --- test delayed response ---
                // setTimeout(() => {
                //     setLoggedInUser(response.data);
                // }, 10000)
                setLoggedInUser(response.data);
            }).catch(reason => {
                setIsAuthenticated(false);
            });
        }
    }, [isAuthenticated]);

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
                reject(reason);
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

    if (isAuthenticated && !loggedInUser) {
        return (<Spinner animation="grow" />)
    }
    return (<AuthContext.Provider value={value}>{children}</AuthContext.Provider>);
}

// export const AuthConsumer = AuthContext.Consumer;
