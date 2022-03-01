import React from "react";
import {Link} from "react-router-dom";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

function Menu() {

    return (
        <Container >
            <Navbar sticky="top" id="menu" bg="light" expand="lg">
                <Nav className="nav container-fluid">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/" className="navbar-brand"><b>VecnaModa</b></Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link as={Link} to="/sell">Sell</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </Nav.Item>
                    <Form className="d-flex">
                        <FormControl type="search" placeholder="Search" className="me-2"/>
                    </Form>

                    <Nav className="nav ms-lg-auto text-center">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/login">Log in</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/account">My account</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/shoppingCart">Shopping Cart</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Nav>
            </Navbar>

        </Container>
    );
}

export default Menu;