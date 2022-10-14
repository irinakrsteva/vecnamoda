import React, {useContext, useEffect, useState} from "react";
import {Modal} from "react-bootstrap";
import {AuthContext} from "../../context/AuthContext";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Select from 'react-select'
import Button from "react-bootstrap/Button";
import {render} from "@testing-library/react";
import {uploadImageFile} from "../../service/imageService";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import Image from "react-bootstrap/Image";
import {getColors} from "../../service/colorService";
import {getCategories} from "../../service/categoryService";
import {getSizes} from "../../service/sizeService";

//ONLY FOR EMPLOYEES/ADMINS

function AddArticle({consignmentid, onAdd, onHide, show, ...restProps}) {

    const auth = useContext(AuthContext);
    const conditions = [
        {value: 'EXCELLENT', label: 'Excellent'},
        {value: 'GREAT', label: 'Great'},
        {value: 'GOOD', label: 'Good'}
    ];
    const [categories, setCategories] = useState(null);
    const [colors, setColors] = useState(null);
    const [sizes, setSizes] = useState(null);


    // ----- initial values ------

    const [price, setPrice] = useState(0.00);
    const [condition, setCondition] = useState(conditions[0]);
    const status = 'AVAILABLE';
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState(null);
    const [color, setColor] = useState(null);
    const [size, setSize] = useState(null);
    const [brand, setBrand] = useState(null); //ign
    const [uploadedImages, setUploadedImages] = useState([]);
    const consignmentId = consignmentid;

    // -----

    const [formErrors, setFormErrors] = useState({
        priceValid: null,
        descriptionValid: null,
        maxFileSizeExceeded: ""
    });

    let handleHide = () => {
        setUploadedImages([]);
        onHide();
    }


    let onPriceChange = (event) => {
        let price = event.target.value;
        setPrice(price);
        if (price > 0 && price <= 99999.99) {
            setFormErrors({...formErrors, priceValid: ""});
        } else {
            setFormErrors({...formErrors, priceValid: "Price can only be between 0 and 99999.99"});
        }
    }


    let onDescriptionChange = (event) => {
        let description = event.target.value;
        setDescription(description);
        if(description.length > 255) {
            setFormErrors({...formErrors, descriptionValid: "Maximum description length: 255"});
        } else setFormErrors({...formErrors, descriptionValid: ""});
    };

    let onConditionChange = (event) => {
        let condition = event.value;
        setCondition(condition);
    }

    let handleUploadImage = async (image) => {
        if (image.size > 4194304) {
            let maxFileError = "Maximum file size of " + image.name + " exceeded (>4MB)";
            setFormErrors({...formErrors, maxFileSizeExceeded: maxFileError});
            throw maxFileError;
        }

        try {
            let response = await uploadImageFile(image);
            console.log("Response data immediately after uploading:", response.data);
            return response.data;
        } catch (e) {
            //Probably... *
            setFormErrors({
                ...formErrors,
                maxFileSizeExceeded: "Maximum file size of " + image.name + " exceeded (>4MB)"
            });
            throw e;
        }

    }

    let onImagesChange = (event) => {
        let images = event.target.files;
        console.log("All current images in form:", images);
        setUploadedImages([]);
        setFormErrors({...formErrors, maxFileSizeExceeded: ""});

        for (let i = 0; i < images.length; i++) {
            handleUploadImage(images[i]).then(newUploadedImage => {
                console.log("Saving image info in state:", newUploadedImage);
                setUploadedImages(uploadedImages => [...uploadedImages, newUploadedImage]);
            });
        }

        console.log("All uploadedImages in state:", uploadedImages);
    };

    let renderPreviewImages = () => {
        if (uploadedImages.length === 0) return null;
        return <Row>
            {uploadedImages.map(uploadedImage =>
                <Col key={"img" + uploadedImage.id} xl={4} sm={6}>
                    <Image key={uploadedImage.id} thumbnail="true" src={`/api/images/public/${uploadedImage.id}`}/>
                </Col>
            )}
        </Row>;
    }

    let onCategoryChange = (e) => {
        let category = e.value;
        setCategory(category);
    };
    let onColorChange = (e) => {
        let color = e.value;
        setColor(color);
    };
    let onSizeChange = (e) => {
        let size = e.value;
        setSize(size);
    };

    let postArticle = () => {
        // if()
        let article = {
            price: price,
            articleCondition: condition,
            status: status,
            description: description,
            categoryId: category,
            sizeId: size,
            colorId: color,
            // brandId: brand,
            consignmentId: consignmentId,
            imageIds: uploadedImages.map(img => img.id)
        };
        onAdd(article).then(() => handleHide());
    }

    let getCategoryOptions = () => {
        if (categories) {
            return categories.map(c => {
                return {value: c.id, label: c.name}
            });
        } else
            return [];
    }

    let getColorOptions = () => {
        if (colors) {
            return colors.map(c => {
                return {value: c.id, label: c.name}
            });
        } else
            return [];
    }

    let getSizeOptions = () => {
        if (sizes) {
            return sizes.map(s => {
                return {value: s.id, label: (s.standard + " " + s.value)}
            });
        } else
            return [];
    }


    useEffect(() => {
        renderPreviewImages();
    });

    useEffect(() => {
        console.log("Fetching C,C & S");
        if (categories === null) {
            getCategories().then(response => {
                let listCategories = response.data;
                setCategories(listCategories);
            }).catch(console.log("Couldn't fetch categories"));
        }
        if (colors === null) {
            getColors().then(response => {
                let listColors = response.data
                setColors(listColors);
            }).catch(console.log("Couldn't fetch colors"));
        }
        if (sizes === null) {
            getSizes().then(response => {
                let listSizes = response.data;
                setSizes(listSizes);
            }).catch(console.log("Couldn't fetch sizes"));
        }
    });

    return (
        <Modal
            onHide={handleHide}
            show={show}
            size="lg"
            centered
            {...restProps}
        >
            <Modal.Header closeButton>
                Add a new article to {consignmentId}
            </Modal.Header>

            <Modal.Body>
                <Row>
                    <Col lg={{span: 5, offset: 3}} sm={{span: 8, offset: 2}}>
                        <Form>
                            <Form.Group className="price mb-2" controlId="formName">
                                <Form.Label>Price</Form.Label>
                                <Form.Control onChange={onPriceChange}/>
                                <p className="formError">{formErrors.priceValid}</p>
                            </Form.Group>

                            <Form.Group className="price mb-2" controlId="formName">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={2} onChange={onDescriptionChange}/>
                                <p className="formError">{formErrors.descriptionValid}</p>
                            </Form.Group>

                            <Form.Group className="condition mb-2" controlId="formName">
                                <Form.Label>Condition</Form.Label>
                                <Select options={conditions} onChange={onConditionChange}/>
                            </Form.Group>

                            <Form.Group className="image mb-2" controlId="formName">
                                <Form.Label>Images</Form.Label>
                                <Form.Control type="file" multiple onChange={onImagesChange} accept="image/*"/>
                                {//TODO look into what is the actual max file size for form data posting (looks to be around 1MB}
                                }
                                <p className="formError">{formErrors.maxFileSizeExceeded}</p>
                                {renderPreviewImages()}
                            </Form.Group>

                            <Form.Group className="category mb-2" controlId="formName">
                                <Form.Label>Category</Form.Label>
                                <Select onChange={onCategoryChange}
                                        options={getCategoryOptions()}/>
                            </Form.Group>

                            <Form.Group className="color mb-2" controlId="formName">
                                <Form.Label>Color</Form.Label>
                                <Select onChange={onColorChange}
                                        options={getColorOptions()}/>
                            </Form.Group>

                            <Form.Group className="size mb-2" controlId="formName">
                                <Form.Label>Size</Form.Label>
                                <Select onChange={onSizeChange}
                                        options={getSizeOptions()}/>
                            </Form.Group>

                        </Form>
                    </Col>
                </Row>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={handleHide}>Close</Button>
                <Button onClick={postArticle}>Add article</Button>
            </Modal.Footer>

        </Modal>
    );

}

export default AddArticle;