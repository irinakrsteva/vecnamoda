import React, {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Card, Container} from "react-bootstrap";
import {AuthContext} from "../../context/AuthContext";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

// logs out randomly without any logout call ?

function MyAccount() {

    const auth = useContext(AuthContext);
    const nav = useNavigate();

    const [showOnPage, setShowOnPage] = useState("");

    let renderAccountBasedOnRole = () => {
        if (!auth.isAuthenticated) return null;
        let role = auth.loggedInUser.role;

        // this is better done by keeping the roles in a separate table in the db
        // and getting possible roles from db to iterate through
        // this situation is not as good because if there is a change to the backend
        // the front end has no way of knowing about it...
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
                    <Button className="btn-block"
                            onClick={() => nav("../my-items")} >
                        My items
                    </Button>
                    <br/>
                    <Button className="btn-block"
                            onClick={() => nav("../my-orders")}>
                        My orders
                    </Button>
                    <br/>
                </>
            );
        else return null;
    }

    let renderEmployeeAccount = () => {
        return (
            <>
                <br/>
                <h6>Employee-specific functionalities:</h6>
                <br/>
                <Button className="btn-block"
                        onClick={() => nav('../find-consignment')}>
                    Open a consignment
                </Button>
            </>
        );
    }

    let renderAdminAccount = () => {
        return (
            <div>
                <br/>
                <h6>Admin-specific functionalities:</h6>
                <br/>
                <Button className="btn-block"
                        onClick={() => nav('../all-orders')}>
                    Overview all orders
                </Button>
            </div>
        );
    }

    return (
        <Row className="justify-content-center">
            <Col md="5">
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

                    <Card.Footer>
                        <Link to="#">More account options</Link>
                    </Card.Footer>
                </Card>

                <br/>
                <br/>
            </Col>
        </Row>
    );
}

export default MyAccount;