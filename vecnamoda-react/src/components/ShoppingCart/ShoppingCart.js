import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {Container} from "react-bootstrap";
// import {CartProvider} from "../../context/CartContext";
import {CartContext} from "../../context/CartContext";

function ShoppingCart() {
    const navigate = useNavigate();
    // const cartContext = useContext(CartProvider)
    const { cartState,
            setCartState,
            updateCartState,
            setUpdateCartState } = useContext(CartContext);

    return(
        // <cartContext.Consumer>
            <Container className="mt-3">
                <h5>Items in shopping cart:</h5>
                <ul>
                    <li>First</li>
                    <li>Second</li>
                </ul>

                <button onClick={() => {navigate("/shoppingcart/checkout")}}>Check outs</button>
            </Container>
        // </cartContext.Consumer>
    );
}

export default ShoppingCart;