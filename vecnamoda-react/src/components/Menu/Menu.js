import React, {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import ShoppingCartPreview from "../ShoppingCartPreview/ShoppingCartPreview";
import {AuthContext} from "../../context/AuthContext";
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Image, NavDropdown} from "react-bootstrap";


import logo from '../../assets/imgs/0logo.png'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import './Menu.css';

function Menu() {
    const [showCartPreview, setShowCartPreview] = React.useState(false);

    const auth = useContext(AuthContext);
    const nav = useNavigate();

    let onLogout = () => {
        auth.logout();
        nav("../");
    }

    let renderUnloggedMenu = () => {
        return (
            <>
                <Nav.Item>
                    <Nav.Link className="mx-1" as={Link} to="/register">Register</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="mx-1" as={Link} to="/login">Log in</Nav.Link>
                </Nav.Item>
            </>
        );
    }

    let renderLoggedMenu = () => {
        return (
            <>
                <Nav.Item>
                    <Nav.Link className="mx-1" as={Link} to="/account">My account</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="mx-1 text-white" as={Button} onClick={() => {
                        onLogout()
                    }}>Log out</Nav.Link>
                </Nav.Item>
            </>
        );
    }

    let isAuthenticated = auth.isAuthenticated;

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="px-5">

                <Navbar.Brand as={Link} to="/" >
                    <Image className="logo" fluid id="logo" src={logo}/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="md-auto">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/sell">Sell</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="#">About</Nav.Link>
                        </Nav.Item>

                    </Nav>

                    <Form className="d-flex mx-3">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>

                    <Nav className="ms-auto">
                        { isAuthenticated ? renderLoggedMenu() : renderUnloggedMenu() }

                        <Nav.Item>
                            <Nav.Link className="mx-1 text-light" as={Button} onClick={() => setShowCartPreview(true)}>
                                Shopping Cart
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>


            <ShoppingCartPreview
                show={showCartPreview}
                onHide={() => setShowCartPreview(false)}
            />
        </>
    );
}

export default Menu;