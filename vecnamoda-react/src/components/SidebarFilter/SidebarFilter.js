import React, {useEffect, useState} from "react";
import "./SidebarFilter.css";
import Accordion from 'react-bootstrap/Accordion';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import ReactSlider from 'react-slider';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {getCategories} from "../../service/categoryService";
import {getSizes} from "../../service/sizeService";
import {getColors} from "../../service/colorService";
import {TreeSelect} from "antd";

function SidebarFilter() {

    const conditionOptions = ['EXCELLENT', 'GREAT', 'GOOD'];

    const [categoryOptions, setCategoryOptions] = useState([]);
    const [sizeOptions, setSizeOptions] = useState([]);
    const [colorOptions, setColorOptions] = useState([]);

    const [priceFilter, setPriceFilter] = useState([0, 30000]);
    const [conditionFilter, setConditionFilter] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState([]);
    const [sizeFilter, setSizeFilter] = useState([]);
    const [colorFilter, setColorFilter] = useState([]);

    // ----

    let onChangePriceSlider = (e) => {
        setPriceFilter(e);
    };

    let changeFromPrice = (e) => {
        setPriceFilter([e.target.value, priceFilter[1]]);
    };

    let changeToPrice = (e) => {
        setPriceFilter([priceFilter[0], e.target.value]);
    };

    let loadCategoryOptions = async () => {
        return await getCategories();
    };

    let loadSizeOptions = async () => {
        return await getSizes();
    }

    let loadColorOptions = async () => {
        return await getColors();
    }

    // Change handlers:

    let handleConditionChange = (condition) => {
        let newConditionFilter = [...conditionFilter];
        if (conditionFilter.includes(condition)) {
            newConditionFilter.splice(newConditionFilter.indexOf(condition), 1);
        } else {
            newConditionFilter.push(condition);
        }
        setConditionFilter(newConditionFilter);
    };

    let handleCategoryChange = (categoryId) => {
        let newCategoryFilter = [...categoryFilter];
        if (categoryFilter.includes(categoryId)) {
            newCategoryFilter.splice(newCategoryFilter.indexOf(categoryId), 1);
        } else {
            newCategoryFilter.push(categoryId);
        }
        setCategoryFilter(newCategoryFilter);
    };

    let handleSizeChange = (sizeId) => {
        let newSizeFilter = [...sizeFilter];
        if (sizeFilter.includes(sizeId)) {
            newSizeFilter.splice(newSizeFilter.indexOf(sizeId), 1);
        } else {
            newSizeFilter.push(sizeId);
        }
        setSizeFilter(newSizeFilter);
    };

    let handleColorChange = (colorId) => {
        let newColorFilter = [...colorFilter];
        if (colorFilter.includes(colorId)) {
            newColorFilter.splice(newColorFilter.indexOf(colorId), 1);
        } else {
            newColorFilter.push(colorId);
        }
        setColorFilter(newColorFilter);
    }

    // Effects:

    useEffect(() => {
        if (categoryOptions.length > 0) {
            return;
        }
        loadCategoryOptions().then(response => {
            setCategoryOptions(response.data);
        }).catch(e => console.log(e));
    });
    useEffect(() => {
        if (sizeOptions.length > 0) {
            return;
        }
        loadSizeOptions().then(response => {
            setSizeOptions(response.data);
        }).catch(e => console.log(e));

    });
    useEffect(() => {
        if (colorOptions.length > 0) {
            return;
        }
        loadColorOptions().then(response => {
            setColorOptions(response.data);
        }).catch(e => console.log(e));

    });

    useEffect(() => {
        // console.log(colorFilter);
    });


    // Render:

    return (
        <Accordion alwaysOpen="true" flush>
            <h5 className="mx-2 my-4">Filter articles</h5>

            {/*PRICE*/}
            <Accordion.Item eventKey={0}>
                <Accordion.Header>Price {(priceFilter[0] !== 0 || priceFilter[1] !== 30000) ? "*" : ""}</Accordion.Header>
                <Accordion.Body className="pb-5">
                    <ReactSlider
                        className="horizontal-slider"
                        thumbClassName="example-thumb"
                        trackClassName="example-track"
                        value={priceFilter}
                        onChange={onChangePriceSlider}
                        min={0}
                        max={30000}
                    />
                    <Row>
                        <Col className="col-md-6">
                            <Form.Control className="fromPrice" size="sm" onChange={changeFromPrice}
                                          value={priceFilter[0]}/>
                        </Col>
                        <Col className="col-md-6">
                            <Form.Control className="toPrice" size="sm" onChange={changeToPrice}
                                          value={priceFilter[1]}/>
                        </Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>

            {/*CONDITION*/}
            <Accordion.Item eventKey={1}>
                <Accordion.Header>Condition {conditionFilter.length !== 0 ? "*" : ""}</Accordion.Header>
                <Accordion.Body>
                    {conditionOptions.map((condition, index) => {
                        return (
                            <Form.Check
                                type="checkbox"
                                checked={conditionFilter.includes(condition)}
                                onChange={() => handleConditionChange(condition)}
                                label={`${condition}`}
                                id={`condition-${index}`}
                                name="conditionGroup"
                            />
                        );
                    })}
                </Accordion.Body>
            </Accordion.Item>

            {/*CATEGORY*/}
            <Accordion.Item eventKey={2}>
                <Accordion.Header>Category {categoryFilter.length !== 0 ? "*" : ""}</Accordion.Header>
                <Accordion.Body>
                    {/*{categoryOptions.map((category, index) => {*/}
                    {/*    return (*/}
                    {/*        <Form.Check*/}
                    {/*            type="checkbox"*/}
                    {/*            onChange={() => handleCategoryChange(category.id)}*/}
                    {/*            checked={categoryFilter.includes(category.id)}*/}
                    {/*            label={`${category.name.replace("w_", "women's ").replace("m_", "men's ").replace("c_", "children's ")}`}*/}
                    {/*            id={`category-${index}`}*/}
                    {/*        />*/}
                    {/*    );*/}
                    {/*})}*/}

                    <div id="tree-select"/>
                    <TreeSelect
                        treeData={ categoryOptions }
                        treeCheckable={true}
                        showCheckedStrategy="SHOW_PARENT"
                        placeholder="Select category"
                        getPopupContainer={() => document.getElementById("tree-select")}
                    />

                </Accordion.Body>
            </Accordion.Item>

            {/*SIZE*/}
            <Accordion.Item eventKey={3}>
                <Accordion.Header>Size {sizeFilter.length !== 0 ? "*" : ""}</Accordion.Header>
                <Accordion.Body>
                    <Accordion alwaysOpen="true" flush>
                        <Accordion.Item eventKey={0}>
                            <Accordion.Header>EU</Accordion.Header>
                            <Accordion.Body className="pb-5 row">
                                {sizeOptions.filter(size => size.standard === 'EU').map((size, index) => {
                                    return (
                                        <Form.Check
                                            className="col-6 pl-5 pr-0"
                                            onChange={() => handleSizeChange(size.id)}
                                            checked={sizeFilter.includes(size.id)}
                                            type="checkbox"
                                            label={`${size.value}`}
                                            id={`size-${index}`}
                                        />
                                    );
                                })}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey={1}>
                            <Accordion.Header>IN</Accordion.Header>
                            <Accordion.Body className="pb-5 row">
                                {sizeOptions.filter(size => size.standard === 'IN').map((size, index) => {
                                    return (
                                        <Form.Check
                                            className="col-6 pl-5 pr-0"
                                            onChange={() => handleSizeChange(size.id)}
                                            checked={sizeFilter.includes(size.id)}
                                            type="checkbox"
                                            label={`${size.value}`}
                                            id={`size-${index}`}
                                        />
                                    );
                                })}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey={2}>
                            <Accordion.Header>US</Accordion.Header>
                            <Accordion.Body className="pb-5 row">
                                {sizeOptions.filter(size => size.standard === 'US').map((size, index) => {
                                    return (
                                        <Form.Check
                                            className="col-6 pl-5 pr-0"
                                            onChange={() => handleSizeChange(size.id)}
                                            checked={sizeFilter.includes(size.id)}
                                            type="checkbox"
                                            label={`${size.value}`}
                                            id={`size-${index}`}
                                        />
                                    );
                                })}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </Accordion.Body>
            </Accordion.Item>

            {/*COLOR*/}
            <Accordion.Item eventKey={4}>
                <Accordion.Header>Color {colorFilter.length !== 0 ? "*" : ""}</Accordion.Header>
                <Accordion.Body className="row">
                    {colorOptions.map((color, index) => {
                        return (
                            <Form.Check
                                className="col-6 pl-5 pr-0"
                                onChange={() => handleColorChange(color.id)}
                                checked={colorFilter.includes(color.id)}
                                type="checkbox"
                                label={`${color.name}`}
                                id={`size-${index}`}
                            />
                        )
                    })}
                </Accordion.Body>
            </Accordion.Item>

            <Button className="float-right my-4">Update results</Button>

        </Accordion>
    );
}

export default SidebarFilter;