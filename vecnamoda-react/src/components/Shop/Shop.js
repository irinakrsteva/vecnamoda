import React from "react";
import {Link, useNavigate} from "react-router-dom";
import SidebarFilter from "../SidebarFilter/SidebarFilter";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArticleCard from "../ArticleCard/ArticleCard";

function Shop() {
    const navigate = useNavigate();

    const articles = [
        {id: 1, price: 900, name: "Article 1"},
        {id: 2, price: 1000, name: "Article 2"},
        {id: 3, price: 1500, name: "Article 3"},
        {id: 4, price: 600, name: "Article 4"},
        {id: 5, price: 2100, name: "Article 5"}
    ]

    function renderArticles() {
        let rendered = []
        for (let i in articles) {
            rendered.push(
                <Col key={"article" + i} xl={4} md={6}>
                    <ArticleCard article={articles[i]}/>
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