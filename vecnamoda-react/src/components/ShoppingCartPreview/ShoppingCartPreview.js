import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import {Link} from "react-router-dom";

function ShoppingCartPreview(props) {
    function renderArticlesInsideShoppingCartPreview() {
        let previewContent = [];
        for (let i in props.content) {
            previewContent.push(
                <tr key={"cartItem" + i}>
                    <td>{i}</td>
                    <td>Image Here</td>
                    <td>Category Here</td>
                    <td>{props.content[i].price}</td>
                    <td>Delete</td>
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
                        <th></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderArticlesInsideShoppingCartPreview()}
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