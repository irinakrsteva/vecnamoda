import React, {useContext, useState} from "react";
import {Container, Form} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
// import axios from "axios";

function Login() {

    let auth = useContext(AuthContext);
    let nav = useNavigate();

    let [username, setUsername] = useState();
    let [password, setPassword] = useState();

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
            console.log("Could not attempt login " + username);
        });
    }

    let onUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    let onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    //
    // let testRequest = () => {
    //     axios.post('/login', {
    //         username: 'testuser3',
    //         password: 'password'
    //     })
    //         .then((response) => console.log(response))
    //         .catch((error) => console.log(error));
    // }

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
                        <Form.Group style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Button type="submit" variant="primary" onClick={login}>Login</Button>
                            <Button as={Link} to={"/register"} variant="secondary" className="ms-2">Register</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>

            {/*<Button onClick={testRequest}>*/}
            {/*    Test Request*/}
            {/*</Button>*/}

        </Container>
    );

}

export default Login;