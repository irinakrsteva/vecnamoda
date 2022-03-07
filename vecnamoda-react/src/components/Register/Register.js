import React, {useState} from "react";
import "./Register.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Register() {
    const [nameState, setNameState] = useState("");
    const [usernameState, setUsernameState] = useState("");
    const [emailState, setEmailState] = useState("");
    const [passwordState, setPasswordState] = useState("");
    const [confirmPasswordState, setConfirmPasswordState] = useState("");
    const [checkedState, setCheckedState] = useState(false);
    const [formErrorsState, setFormErrorsState] = useState({
        nameValid: null,
        userNameValid: null,
        emailValid: null,
        passwordValid: null,
        confirmPasswordValid: null
    });

    let onNameChange = (event) => {
        const name = event.target.value;
        setNameState(name);
        if (name && name.length <= 50) {
            setFormErrorsState({...formErrorsState, nameValid: ""});
        } else {
            setFormErrorsState({...formErrorsState, nameValid: "Name cannot exceed 50 characters"});
        }
    }

    let onUsernameChange = (event) => {
        const username = event.target.value;
        setUsernameState(username);
        if (username && username.length > 2 && username.length <= 50) {
            setFormErrorsState({...formErrorsState, userNameValid: ""});
        } else {
            if (username.length < 2) {
                setFormErrorsState({...formErrorsState, userNameValid: "Username must be at least 3 characters"});
            } else {
                setFormErrorsState({...formErrorsState, userNameValid: "Username cannot exceed 50 characters"});
            }
        }
    }

    let onEmailChange = (event) => {
        const email = event.target.value;
        const regex = /.+@.+\..+/;
        setEmailState(email);
        if (email && email.match(regex)) {
            setFormErrorsState({...formErrorsState, emailValid: ""});
        } else {
            setFormErrorsState({...formErrorsState, emailValid: "Please enter a valid email address"});
        }
    }

    let onPasswordChange = (event) => {
        const password = event.target.value;
        setPasswordState(password);
        if (password && password.length >= 6 && password.length <= 50) {
            setFormErrorsState({...formErrorsState, passwordValid: ""});
        } else {
            if (password.length < 6) {
                setFormErrorsState({...formErrorsState, passwordValid: "Password must be at least 6 characters"});
            } else {
                setFormErrorsState({...formErrorsState, passwordValid: "Password cannot exceed 50 characters"});
            }
        }
    }

    let onConfirmPasswordChange = (event) => {
        const confirmPassword = event.target.value;
        setConfirmPasswordState(confirmPassword);
        if (confirmPassword && confirmPassword === passwordState) {
            setFormErrorsState({...formErrorsState, confirmPasswordValid: ""});
        } else {
            setFormErrorsState({...formErrorsState, confirmPasswordValid: "Passwords don't match"});
        }
    }

    let onCheckChange = (event) => {
        const checked = event.target.checked;
        setCheckedState(checked);
    }

    let checkValid = () => {
        return (formErrorsState.nameValid === "" &&
                formErrorsState.userNameValid === "" &&
                formErrorsState.emailValid === "" &&
                formErrorsState.passwordValid === "" &&
                formErrorsState.confirmPasswordValid === "" &&
                checkedState === true
        );
    }

    let submit = (event) => {
        event.preventDefault();

    }

    return (
        <Container>
            <Row>
                <Col lg={{span: 6, offset: 3}}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={onNameChange}/>
                            <p className="formError">{formErrorsState.nameValid}</p>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control onChange={onUsernameChange}/>
                            <p className="formError">{formErrorsState.userNameValid}</p>
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={onEmailChange} type="email"/>
                            <p className="formError">{formErrorsState.emailValid}</p>
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={onPasswordChange} type="password"/>
                            <p className="formError">{formErrorsState.passwordValid}</p>
                        </Form.Group>
                        <Form.Group controlId="formConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control onChange={onConfirmPasswordChange} type="password"/>
                            <p className="formError">{formErrorsState.confirmPasswordValid}</p>
                        </Form.Group>
                        <Form.Group controlId="formCheck">
                            <Form.Check onChange={onCheckChange} type="checkbox" label={(<>I accept the <a href="#">Terms and Conditions</a></>)}/>
                        </Form.Group>
                        <Button type="submit" variant="primary">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );

}

export default Register;