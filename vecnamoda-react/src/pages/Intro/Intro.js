import React, {useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import stock1 from '../../assets/imgs/stock1.jpg'
import stock2 from '../../assets/imgs/stock2.jpg'
import stock3 from '../../assets/imgs/stock3.jpg'
import Image from "react-bootstrap/Image";
import {Link} from "react-router-dom";

import './Intro.css';

function Intro() {

    return (
        <>
            <div>
                <h3>Our mission</h3>
                <h5>We are an online consignment and thrift store. Our biggest priority is making good fashion
                    sustainable.</h5>
            </div>
            <br/>
            <div>
                <h4>Browse quality items at affordable prices</h4>
                <br/>
                <Row>
                    <Col lg="6" className="img-container">
                        <Image className="img-fluid w-100" src={stock1}/>
                        <h1 className="overlay-text-shop">
                            <Link to={'/shop'} className="special-link">Shop...</Link>
                        </h1>
                    </Col>
                    <Col lg="6" className="img-container">
                        <Image className="img-fluid w-100" src={stock2}/>
                        <h1 className="overlay-text-sell">
                            <Link to={'/sell'} className="special-link">...Or sell </Link>
                        </h1>
                    </Col>
                </Row>
            </div>
            <br/>
            <div>
                <Row>
                    <Col lg="6"/>

                    <Col lg="6" className="d-flex justify-content-evenly">
                        <h2>How it works</h2>
                        <h4>Clear out your closet and we'll do the rest!
                            <br/>
                            <Link to="/sell">
                                Learn more about how to sell...
                            </Link>
                        </h4>
                    </Col>
                </Row>

            </div>
            <br/>
        </>
    );

}

export default Intro;