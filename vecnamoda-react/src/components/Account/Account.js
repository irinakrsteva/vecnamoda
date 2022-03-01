import React from "react";
import {Link} from "react-router-dom";

function Account() {

    return (
        <div>
            Your username is _______
            <br/>
            <br/>
            <Link to="myitems">My items</Link>
            <Link to="myorders">My orders</Link>
            <br/>
            <br/>
            <a>Unsubscribe</a>
        </div>
    );

}

export default Account;