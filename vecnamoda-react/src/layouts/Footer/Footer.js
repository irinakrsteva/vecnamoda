import React, {useState} from "react";
import {Button, Container} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// import ColorContext from "../../context/CartContext";

function Footer() {

    // const [updatableTestVar, setUTestVar] = useState(testVar);

    return (
        <Container fluid className="bottom-0 position-absolute mt-auto pb-4">
            <hr/>
            <Row className="text-center">

                <Col>© 2022 VecnaModa</Col>
                <Col>Terms of Agreement</Col>
                <Col>Contact</Col>

            </Row>
        </Container>
    );

}

export default Footer;