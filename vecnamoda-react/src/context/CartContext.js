import React, {createContext, useRef, useState} from "react";

const defaultValue = {
    items: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    getCartTotal: () => {},
    clearCart: () => {}
}
export const CartContext = createContext(defaultValue);

export const CartProvider = ({children}) => {

    const [items, setItems] = useState([]);

    const addItemToCart = (cartItem) => {
        if(!items.find(item => item.id === cartItem.id)) { // cannot duplicate single article
            setItems([...items, cartItem]);
        }
    }

    const removeItemFromCart = (cartItem) => {
        setItems(items.filter(item => item.id !== cartItem.id));
    }

    const getCartTotal = () => {
        return items.reduce(((total, item) => total + item.price), 0);
    }

    const clearCart = () => {
        setItems([]);
    }

    const value = {
        items,
        addItemToCart,
        removeItemFromCart,
        getCartTotal,
        clearCart
    };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>

}

export const CartConsumer = CartContext.Consumer;


//
// const cart = {
//     items: [],
//     total: 0
// };
// const updateCart = () => {};
//
// const CartContext = React.createContext(cart);
//
// export function CartProvider(props) {
//     const [cartState, setCartState] = useState(cart);
//     const [updateCartState, setUpdateCartState] = useState(updateCart);
//
//     return(
//         <CartContext.Provider value={cartState}>
//             {props.children}
//         </CartContext.Provider>
//     );
// }
//
// export const CartConsumer = CartContext.Consumer;
//
// export const withCartContext = (Component) => {
//
// }


// const colorState = {
//     color: 'red',
//     changeColor: () => {}
// };
// const ColorContext = React.createContext(colorState);
//
// export default ColorContext;

