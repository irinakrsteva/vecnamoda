import React, {useContext} from "react";
import {Button, Container} from "react-bootstrap";
import {createConsignment} from "../../service/consignmentService";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {AuthContext} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";

function Sell() {

    let auth = useContext(AuthContext);
    let nav = useNavigate();

    let openNewConsignment = async () => {
        if (auth.isAuthenticated) {
            try {
                let res = await createConsignment();
                console.log(res.data);
                nav("../new-consignment/" + res.data.token);
            } catch (e) {
                console.log(e);
            }

            // createConsignment().then(response => {
            //     console.log("Created new consignment!: " + response.data);
            //     nav("../new_consignment/" + response.data.token);
            // }).catch(err => {
            //     console.log(err);
            // });
        } else {
            nav("../`login`");
        }

    }

    return (
        <Container className="mt-5">
            <h3 align="center">Here is how you can sell...</h3>

            <Row className="my-5">
                <Col align="center" lg={{span: 4, offset: 0}} sm={{span: 8, offset: 2}}>
                    <h4>Step 1</h4>
                    <p>
                        Create a new consignment. This generates a unique key, which our employees will use to link the
                        clothes in your package with your account.
                    </p>
                </Col>
                <Col align="center" lg={{span: 4, offset: 0}} sm={{span: 8, offset: 2}}>
                    <h4>Step 2</h4>
                    <p>
                        Print the PDF we generate for your consignment. Make sure to add the printed information to your
                        package!
                    </p>
                </Col>
                <Col align="center" lg={{span: 4, offset: 0}} sm={{span: 8, offset: 2}}>
                    <h4>Step 3</h4>
                    <p>
                        Send your clothes, as well as the printed PDF page, to us. Our employees review all the clothes
                        and post the information to each
                        item of clothing you send off.*
                    </p>
                </Col>
            </Row>
            <small>* Some items may be subject to price reduction or donated to charity depending on the condition it is
                in.</small>

            <Row className="my-5">
                <Col align="center">
                    <h5>What do you get out of it?</h5>
                    <p>We claim 30% of the profits of each item sold. You gain the rest of the profits. We guarantee
                        that we carefully review and price every item sent to us.</p>
                </Col>
            </Row>


            <Row>
                <Col align="center" className="my-3">
                    <h3>Start here...</h3>
                    <p>Create a new consignment and generate PDF</p>
                    {auth.isAuthenticated ?
                        <Button onClick={openNewConsignment}>Create new consignment</Button>
                        :
                        <Button onClick={() => {nav("../login")}}>Log in to start</Button>
                    }
                </Col>
            </Row>

        </Container>
    );
}

export default Sell;