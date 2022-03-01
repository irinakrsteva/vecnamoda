import React from "react";
import {Link, useNavigate} from "react-router-dom";
import SidebarFilter from "../SidebarFilter/SidebarFilter";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Shop() {
    const navigate = useNavigate();

    const articles = [
        {id: 1, price:900, name: "Article 1"},
        {id: 2, price:1000, name: "Article 2"},
        {id: 3, price:1500, name: "Article 3"},
        {id: 4, price:600, name: "Article 4"},
        {id: 5, price:2100, name: "Article 5"}
    ]

    function renderArticles() {
        let rendered = []
        for (let i in articles) {
            console.log(articles[i]);
            rendered.push(
                <Col className={"article"+articles[i].id} xl={4} lg={6}>
                    <Card >
                        <Link to={"/shop/" + articles[i].id} key={articles[i].id}>
                            <Card.Img variant="top" src="holder.js/100px180"/>
                        </Link>
                        <Card.Body>
                            <Card.Title>{articles[i].price} DEN</Card.Title>
                            <Card.Text>
                                This is {articles[i].name}
                            </Card.Text>
                            <Button id={"addArticle"+articles[i].id} variant="primary">Add to card</Button>
                        </Card.Body>
                    </Card>
                </Col>

                // <Link to={"/shop/" + articles[i].id} key={articles[i].id}>Article {articles[i].id}</Link>
            );
        }
        return rendered;
    }

    return (
        <Container className="main">
            <Row>
                <br/>
                <Col md="auto"><SidebarFilter/></Col>
                <Col className="articles">
                    <Row className="justify-content-start">
                        {renderArticles()}
                    </Row>
                </Col>
            </Row>

        </Container>
    );

}

export default Shop;