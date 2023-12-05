import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../../scss/custom.scss';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Menu from "../../layouts/Menu/Menu"
import Intro from "../../pages/Intro/Intro";
import Shop from "../../pages/Shop/Shop";
import Sell from "../../pages/Sell/Sell";
import Register from "../../pages/Register/Register";
import Login from "../../pages/Login/Login";
import MyAccount from "../../pages/MyAccount/MyAccount";
import MyItems from "../../pages/MyItems/MyItems";
import MyOrders from "../../pages/MyOrders/MyOrders";
import CheckOut from "../../pages/CheckOut/CheckOut";
import ArticleView from "../../pages/ArticleView/ArticleView";
import {CartProvider} from "../../context/CartContext";
import Container from "react-bootstrap/Container";
import {AuthProvider} from "../../context/AuthContext";
import FindConsignment from "../../pages/FindConsignment/FindConsignment";
import Consignment from "../../pages/Consignment/Consignment";
import NewConsignment from "../../pages/Sell/NewConsignment/NewConsignment";
import Footer from "../../layouts/Footer/Footer";
import AllOrders from "../../pages/AllOrders/AllOrders";


function App() {
    document.title = 'VecnaModa - Second Hand Online Shop';

    return (
        <>
            <AuthProvider>
                <CartProvider>
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
                </CartProvider>
            </AuthProvider>
        </>
    );

}

export default App;
