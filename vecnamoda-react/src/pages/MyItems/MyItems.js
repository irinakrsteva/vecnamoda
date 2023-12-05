import React, {useContext, useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import {AuthContext} from "../../context/AuthContext";
import Order from "../../components/Order/Order";
import {getAllPurchasesByCurrentUser} from "../../service/purchaseService";
import {getAllConsignmentsByCurrentUser} from "../../service/consignmentService";
import MyConsignment from "./MyConsignment";

function MyItems() {

    const auth = useContext(AuthContext);

    const [myConsignments, setMyConsignments] = useState(null);

    let renderItems = () => {
        if(myConsignments) {
            return <>
                {
                    myConsignments.map((consignment, index) =>
                        <MyConsignment consignment={consignment} index={index+1} />
                    )
                }
            </>;
        }
    }

    useEffect(() => {
        if (auth.isAuthenticated && !myConsignments) {
            getAllConsignmentsByCurrentUser().then(res => {
                setMyConsignments(res.data);
                console.log(res.data);
            }).catch(e => console.log(e));
        }
    });

    return(
        <Container className="mt-3">
            {
                auth.isAuthenticated ?
                    <h5> All items you have set for sale: </h5>
                    : <h5> Please log in to view the items you have set for sale! </h5>
            }
            {renderItems()}
        </Container>
    );

}

export default MyItems;