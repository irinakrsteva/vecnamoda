import React, {useContext, useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import {AuthContext} from "../../context/AuthContext";
import Order from "../../components/Order/Order";
import {getAllPurchases, getAllPurchasesByCurrentUser} from "../../service/purchaseService";
import {useNavigate} from "react-router-dom";

function AllOrders() {

    const auth = useContext(AuthContext);
    const nav = useNavigate();

    const [allOrders, setAllOrders] = useState(null);

    let renderOrders = () => {
        if (allOrders) {
            return <>
                {
                    allOrders.map((order, index) =>
                        <Order order={order} index={index + 1} showUser={true}/>
                    )
                }
            </>;
        }
    }

    useEffect(() => {
        if (auth.isAuthenticated && auth.loggedInUser.role === 'ADMIN' && !allOrders) {
            getAllPurchases().then(res => {
                setAllOrders(res.data);
                // console.log(res.data);
            }).catch(e => console.log(e));
        }
    });

    useEffect(() => {
        if (auth.loggedInUser.role !== 'ADMIN' && auth.loggedInUser.role !== 'EMPLOYEE') {
            nav("/");
        }
    }, [auth]);

    return (
        <Container className="mt-3">
            {
                auth.isAuthenticated ?
                    <h5> All orders overview </h5>
                    : <h5> Please log in to view orders! </h5>
            }

            {renderOrders()}
        </Container>
    );
}

export default AllOrders;