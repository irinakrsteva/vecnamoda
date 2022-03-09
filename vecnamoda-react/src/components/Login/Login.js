import React from "react";
import {Container, Form} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

function Login() {

    return (
        <Container className="mt-3">
            <Row>
                <Col lg={{span: 5, offset: 3}} sm={{span: 8, offset: 2}}>
                    <Form>
                        <Form.Group className="mb-2" controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control/>
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"/>
                        </Form.Group>
                        <Form.Group style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Button type="submit" variant="primary">Login</Button>
                            <Button as={Link} to={"/register"} variant="secondary" className="ms-2">Register</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );

}

export default Login;