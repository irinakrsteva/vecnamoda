import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Menu from "../Menu/Menu"
import Intro from "../Intro/Intro";
import Shop from "../Shop/Shop";
import Sell from "../Sell/Sell";
import Register from "../Register/Register";
import Login from "../Login/Login";
import MyAccount from "../MyAccount/MyAccount";
import About from "../About/About";
import MyItems from "../MyItems/MyItems";
import MyOrders from "../MyOrders/MyOrders";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckOut from "../CheckOut/CheckOut";
import ArticleView from "../ArticleView/ArticleView";
// import SidebarFilter from "../SidebarFilter/SidebarFilter";
import {CartProvider} from "../../context/CartContext";
import Container from "react-bootstrap/Container";
import AddArticle from "../AddArticle/AddArticle";
import {AuthProvider} from "../../context/AuthContext";
import ProtectedRoute from "../../utils/components/ProtectedRoute";
import FindConsignment from "../FindConsignment/FindConsignment";
import Consignment from "../Consignment/Consignment";
import NewConsignment from "../Sell/NewConsignment";

function App() {
    // const [cart, setCart] = useState({items:[], total:0});

    return (
        <CartProvider>
            <AuthProvider>
                <Container id={global}>
                    <Router>
                        <Menu/>
                        <Routes>
                            <Route path="/" element={<Intro/>}/>
                            <Route path="/shop" element={<Shop/>}/>
                            <Route path="/sell" element={<Sell/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/account" element={<MyAccount/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/my-items" element={<MyItems/>}/>
                            <Route path="/my-orders" element={<MyOrders/>}/>
                            <Route path="/shopping-cart" element={<ShoppingCart/>}/>
                            <Route path="/checkout" element={<CheckOut/>}/>
                            <Route path="/shop/:id" element={<ArticleView/>}/>
                            <Route path="/find-consignment" element={<FindConsignment/>}/>
                            <Route path="/consignment/:token" element={<Consignment/>}/>
                            <Route path="/new-consignment/:token" element={<NewConsignment/>}/>
                        </Routes>
                    </Router>
                </Container>
            </AuthProvider>
        </CartProvider>
    );

}

export default App;
