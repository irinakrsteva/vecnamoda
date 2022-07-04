import React, {useContext, useState} from "react";
import {Container, Form} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

function Login() {

    let auth = useContext(AuthContext);
    let nav = useNavigate();

    let [username, setUsername] = useState();
    let [password, setPassword] = useState();

    let [errorLoggingIn, setErrorLoggingIn] = useState("");

    let login = (event) => {
        event.preventDefault();
        const user = {
            username: username,
            password: password
        };
        auth.login(user).then(() => {
            console.log("Attempted to login " + username);
            nav("../");
        }).catch(() => {
            setErrorLoggingIn("Incorrect username and/or password!");
            console.log("Failed to log in " + username);
        });
    }

    let onUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    let onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    return (
        <Container className="mt-3">
            <Row>
                <Col lg={{span: 5, offset: 3}} sm={{span: 8, offset: 2}}>
                    <Form>
                        <Form.Group className="mb-2" controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control onChange={onUsernameChange} />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={onPasswordChange} type="password"/>
                        </Form.Group>
                        <p className="formError"> { errorLoggingIn } </p>
                        <Form.Group style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Button type="submit" variant="primary" onClick={login}>Login</Button>
                            <Button as={Link} to={"/register"} variant="secondary" className="ms-2">Register</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );

}

export default Login;