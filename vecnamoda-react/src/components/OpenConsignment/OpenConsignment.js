import React, {useState} from "react";
import {Container} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ManageConsignment from "../ManageConsignment/ManageConsignment";
import {getConsignmentByToken} from "../../service/consignmentService";

//ONLY FOR EMPLOYEES/ADMINS

function OpenConsignment() {

    const [token, setToken] = useState("");
    const [consignmentId, setConsignmentId] = useState(null);

    let onTokenChange = (event) => {
        setToken(event.target.value);
    }

    let isValid = () => {
        return token.length === 36;
    }

    let renderManageConsignment = () => {
        if (consignmentId) {
            return <ManageConsignment props={consignmentId}/>;
        }
    }

    let openConsignment = (event) => {
        console.log("trying to open consignment " + token);
        event.preventDefault();
        let consignment = getConsignmentByToken(token).then(() => {
            setConsignmentId(consignment.id);
            console.log("Found consignment id: " + consignmentId);
        }).catch(() => {
            console.log("Could not retrieve consignment");
        });
    }


    return (
        <Container>
            <Row>
                <Col lg={{span: 5, offset: 3}} sm={{span: 8, offset: 2}}>
                    <Form>
                        <Form.Group>
                            <Form.Label>Enter the consignment token code:</Form.Label>
                            <Form.Control maxLength="36" onChange={onTokenChange}/>
                        </Form.Group>
                        <Button
                            onClick={openConsignment}
                            className="mx-auto d-block my-2"
                            disabled={!isValid()}
                        >
                            Open consignment
                        </Button>
                    </Form>
                </Col>
            </Row>

            <Row>
                <Col>
                    {renderManageConsignment()}
                </Col>
            </Row>
        </Container>
    );

}

export default OpenConsignment;