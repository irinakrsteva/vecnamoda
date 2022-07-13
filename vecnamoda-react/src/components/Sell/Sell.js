import React from "react";
import {Button, Container} from "react-bootstrap";
import {createConsignment} from "../../service/consignmentService";


function Sell() {
    return (
        <Container className="mt-3">
            Here is how you can sell...

            <div>
                Generate unique code for new consignment package
                <Button onClick={createConsignment}>Generate</Button>

            </div>

        </Container>
    );
}

export default Sell;