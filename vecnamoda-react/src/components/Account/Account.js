import React from "react";
import {Link} from "react-router-dom";
import {Container} from "react-bootstrap";

function Account() {

    return (
        <Container className="mt-3">
            Your username is _______
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