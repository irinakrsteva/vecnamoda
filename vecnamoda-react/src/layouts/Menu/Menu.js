import React, {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button";
import ShoppingCartPreview from "../../components/ShoppingCartPreview/ShoppingCartPreview";
import {AuthContext} from "../../context/AuthContext";
import {Image} from "react-bootstrap";
import logo from '../../assets/imgs/0logo.png'
import './Menu.css';
import Badge from "react-bootstrap/Badge";
import {CartContext} from "../../context/CartContext";

function Menu() {
    const [showCartPreview, setShowCartPreview] = React.useState(false);
    const cart = useContext(CartContext);

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
                    <Nav.Link className="mx-1 link" as={Link} to="/register">Register</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="mx-1 link" as={Link} to="/login">Log in</Nav.Link>
                </Nav.Item>
            </>
        );
    }

    let renderLoggedMenu = () => {
        return (
            <>
                <Nav.Item>
                    <Nav.Link className="mx-1 px-4 link" as={Link} to="/account">My account</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="mx-1 px-4 text-white link" as={Button} onClick={() => {
                        onLogout()
                    }}>Log out</Nav.Link>
                </Nav.Item>
            </>
        );
    }

    let isAuthenticated = auth.isAuthenticated;

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="px-5 fixed-top">

                <Navbar.Brand as={Link} to="/">
                    <Image className="logo mx-4" fluid id="logo" src={logo}/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="md-auto">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/shop" className="link">Shop</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/sell" className="link">Sell</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="#" className="link">About</Nav.Link>
                        </Nav.Item>

                    </Nav>

                    <Nav className="ms-auto mr-5">
                        {isAuthenticated ? renderLoggedMenu() : renderUnloggedMenu()}

                        <Nav.Item>
                            <Nav.Link className="mx-1 px-4 text-light link" as={Button}
                                      onClick={() => setShowCartPreview(true)}>
                                Shopping Cart
                                <Badge className="badge" bg={cart.items.length === 0 ? 'dark' : 'success'}>
                                    {cart.items.length}
                                </Badge>
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