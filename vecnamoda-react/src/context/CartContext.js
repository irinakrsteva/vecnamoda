import React, {useRef, useState} from "react";

const state = {
    items: [],
    total: 0
};

const CartContext = React.createContext(state);

export function CartProvider(props) {
    const [cartState, setCartState] = useState(state);
    const children = useRef(null);

    return(
        <CartContext.Provider value={cartState}>

        </CartContext.Provider>
    );
}