import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../../scss/custom.scss';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Menu from "../../layouts/Menu/Menu"
import Intro from "../../pages/Intro/Intro";
import Shop from "../../pages/Shop/Shop";
import Sell from "../../pages/Sell/Sell";
import Register from "../../user/Register/Register";
import Login from "../../user/Login/Login";
import MyAccount from "../../user/MyAccount/MyAccount";
import MyItems from "../../user/MyItems/MyItems";
import MyOrders from "../../user/MyOrders/MyOrders";
import ShoppingCart from "../../pages/ShoppingCart/ShoppingCart";
import CheckOut from "../../pages/CheckOut/CheckOut";
import ArticleView from "../../pages/ArticleView/ArticleView";
import {CartProvider} from "../../context/CartContext";
import Container from "react-bootstrap/Container";
import {AuthProvider} from "../../context/AuthContext";
import FindConsignment from "../../user/FindConsignment/FindConsignment";
import Consignment from "../../user/Consignment/Consignment";
import NewConsignment from "../../pages/Sell/NewConsignment/NewConsignment";
import Footer from "../../layouts/Footer/Footer";
import AllOrders from "../../user/AllOrders/AllOrders";


function App() {
    document.title = 'VecnaModa - Second Hand Online Shop';

    return (
        <>
            <CartProvider>
                <AuthProvider>
                    <div id={global} className="position-relative min-vh-100 flex-column text-dark">
                        <Router>
                            <Menu className="menu"/>
                            <Container fluid className="px-5 content-container">
                                <Routes>
                                    <Route path="/" element={<Intro/>}/>
                                    <Route path="/shop" element={<Shop/>}/>
                                    <Route path="/sell" element={<Sell/>}/>
                                    <Route path="/register" element={<Register/>}/>
                                    <Route path="/login" element={<Login/>}/>
                                    <Route path="/account" element={<MyAccount/>}/>
                                    <Route path="/my-items" element={<MyItems/>}/>
                                    <Route path="/my-orders" element={<MyOrders/>}/>
                                    <Route path="/all-orders" element={<AllOrders/>}/>
                                    <Route path="/shopping-cart" element={<ShoppingCart/>}/>
                                    <Route path="/checkout/:purchaseId" element={<CheckOut/>}/>
                                    <Route path="/shop/:id" element={<ArticleView/>}/>
                                    <Route path="/find-consignment" element={<FindConsignment/>}/>
                                    <Route path="/consignment/:token" element={<Consignment/>}/>
                                    <Route path="/new-consignment/:token" element={<NewConsignment/>}/>
                                </Routes>
                            </Container>
                            <Footer/>
                        </Router>
                    </div>
                </AuthProvider>
            </CartProvider>
        </>
    );

}

export default App;
