import React, {useState} from "react";
import "./Register.css";

import {useNavigate} from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import {registerUser} from "../../service/userService";


function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [checked, setChecked] = useState(false);
    const [formErrors, setFormErrors] = useState({
        nameValid: null,
        userNameValid: null,
        emailValid: null,
        passwordValid: null,
        confirmPasswordValid: null
    });

    let onNameChange = (event) => {
        let name = event.target.value;
        setName(name);
        if (name && name.length <= 50) {
            setFormErrors({...formErrors, nameValid: ""});
        } else {
            setFormErrors({...formErrors, nameValid: "Name must be between 1 and 50 characters"});
        }
    }

    let onUsernameChange = (event) => {
        let username = event.target.value;
        setUsername(username);
        if (username && username.length > 2 && username.length <= 50) {
            setFormErrors({...formErrors, userNameValid: ""});
        } else {
            if (username.length < 2) {
                setFormErrors({...formErrors, userNameValid: "Username must be at least 3 characters"});
            } else {
                setFormErrors({...formErrors, userNameValid: "Username cannot exceed 50 characters"});
            }
        }
    }

    let onEmailChange = (event) => {
        const regex = /.+@.+\..+/;
        let email = event.target.value;
        setEmail(email);
        if (email && email.match(regex)) {
            setFormErrors({...formErrors, emailValid: ""});
        } else {
            setFormErrors({...formErrors, emailValid: "Please enter a valid email address"});
        }
    }

    let onPasswordChange = (event) => {
        let password = event.target.value;
        setPassword(password);
        if (password && password.length >= 6 && password.length <= 50) {
            setFormErrors({...formErrors, passwordValid: ""});
        } else {
            if (password.length < 6) {
                setFormErrors({...formErrors, passwordValid: "Password must be at least 6 characters"});
            } else {
                setFormErrors({...formErrors, passwordValid: "Password cannot exceed 50 characters"});
            }
        }
    }

    let onConfirmPasswordChange = (event) => {
        let confirmPassword = event.target.value;
        setConfirmPassword(confirmPassword);
        if (confirmPassword && confirmPassword === password) {
            setFormErrors({...formErrors, confirmPasswordValid: ""});
        } else {
            setFormErrors({...formErrors, confirmPasswordValid: "Passwords don't match"});
        }
    }

    let onCheckChange = (event) => {
        let checked = event.target.checked;
        setChecked(checked);
    }

    let checkValid = () => {
        return (formErrors.nameValid === "" &&
                formErrors.userNameValid === "" &&
                formErrors.emailValid === "" &&
                formErrors.passwordValid === "" &&
                formErrors.confirmPasswordValid === "" &&
                checked === true
        );
    }

    let register = (event) => {
        console.log("Registering...");
        event.preventDefault();
        const user = {
            name: name,
            username: username,
            email: email,
            password: password
        }
        registerUser(user).then(() => {
            console.log("User registered: " + username);
            navigate("/login");
        }).catch(() => {
            console.log("Error registering");
        });
    }

    return (
        <Container className="mt-3">
            <Row>
                <Col lg={{span: 5, offset: 3}} sm={{span:8, offset:2}}>
                    <Form>
                        <Form.Group className="mb-2" controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={onNameChange}/>
                            <p className="formError">{formErrors.nameValid}</p>
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control onChange={onUsernameChange}/>
                            <p className="formError">{formErrors.userNameValid}</p>
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={onEmailChange} type="email"/>
                            <p className="formError">{formErrors.emailValid}</p>
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={onPasswordChange} type="password"/>
                            <p className="formError">{formErrors.passwordValid}</p>
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control onChange={onConfirmPasswordChange} type="password"/>
                            <p className="formError">{formErrors.confirmPasswordValid}</p>
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formCheck">
                            <Form.Check onChange={onCheckChange} type="checkbox" label={(<>I accept the <a href="#">Terms and Conditions</a></>)}/>
                        </Form.Group>
                        <Form.Group style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Button type="submit" disabled={!checkValid()} onClick={register} variant="primary">Register</Button>
                            <Button as={Link} to={"/login"} variant="secondary" className="ms-2">Login</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );

}

export default Register;