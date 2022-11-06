import React, {useContext} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import {Link, useNavigate} from "react-router-dom";
import {CartContext} from "../../context/CartContext";
import Image from "react-bootstrap/Image";
import {sellArticle, sellArticles} from "../../service/articleService";
import './ShoppingCartPreview.css';

function ShoppingCartPreview(props) {

    let cart = useContext(CartContext);
    let nav = useNavigate();

    let productDescription = (item) => {
        return ((item.color ? item.color.name : "") + " "
            + (item.category ? item.category.name : "").replace("w_", "women's ").replace("m_", "men's ").replace("c_","children's ") + " "
            + (item.size ? "size " + item.size.value + " " + item.size.standard : "")).toUpperCase()
            + " (" + (item.description ? item.description : "No description available") + ")";
    }

    function renderArticlesInsideShoppingCartPreview() {
        let previewContent = [];
        for (let i = 0; i < cart.items.length; i++) {
            let item = cart.items[i];
            console.log(cart.items[i]);
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
        let soldArticles = [];

        sellArticles(cart.items.map(item => item.id)).then(response => {
            soldArticles = response;
        }).catch(e => console.log(e));

        cart.clearCart();
        props.onHide();
        nav('/checkout');
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