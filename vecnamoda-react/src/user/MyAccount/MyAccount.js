import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {Card, Container} from "react-bootstrap";
import {AuthContext} from "../../context/AuthContext";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// logs out randomly without any logout call ?

function MyAccount() {

    const auth = useContext(AuthContext);

    const [showOnPage, setShowOnPage] = useState("");

    let renderAccountBasedOnRole = () => {
        if (!auth.isAuthenticated) return null;
        let role = auth.loggedInUser.role;
        switch (role) {
            case 'CUSTOMER':
                return renderCustomerAccount();
            case 'EMPLOYEE':
                return renderEmployeeAccount();
            case 'ADMIN':
                return (
                    <>
                        {renderEmployeeAccount()}
                        {renderAdminAccount()}
                    </>
                );
            default:
                return null;
        }
    }

    let renderCustomerAccount = () => {
        if (auth.isAuthenticated && auth.loggedInUser.role === 'CUSTOMER')
            return (
                <>
                    <Link to="../my-items" onClick={() => {
                        setShowOnPage("myitems")
                    }}>My items</Link>
                    <br/>
                    <br/>
                    <Link to="../my-orders" onClick={() => {
                        setShowOnPage("myorders")
                    }}>My orders</Link>
                    <br/>
                    <br/>
                    <a href="#">Delete my account</a>
                </>
            );
        else return null;
    }

    let renderEmployeeAccount = () => {
        return (
            <>
                <br/>
                <br/>
                <h6>Employee-specific functionalities:</h6>
                <Link to="../find-consignment">Open a consignment</Link>
            </>
        );
    }

    let renderAdminAccount = () => {
        return (
            <div>
                <br/>
                <Link to="#">Manage employees</Link>
            </div>
        );
    }

    return (
        <Container className="mt-3">

            <Card>
                <Card.Header>
                    <h5>
                        My Account
                    </h5>
                </Card.Header>

                <Card.Body>

                    {
                        auth.isAuthenticated
                            ?
                            (
                                <span>
                                        Your username is
                                        <b>{" " + auth.loggedInUser.username + " "}</b>
                                        and your role is
                                        <b>{" " + auth.loggedInUser.role.toLowerCase()}</b>
                                        </span>
                            )
                            :
                            "You're not logged in!"
                    }
                    <br/>
                    <br/>
                    {renderAccountBasedOnRole()}


                </Card.Body>

            </Card>

            <br/>
            <br/>


        </Container>
    );
}

export default MyAccount;