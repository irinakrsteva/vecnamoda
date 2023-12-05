import React, {useEffect, useState} from "react";
import "./SidebarFilter.css";
import Accordion from 'react-bootstrap/Accordion';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import ReactSlider from 'react-slider';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {InputGroup} from "react-bootstrap";

import {getCategories} from "../../../service/categoryService";
import {getSizes} from "../../../service/sizeService";
import {getColors} from "../../../service/colorService";
import {TreeSelect} from "antd";
import "antd/dist/antd.css";
import formatCategory from "../../../utils/helpers/formatCategory";

function SidebarFilter({ filters, filterHandlers, updateResults, resetFilters }) {

    const conditionOptions = ['EXCELLENT', 'GREAT', 'GOOD'];
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [sizeOptions, setSizeOptions] = useState([]);
    const [colorOptions, setColorOptions] = useState([]);

    // ----

    let loadCategoryOptions = async () => {
        return await getCategories();
    };

    let loadSizeOptions = async () => {
        return await getSizes();
    };

    let loadColorOptions = async () => {
        return await getColors();
    };

    // -- Change handlers:

    let onChangeStartPrice = (e) => {
        filterHandlers.handlePriceChange([e.target.value, filters.priceFilter[1]]);
        console.log("Start price changed to: " + e.target.value);
    };

    let onChangeEndPrice = (e) => {
        filterHandlers.handlePriceChange([filters.priceFilter[0], e.target.value]);
        console.log("End price changed to: " + e.target.value);
    };

    // Effects:

    // -- set Category options --
    useEffect(() => {
        if (categoryOptions.length > 0) {
            return;
        }
        loadCategoryOptions().then(response => {
            let formattedResponse = (response.data).map(category => {
                return ({
                    id: category.id,
                    value: category.id,
                    pId: category.parentCategoryId,
                    title: formatCategory(category.name),
                });
            });
            setCategoryOptions(formattedResponse);
        }).catch(e => console.log(e));
    }, []);
    // -- set Size options --
    useEffect(() => {
        if (sizeOptions.length > 0) {
            return;
        }
        loadSizeOptions().then(response => {
            setSizeOptions(response.data);
        }).catch(e => console.log(e));

    }, []);
    // -- set Color options --
    useEffect(() => {
        console.log('loading colors!');
        if (colorOptions.length > 0) {
            return;
        }
        loadColorOptions().then(response => {
            setColorOptions(response.data);
        }).catch(e => console.log(e));

    }, []);

    return (
        <Accordion alwaysOpen="true" flush>
            <h5 className="mx-2 my-4">Filter articles</h5>

            {/*PRICE*/}
            <Accordion.Item eventKey={0}>
                <Accordion.Header>Price {(filters.priceFilter[0] !== 0 || filters.priceFilter[1] !== 30000) ? "*" : ""}</Accordion.Header>
                <Accordion.Body className="pb-5">
                    <ReactSlider
                        className="horizontal-slider"
                        thumbClassName="example-thumb"
                        trackClassName="example-track"
                        value={filters.priceFilter} // only using array for priceFilter because that's what ReactSlider wants
                        onChange={filterHandlers.handlePriceChange}
                        min={0}
                        max={30000}
                    />
                    <Row>
                        <Col className="col-md-6">
                            <Form.Control className="fromPrice" size="sm"
                                          onChange={onChangeStartPrice}
                                          value={filters.priceFilter[0]}/>
                        </Col>
                        <Col className="col-md-6">
                            <Form.Control className="toPrice" size="sm"
                                          onChange={onChangeEndPrice}
                                          value={filters.priceFilter[1]}/>
                        </Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>

            {/*CONDITION*/}
            <Accordion.Item eventKey={1}>
                <Accordion.Header>Condition {filters.conditionFilter.length !== 0 ? "*" : ""}</Accordion.Header>
                <Accordion.Body>
                    {conditionOptions.map((condition, index) => {
                        return (
                            <Form.Check
                                type="checkbox"
                                checked={filters.conditionFilter.includes(condition)}
                                onChange={() => filterHandlers.handleConditionChange(condition)}
                                label={`${condition}`}
                                id={`condition-${index}`}
                                name="conditionGroup"
                            />
                        );
                    })}
                </Accordion.Body>
            </Accordion.Item>


            {/*SIZE*/}
            <Accordion.Item eventKey={3}>
                <Accordion.Header>Size {filters.sizeFilter.length !== 0 ? "*" : ""}</Accordion.Header>
                <Accordion.Body>
                    <Accordion alwaysOpen="true" flush>
                        <Accordion.Item eventKey={0}>
                            <Accordion.Header>EU</Accordion.Header>
                            <Accordion.Body className="pb-5 row">
                                {sizeOptions.filter(size => size.standard === 'EU').map((size, index) => {
                                    return (
                                        <Form.Check
                                            className="col-6 pl-5 pr-0"
                                            onChange={() => filterHandlers.handleSizeChange(size.id)}
                                            checked={filters.sizeFilter.includes(size.id)}
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
                                            onChange={() => filterHandlers.handleSizeChange(size.id)}
                                            checked={filters.sizeFilter.includes(size.id)}
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
                                            onChange={() => filterHandlers.handleSizeChange(size.id)}
                                            checked={filters.sizeFilter.includes(size.id)}
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
                <Accordion.Header>Color {filters.colorFilter.length !== 0 ? "*" : ""}</Accordion.Header>
                <Accordion.Body className="row">
                    {colorOptions.map((color, index) => {
                        return (
                            <Form.Check
                                className="col-6 pl-5 pr-0"
                                onChange={() => filterHandlers.handleColorChange(color.id)}
                                checked={filters.colorFilter.includes(color.id)}
                                type="checkbox"
                                label={`${color.name}`}
                                id={`size-${index}`}
                            />
                        )
                    })}
                </Accordion.Body>
            </Accordion.Item>

            {/*CATEGORY*/}
            <Accordion.Item eventKey={2}>
                <Accordion.Header>Category {filters.categoryFilter.length !== 0 ? "*" : ""}</Accordion.Header>
                <Accordion.Body>

                    <div>
                        <TreeSelect
                            showSearch={false}
                            bordered={true}
                            allowClear
                            treeDefaultExpandAll
                            id="tree-select"
                            treeDataSimpleMode={true}
                            treeData={categoryOptions}
                            treeCheckable={true}
                            multiple={true}
                            showCheckedStrategy={TreeSelect.SHOW_ALL}
                            placeholder="Select category"
                            value={filters.categoryFilter}
                            onChange={filterHandlers.handleCategoryChange}
                            style={{width: "100%"}}
                            // getPopupContainer={() => document.getElementById("tree-select")}
                        />
                    </div>

                </Accordion.Body>
            </Accordion.Item>
            <InputGroup className="ml-4 mt-2">
                <Button
                    className="float-right my-4 btn-secondary"
                    onClick={resetFilters}
                >
                    Reset filters
                </Button>
                <Button
                    className="float-right my-4"
                    onClick={updateResults}
                >
                    Update results
                </Button>
            </InputGroup>


        </Accordion>
    );
}

export default SidebarFilter;