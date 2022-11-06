import React, {useContext, useEffect, useState} from "react";
import {Modal} from "react-bootstrap";
import {AuthContext} from "../../context/AuthContext";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Select from 'react-select'
import Button from "react-bootstrap/Button";
import {uploadImageFile} from "../../service/imageService";
import Image from "react-bootstrap/Image";
import {getColors} from "../../service/colorService";
import {getCategories} from "../../service/categoryService";
import {getSizes} from "../../service/sizeService";
import {TreeSelect} from "antd";

//ONLY FOR EMPLOYEES/ADMINS

function AddArticle({consignmentid, onAdd, onHide, show, ...restProps}) {

    const auth = useContext(AuthContext);

    // -- Options states

    const conditions = [
        {value: 'EXCELLENT', label: 'Excellent'},
        {value: 'GREAT', label: 'Great'},
        {value: 'GOOD', label: 'Good'}
    ];
    const [categories, setCategories] = useState([]);
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);


    // ----- Form value states ------

    const [price, setPrice] = useState(0.00);
    const [condition, setCondition] = useState(conditions[0]);
    const status = 'AVAILABLE';
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState(null);
    const [color, setColor] = useState(null);
    const [size, setSize] = useState(null);
    const [uploadedImages, setUploadedImages] = useState([]);
    const consignmentId = consignmentid;

    // -----

    const [formErrors, setFormErrors] = useState({
        priceValid: null,
        descriptionValid: null,
        maxFileSizeExceeded: ""
    });

    let handleHide = () => {
        onHide();
    }

    // -- Change handlers

    let onPriceChange = (e) => {
        let price = e.target.value;
        setPrice(price);
        if (price > 0 && price <= 99999.99) {
            setFormErrors({...formErrors, priceValid: ""});
        } else {
            setFormErrors({...formErrors, priceValid: "Price can only be between 0 and 99999.99"});
        }
    }

    let onDescriptionChange = (e) => {
        let description = e.target.value;
        setDescription(description);
        if (description.length > 255) {
            setFormErrors({...formErrors, descriptionValid: "Maximum description length: 255"});
        } else setFormErrors({...formErrors, descriptionValid: ""});
    };

    let onConditionChange = (e) => {
        let condition = e;
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
        setCategory(e);
    };
    let onColorChange = (e) => {
        setColor(e);
    };
    let onSizeChange = (e) => {
        setSize(e);
    };

    let clearArticle = () => {
        setPrice(0.00);
        setCondition(conditions[0]);
        setDescription("");
        setCategory(null);
        setColor(null);
        setSize(null);
        // setBrand(null); //ign
        setUploadedImages([]);
    };

    let postArticle = () => {
        // if()
        let article = {
            price: price,
            articleCondition: condition.value,
            status: status,
            description: description,
            categoryId: category,
            sizeId: size.value,
            colorId: color.value,
            // brandId: brand,
            consignmentId: consignmentId,
            imageIds: uploadedImages.map(img => img.id)
        };
        console.log(article);

        onAdd(article).then(() => {
            clearArticle();
            handleHide();
        }).catch(e => console.log(e));
    }

    useEffect(() => {
        renderPreviewImages();
    });

    // -- Fetch options for Categories, Colors and Sizes

    useEffect(() => {
        if (!categories.length > 0) {
            getCategories().then(response => {
                let listCategories = response.data;

                let formattedCategories = listCategories.map(category => {
                    return {
                        id: category.id,
                        value: category.id,
                        pId: category.parentCategoryId,
                        title: category.name.replace("w_", "women's ")
                            .replace("m_", "men's ")
                            .replace("c_", "children's "),
                    }
                });

                setCategories(formattedCategories);
            }).catch(e => console.log(e));
        }
        if (!colors.length > 0) {
            getColors().then(response => {
                let listColors = response.data;

                let formattedColors = listColors.map(color => {
                    return {value: color.id, label: color.name}
                });

                setColors(formattedColors);
            }).catch(e => console.log(e));
        }
        if (!sizes.length > 0) {
            getSizes().then(response => {
                let listSizes = response.data;

                let formattedSizes = listSizes.map(size => {
                    return {value: size.id, label: (size.standard + " " + size.value)}
                });

                setSizes(formattedSizes);
            }).catch(e => console.log(e));
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
                                <Form.Control onChange={onPriceChange} value={price}/>
                                <p className="formError">{formErrors.priceValid}</p>
                            </Form.Group>

                            <Form.Group className="price mb-2" controlId="formName">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={2} onChange={onDescriptionChange}
                                              value={description}/>
                                <p className="formError">{formErrors.descriptionValid}</p>
                            </Form.Group>

                            <Form.Group className="condition mb-2" controlId="formName">
                                <Form.Label>Condition</Form.Label>
                                <Select options={conditions} onChange={onConditionChange} value={condition}/>
                            </Form.Group>

                            <Form.Group className="image mb-2" controlId="formName">
                                <Form.Label>Images</Form.Label>
                                <Form.Control className="px-5" type="file" multiple onChange={onImagesChange}
                                              accept="image/*"/>
                                {
                                    //TODO look into what is the actual max file size for form data posting (looks to be around 1MB}
                                }
                                <p className="formError">{formErrors.maxFileSizeExceeded}</p>
                                {renderPreviewImages()}
                            </Form.Group>

                            <Form.Group className="category mb-2" controlId="formName">
                                <Form.Label>Category</Form.Label>
                                {/*<Select onChange={onCategoryChange}*/}
                                {/*        options={categories}*/}
                                {/*        value={category}*/}
                                {/*/>*/}
                                <TreeSelect
                                    className="form-select"
                                    showSearch={false}
                                    bordered={true}
                                    allowClear
                                    treeDefaultExpandAll
                                    id="tree-select"
                                    treeDataSimpleMode={true}
                                    treeData={categories}
                                    showCheckedStrategy={TreeSelect.SHOW_ALL}
                                    placeholder="Select..."
                                    value={category}
                                    onChange={onCategoryChange}
                                    style={{width: "100%"}}
                                    // getPopupContainer={() => document.getElementById("tree-select")}
                                />
                            </Form.Group>

                            <Form.Group className="color mb-2" controlId="formName">
                                <Form.Label>Color</Form.Label>
                                <Select onChange={onColorChange}
                                        options={colors}
                                        value={color}
                                />
                            </Form.Group>

                            <Form.Group className="size mb-2" controlId="formName">
                                <Form.Label>Size</Form.Label>
                                <Select onChange={onSizeChange}
                                        options={sizes}
                                        value={size}
                                />
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