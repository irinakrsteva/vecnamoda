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
                        {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">*/}
                        {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.2">*/}
                        {/*        Another action*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Divider/>*/}
                        {/*    <NavDropdown.Item href="#action/3.4">*/}
                        {/*        Separated link*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*</NavDropdown>*/}

                    </Nav>

                    <Form className="d-flex mx-3">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>

                    <Nav className="ml-auto">
                        { isAuthenticated ? renderLoggedMenu() : renderUnloggedMenu() }

                        <Nav.Item>
                            <Nav.Link className="mx-1 text-light" as={Button} onClick={() => setShowCartPreview(true)}>
                                Shopping Cart
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>

                </Navbar.Collapse>

            </Navbar>

            {/*<Navbar sticky="top" id="menu" className="bg-light" expand="lg">*/}


            {/*    <Col md="2">*/}
            {/*        <Navbar.Brand as={Link} to="/">*/}
            {/*            <Image fluid id="logo" src={logo}/>*/}
            {/*        </Navbar.Brand>*/}
            {/*    </Col>*/}

            {/*    <Navbar.Toggle aria-controls="basic-navbar-nav"/>*/}

            {/*    <Navbar.Collapse id="responsive-navbar-nav">*/}
            {/*        <Nav className="nav container-fluid ">*/}
            {/*            <Nav.Item>*/}
            {/*                <Nav.Link as={Link} to="/shop">Shop</Nav.Link>*/}
            {/*            </Nav.Item>*/}

            {/*            <Nav.Item>*/}
            {/*                <Nav.Link as={Link} to="/sell">Sell</Nav.Link>*/}
            {/*            </Nav.Item>*/}

            {/*            <Nav.Item>*/}
            {/*                <Nav.Link as={Link} to="#">About</Nav.Link>*/}
            {/*            </Nav.Item>*/}

            {/*        </Nav>*/}

            {/*        <Form className="d-flex">*/}
            {/*            <FormControl type="search" placeholder="Search" className="me-3"/>*/}
            {/*        </Form>*/}

            {/*        <Nav className="nav ms-lg-auto">*/}

                        {/*{isAuthenticated ? renderLoggedMenu() : renderUnloggedMenu()}*/}

                        {/*<Nav.Item>*/}
                        {/*    <Nav.Link className="text-light" as={Button} onClick={() => setShowCartPreview(true)}>*/}
                        {/*        Shopping Cart*/}
                        {/*    </Nav.Link>*/}
                        {/*</Nav.Item>*/}

            {/*        </Nav>*/}
            {/*    </Navbar.Collapse>*/}


            {/*</Navbar>*/}


            <ShoppingCartPreview
                show={showCartPreview}
                onHide={() => setShowCartPreview(false)}
                // content={[
                //     {id: 1, price: 900, name: "ArticleView 1"},
                //     {id: 2, price: 1000, name: "ArticleView 2"},
                //     {id: 3, price: 1500, name: "ArticleView 3"},
                //     {id: 4, price: 600, name: "ArticleView 4"},
                //     {id: 5, price: 2100, name: "ArticleView 5"}
                // ]}
            />
        </>
    );
}

export default Menu;