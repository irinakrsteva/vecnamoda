import React from "react";
import "./SidebarFilter.css";
import Accordion from 'react-bootstrap/Accordion';
import Button from "react-bootstrap/Button";

function SidebarFilter() {

    return (

        <Accordion alwaysOpen="true" flush>

            <h5 className="mx-2 my-4">Filter articles</h5>

            <Accordion.Item eventKey={0}>
                <Accordion.Header>Price</Accordion.Header>
                <Accordion.Body>here u select da price</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey={1}>
                <Accordion.Header>Condition</Accordion.Header>
                <Accordion.Body>here u select da condition</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey={2}>
                <Accordion.Header>Category</Accordion.Header>
                <Accordion.Body>here u select da cat</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey={3}>
                <Accordion.Header>Size</Accordion.Header>
                <Accordion.Body>here u select da size</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey={4}>
                <Accordion.Header>Color</Accordion.Header>
                <Accordion.Body>here u select da col</Accordion.Body>
            </Accordion.Item>

            <Button className="float-right my-4">Update results</Button>

        </Accordion>

        //
        // <div className="sidebar bg-primary text-light">
        //     <ul>
        //         <li>1</li>
        //         <li>2</li>
        //         <li>3</li>
        //         <li>4</li>
        //     </ul>
        // </div>
    );
}

export default SidebarFilter;