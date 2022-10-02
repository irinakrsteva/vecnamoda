import React, {useContext} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import {Link, useNavigate} from "react-router-dom";
import {CartContext} from "../../context/CartContext";
import Image from "react-bootstrap/Image";

function ShoppingCartPreview(props) {

    let cart = useContext(CartContext);
    let nav = useNavigate();

    function renderArticlesInsideShoppingCartPreview() {
        let previewContent = [];
        for (let i = 0; i < cart.items.length; i++) {
            console.log(cart.items[i]);
            previewContent.push(
                <tr key={"cartItem" + i}>
                    <td>{<Image src={`/api/images/public/${cart.items[i].imageIds[0]}`}/>}</td>
                    <td>Category Here</td>
                    <td>{cart.items[i].price}</td>
                    {console.log(cart.items)}
                    <td><a href="#" onClick={() => cart.removeItemFromCart(cart.items[i])}>Delete</a></td>

                </tr>
            );
        }
        return previewContent;
    }

    function onCheckoutButton() {
        nav('/checkout');
        props.onHide();
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
                        <th>Image</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderArticlesInsideShoppingCartPreview()}
                    </tbody>
                    <tfoot className="border-top-0 ">
                    <tr>
                        <td></td>
                        <td className="text-right"><b>Total:</b></td>
                        <td><b>{cart.getCartTotal()}</b></td>
                        <td><a href="#" onClick={cart.clearCart}>Clear</a></td>
                    </tr>
                    </tfoot>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button disabled={cart.items.length === 0} onClick={props.onHide}>Checkout</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ShoppingCartPreview;