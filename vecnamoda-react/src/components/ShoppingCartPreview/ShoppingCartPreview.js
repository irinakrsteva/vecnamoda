import React, {useContext} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import {Link} from "react-router-dom";
import {CartContext} from "../../context/CartContext";

function ShoppingCartPreview(props) {
    // const {cartState,
    //     setCartState,
    //     updateCartState,
    //     setUpdateCartState} = useContext(CartContext);

    let cart = useContext(CartContext);

    function renderArticlesInsideShoppingCartPreview() {
        let previewContent = [];
        for (let i in cart.items) { // for ciklus korisen bidejki se koristi i
            previewContent.push(
                <tr key={"cartItem" + i}>
                    <td>{i}</td>
                    <td>Image Here</td>
                    <td>Category Here</td>
                    <td>{cart.items[i].price}</td>
                    {console.log(cart.items)}
                    <td><a href="#" onClick={() => cart.removeItemFromCart(cart.items[i])}>Delete</a></td>

                </tr>
            );
        }
        return previewContent;
    }

    return (
        <Modal {...props} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Your shopping cart:
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table responsive="sm">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderArticlesInsideShoppingCartPreview()}
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>{cart.getCartTotal()}</th>
                        <th><a href="#" onClick={cart.clearCart}>Clear</a></th>
                    </tr>
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button as={Link} to="/ShoppingCart" onClick={props.onHide}>Checkout</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ShoppingCartPreview;