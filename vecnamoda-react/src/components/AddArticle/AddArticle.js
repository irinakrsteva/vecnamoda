import React, {useContext, useState} from "react";
import {Container} from "react-bootstrap";
import {AuthContext} from "../../context/AuthContext";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Select from 'react-select'
//ONLY FOR EMPLOYEES/ADMINS

function AddArticle() {

    const auth = useContext(AuthContext);

    const [price, setPrice] = useState(0.00);
    const [formErrors, setFormErrors] = useState({
        priceValid: null
    });
    const colors = [];

    let onPriceChange = (event) => {
        let price = event.target.value;
        setPrice(price);
        if (price > 0 && price <= 9999.99) {
            setFormErrors({...formErrors, priceValid: ""});
        } else {
            setFormErrors({...formErrors, priceValid: "Price cannot be this value"});
        }
    }

    return (
        <Container className="mt-3">

            <Row>
                <Col lg={{span: 5, offset: 3}} sm={{span:8, offset:2}}>
                    <Form>
                        <Form.Group className="mb-2" controlId="formName">
                            <Form.Label>Price</Form.Label>
                            <Form.Control onChange={onPriceChange}/>
                            <p className="formError">{formErrors.priceValid}</p>
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formName">
                            <Form.Label>Color</Form.Label>
                            <Select options={colors}/>
                        </Form.Group>

                    </Form>
                </Col>
            </Row>

        </Container>
    );

}

export default AddArticle;