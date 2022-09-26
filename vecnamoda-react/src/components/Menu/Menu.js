import React, {useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import ShoppingCartPreview from "../ShoppingCartPreview/ShoppingCartPreview";
import {AuthContext} from "../../context/AuthContext";
import {Image} from "react-bootstrap";

import logo from '../../assets/imgs/0logo.png'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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
                    <Nav.Link className="mx-1 " as={Link} to="/account">My account</Nav.Link>
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
        <Navbar sticky="top" id="menu" className="bg-light" expand="lg">
            <Container className="text-dark">

                <Row>

                    <Col lg="2">
                        <Navbar.Brand as={Link} to="/">
                            <Image fluid id="logo" src={logo}/>
                        </Navbar.Brand>
                    </Col>

                    <Col md="10" className="mt-3">
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="nav container-fluid">
                                <Nav.Item>
                                    <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link as={Link} to="/sell">Sell</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link as={Link} to="#">About</Nav.Link>
                                </Nav.Item>
                                <Form className="d-flex">
                                    <FormControl type="search" placeholder="Search" className="me-2"/>
                                </Form>

                                <Nav className="nav ms-lg-auto">

                                    {isAuthenticated ? renderLoggedMenu() : renderUnloggedMenu()}

                                    <Nav.Item>
                                        <Nav.Link className="text-white" as={Button} onClick={() => setShowCartPreview(true)}>
                                            Shopping Cart
                                        </Nav.Link>
                                    </Nav.Item>

                                </Nav>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>

                </Row>
            </Container>

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
        </Navbar>
    );
}

export default Menu;