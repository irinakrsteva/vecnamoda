import React, {useContext, useState} from "react";
import {Container} from "react-bootstrap";
import {AuthContext} from "../../context/AuthContext";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Select from 'react-select'
import ImageUploader from 'react-images-upload';

//ONLY FOR EMPLOYEES/ADMINS

function AddArticle() {

    const auth = useContext(AuthContext);
    const conditions = [
        {value: 'EXCELLENT', label: 'Excellent'},
        {value: 'GREAT', label: 'Great'},
        {value: 'GOOD', label: 'Good'}
    ];

    const [price, setPrice] = useState(0.00);
    const [condition, setCondition] = useState(conditions[0]);
    const [pictures, setPictures] = useState([]);
    const status = 'AVAILABLE';
    const [color, setColor] = useState('');

    const [formErrors, setFormErrors] = useState({
        priceValid: null
    });
    const colors = [];

    let onPriceChange = (event) => {
        let price = event.target.value;
        setPrice(price);
        if (price > 0 && price <= 99999.99) {
            setFormErrors({...formErrors, priceValid: ""});
        } else {
            setFormErrors({...formErrors, priceValid: "Price can only be between 0 and 99999.99"});
        }
    }

    let onConditionChange = (event) => {
        let condition = event.value;
        setCondition(condition);
    }

    let onColorChange = (event) => {
        let color = event.value;
        setColor(color);
    }

    let onDrop = picture => {
        setPictures([...pictures, picture]);
    }

    return (
        <Container className="mt-3">

            <Row>
                <Col lg={{span: 5, offset: 3}} sm={{span: 8, offset: 2}}>
                    <Form>
                        <Form.Group className="price mb-2" controlId="formName">
                            <Form.Label>Price</Form.Label>
                            <Form.Control onChange={onPriceChange}/>
                            <p className="formError">{formErrors.priceValid}</p>
                        </Form.Group>

                        <Form.Group className="condition mb-2" controlId="formName">
                            <Form.Label>Condition</Form.Label>
                            <Select options={conditions} onChange={onConditionChange}/>
                        </Form.Group>

                        <Form.Group className="color mb-2" controlId="formName">
                            <Form.Label>Color (ignore please for now)</Form.Label>
                            <Select onchange={onColorChange} options={colors}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Upload image</Form.Label>
                            <ImageUploader
                                withIcon={true}
                                withPreview={true}
                                buttonText="Choose image"
                                onChange={onDrop}
                                imgExtension={[".jpg", ".jpeg", ".gif", ".png"]}
                                maxFileSize={5242880}
                            />
                        </Form.Group>

                    </Form>
                </Col>
            </Row>

        </Container>
    );

}

export default AddArticle;