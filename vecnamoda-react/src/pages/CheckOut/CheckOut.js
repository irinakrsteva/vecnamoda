import React, {useState} from "react";
import {Container} from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import {Link} from "react-router-dom";

function CheckOut() {
    return (
        <Container className="mt-3">
            <p>Thank you for your purchase!</p>
            <Link to="/shop">See more items...</Link>
        </Container>
    );
}

export default CheckOut;