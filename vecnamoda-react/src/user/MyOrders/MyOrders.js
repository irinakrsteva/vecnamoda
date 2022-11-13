import React, {useContext, useEffect, useState} from "react";
import {Card, Container} from "react-bootstrap";
import {AuthContext} from "../../context/AuthContext";
import {getAllPurchasesByCurrentUser} from "../../service/purchaseService";
import ArticlePreview from "../../components/ArticlePreview/ArticlePreview";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Order from "../../components/Order/Order";

function MyOrders() {

    const auth = useContext(AuthContext);

    const [myOrders, setMyOrders] = useState(null);

    let renderOrders = () => {
        if (myOrders) {
            return <>
                {
                    myOrders.map((order, index) =>
                        <Order order={order} index={index+1} />
                    )
                }
            </>;
        }
    }

    useEffect(() => {
        if (auth.isAuthenticated && !myOrders) {
            getAllPurchasesByCurrentUser().then(res => {
                setMyOrders(res.data);
                console.log(res.data);
            }).catch(e => console.log(e));
        }
    });

    return (
        <Container className="mt-3">
            {
                auth.isAuthenticated ?
                    <h5> All orders you have made: </h5>
                    : <h5> Please log in to view your orders! </h5>
            }
            {renderOrders()}
        </Container>
    );

}

export default MyOrders;