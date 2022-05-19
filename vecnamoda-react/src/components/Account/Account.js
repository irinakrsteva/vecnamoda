import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {Container} from "react-bootstrap";
import {AuthContext} from "../../context/AuthContext";

// logs out randomly without any logout call ?

function Account() {

    const auth = useContext(AuthContext);

    return (
        <Container className="mt-3">
            {
                auth.isAuthenticated
                ? "Your username is " + auth.loggedInUser.username
                : "You're not logged in!"
            }
            <br/>
            <br/>
            <Link to="myitems">My items</Link>
            <br/>
            <br/>
            <Link to="myorders">My orders</Link>
            <br/>
            <br/>
            <a href="#">Unsubscribe</a>
        </Container>
    );
}

export default Account;