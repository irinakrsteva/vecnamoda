import React, {useContext, useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import {Link, useNavigate} from "react-router-dom";
import {CartContext} from "../../context/CartContext";
import Image from "react-bootstrap/Image";
import './ShoppingCartPreview.css';
import formatCategory from "../../utils/helpers/formatCategory";
import {makePurchase} from "../../service/purchaseService";

function ShoppingCartPreview(props) {

    const cart = useContext(CartContext);
    const nav = useNavigate();

    let productDescription = (item) => {
        return ((item.color ? item.color.name : "") + " "
            + formatCategory(item.category ? item.category.name : "") + " "
            + (item.size ? "size " + item.size.value + " " + item.size.standard : "")).toUpperCase()
            + " (" + (item.description ? item.description : "No description available") + ")";
    }

    function renderArticlesInsideShoppingCartPreview() {
        let previewContent = [];
        for (let i = 0; i < cart.items.length; i++) {
            let item = cart.items[i];
            // console.log(cart.items[i]);
            previewContent.push(
                <tr key={"cartItem" + i}>
                    <td>{ <Image className="image-preview img-thumbnail" src={`/api/images/public/${item.imageIds[0]}`}/> }</td>
                    <td>
                        {productDescription(item)}
                    </td>
                    <td>{item.price}</td>
                    <td><a href="#" onClick={() => cart.removeItemFromCart(item)}>Delete</a></td>
                    {/*{console.log(cart.items)}*/}
                </tr>
            );
        }
        return previewContent;
    }

    let onCheckoutButton = async () => {
        console.log(cart.items.map(item => item.id));

        makePurchase(cart.items.map(item => item.id)).then(response => {
            console.log("purchase response: ", response.data);
            let purchase = response.data;
            cart.clearCart();
            props.onHide();
            nav(`/checkout/${purchase.id}`);
        }).catch(e => {
            if(e.response.status === 401) {
                nav("../login");
                props.onHide();
            }
            console.log('Error code: ', e.response.status);
        });


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
                    { renderArticlesInsideShoppingCartPreview() }
                    </tbody>
                    <tfoot className="border-top-0 ">
                    <tr>
                        <td/>
                        <td className="text-right"><b>Total:</b></td>
                        <td><b>{cart.getCartTotal()}</b></td>
                        <td><a href="#" onClick={cart.clearCart}>Clear</a></td>
                    </tr>
                    </tfoot>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button disabled={cart.items.length === 0} onClick={() => onCheckoutButton()}>Checkout</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ShoppingCartPreview;