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
                    <Link to="../my-items" onClick={() => {setShowOnPage("myitems")}}>My items</Link>
                    <br/>
                    <br/>
                    <Link to="../my-orders" onClick={() => {setShowOnPage("myorders")}}>My orders</Link>
                    <br/>
                    <br/>
                    <a href="#">Unsubscribe</a>
                </>
            );
        else return null;
    }

    let renderEmployeeAccount = () => {
        return (
            <>
                {/*<br/>*/}
                {/*<Link to="../addarticle">Add new article</Link>*/}
                <br/>
                <br/>
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
                    My Account
                </Card.Header>

                <Card.Body>

                    <Row>
                        <Col lg="3">
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
                        </Col>
                        <Col lg="9">

                        </Col>
                    </Row>


                </Card.Body>

            </Card>

            <br/>
            <br/>


        </Container>
    );
}

export default MyAccount;