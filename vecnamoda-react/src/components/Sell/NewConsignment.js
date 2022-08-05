import React, {useContext} from "react";
import {Button, Container} from "react-bootstrap";
import {createConsignment} from "../../service/consignmentService";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {AuthContext} from "../../context/AuthContext";
import {useNavigate, useParams} from "react-router-dom";

function NewConsignment() {

    const {token} = useParams();

    return (
        <Container className="mt-5">
            <Row className="my-5">
                <Col align="center">
                    <h3>Your new consignment key is:</h3>
                    <h2>{token}</h2>
                </Col>
            </Row>
        </Container>
    );
}

export default NewConsignment;