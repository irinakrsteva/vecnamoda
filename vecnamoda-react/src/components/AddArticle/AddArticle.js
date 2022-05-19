import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {Container} from "react-bootstrap";
import {AuthContext} from "../../context/AuthContext";
//ONLY FOR EMPLOYEES/ADMINS


function AddArticle() {

    const auth = useContext(AuthContext);

    return (
        <Container className="mt-3">

            {
                (auth.isAuthenticated && auth.loggedInUser.role === "CUSTOMER")
                ? console.log("You cannot add articles as customer")
                : console.log("You can add articles")
            }

            <p>Add new article...</p>
        </Container>
    );

}

export default AddArticle;