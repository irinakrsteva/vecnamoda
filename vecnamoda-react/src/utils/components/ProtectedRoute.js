import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";
import {Navigate} from "react-router-dom";

function ProtectedRoute({children, roles = []}) {

    const auth = useContext(AuthContext);
    const role = auth.isAuthenticated ? auth.loggedInUser.role : null;

    if (!auth.isAuthenticated) {
        return (<Navigate to="../login"/>);
    }
    if (roles.length !== 0 && !roles.includes(role)) {
        return (<Navigate to="../"/>);
    }
    return children;

}

export default ProtectedRoute;