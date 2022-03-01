import React from "react";
import {useNavigate} from "react-router-dom";

function ShoppingCart() {
    const navigate = useNavigate();

    return(
        <div>
            <h5>Items in shopping cart:</h5>
            <ul>
                <li>First</li>
                <li>Second</li>
            </ul>

            <button onClick={() => {navigate("/shoppingcart/checkout")}}>Check outs</button>
        </div>
    );
}

export default ShoppingCart;