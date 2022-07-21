import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {Container} from "react-bootstrap";
import {AuthContext} from "../../context/AuthContext";

// logs out randomly without any logout call ?

function MyAccount() {

    const auth = useContext(AuthContext);

    let renderAccountBasedOnRole = () => {
        if (!auth.isAuthenticated) return null;
        let role = auth.loggedInUser.role;
        switch (role) {
            case 'CUSTOMER': return renderCustomerAccount();
            case 'EMPLOYEE': return renderEmployeeAccount();
            case 'ADMIN': return (
                <>
                    {renderEmployeeAccount()}
                    {renderAdminAccount()}
                </>
            );
            default: return null;
        }
    }

    let renderCustomerAccount = () => {
        if (auth.isAuthenticated && auth.loggedInUser.role === 'CUSTOMER')
            return (
                <>
                    <Link to="../myitems">My items</Link>
                    <br/>
                    <br/>
                    <Link to="../myorders">My orders</Link>
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
                <Link to="../manageconsignment">Open a consignment</Link>
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
            {
                auth.isAuthenticated
                    ? "Your username is " + auth.loggedInUser.username + " and your role is " + auth.loggedInUser.role
                    : "You're not logged in!"
            }

            <br/>
            <br/>

            {renderAccountBasedOnRole()}

        </Container>
    );
}

export default MyAccount;