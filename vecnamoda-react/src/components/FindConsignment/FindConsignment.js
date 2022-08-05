import React, {useState} from "react";
import {Container} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Consignment from "../Consignment/Consignment";
import {getConsignmentByToken} from "../../service/consignmentService";
import {useNavigate} from "react-router-dom";

//ONLY FOR EMPLOYEES/ADMINS

function FindConsignment() {

    const navigate = useNavigate();

    const [token, setToken] = useState("");
    const [consignmentId, setConsignmentId] = useState(null);
    const [hideManageButton, setHideManageButton] = useState(true);

    let onTokenChange = (event) => {
        setToken(event.target.value);
    }

    let isValid = () => {
        return token.length === 36;
    }

    let openConsignment = (event) => {
        console.log("trying to open consignment " + token);
        event.preventDefault();
        getConsignmentByToken(token).then(consignment => {
            setConsignmentId(consignment.data.id);
            setHideManageButton(false);
            console.log("Found consignment : " + JSON.stringify(consignment.data.id));
        }).catch(() => {
            console.log("Could not retrieve consignment");
        });
    }

    let manageConsignment = () => {
        navigate("../consignment/"+token);
    }

    return (
        <Container>
            <Row>
                <Col lg={{span: 5, offset: 3}} sm={{span: 8, offset: 2}}>
                    <Form className="my-4">
                        <Form.Group>
                            <Form.Label>Enter the consignment token code:</Form.Label>
                            <Form.Control maxLength="36" onChange={onTokenChange}/>
                        </Form.Group>
                        <Button
                            onClick={openConsignment}
                            className="mx-auto d-block my-2"
                            disabled={!isValid()}
                        >
                            Find consignment
                        </Button>
                    </Form>
                </Col>
            </Row>

            <Row>
                <Col hidden={hideManageButton} lg={{span: 5, offset: 3}} sm={{span: 8, offset: 2}}>
                    {/*<Consignment token={consignmentId}/>*/}
                    <br/>
                    Found consignment with token {token}
                    <br/>
                    <Button onClick={manageConsignment} className="mx-auto d-block my-2">Manage consignment</Button>

                </Col>
            </Row>
        </Container>
    );

}

export default FindConsignment;