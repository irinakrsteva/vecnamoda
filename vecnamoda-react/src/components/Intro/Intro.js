import React, {useState} from "react";
import {Button, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import ColorContext from "../../context/CartContext";


import stock1 from '../../assets/imgs/stock1.jpg'
import stock2 from '../../assets/imgs/stock2.jpg'
import stock3 from '../../assets/imgs/stock3.jpg'
import Image from "react-bootstrap/Image";
import {Link} from "react-router-dom";

function Intro({testVar}) {

    // const [updatableTestVar, setUTestVar] = useState(testVar);

    return (
        <>
            {/*Hello and welcome. This is the Intro {testVar}, {updatableTestVar}*/}
            {/*<div>*/}
            {/*    <Button onClick={() => {setUTestVar(updatableTestVar + "AA - ")}} >Test</Button>*/}
            {/*</div>*/}

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
                    <Col lg="6">
                        <Image className="img-fluid w-100" src={stock1}/>
                    </Col>
                    <Col lg="6">
                        <Image className="img-fluid w-100" src={stock2}/>
                    </Col>
                </Row>
            </div>
            <br/>
            <div>
                <Row>

                    <Col lg="6">
                        <h2>How it works</h2>
                        <br/>
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