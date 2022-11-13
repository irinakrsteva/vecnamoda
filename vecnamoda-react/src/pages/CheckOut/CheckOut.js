import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import Order from "../../components/Order/Order";
import {getPurchaseById} from "../../service/purchaseService";

function CheckOut() {
    const {purchaseId} = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        if(!order) {
            getPurchaseById(purchaseId).then(res => {
                setOrder(res.data);
            }).catch(e => console.log(e));
        }
    })

    return (
        <Container className="mt-3">
            <h4>Thank you for your purchase! Your order:</h4>
            {
                order ?
                <Order order={order}/>
                : ""
            }
            <h2><Link to="/shop">Browse more items...</Link></h2>
        </Container>
    );
}

export default CheckOut;