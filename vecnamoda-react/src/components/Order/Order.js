import {Card, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import React from "react";

function Order({order, index = "", showUser = false}) {

    let getOrderTotal = (articles) => {
        return articles.map(article => article.price)
            .reduce((prevTotal, total) => prevTotal + total, 0);
    }

    return (
        <Card className="my-4">
            <Card.Header>
                Order {index} with total price <b>{ getOrderTotal(order.articles) } DEN</b>
                <i> {showUser && order.user ? ". Made by user: " + order.user.username : ""} </i>
            </Card.Header>
            <Card.Body>
                {order.articles.length === 0 ? "This is an empty order" : ""}
                <Row>
                    {order.articles.map(article =>
                        <Col key={"article" + article.id} xl={4} md={6}>
                            <ArticlePreview article={article}/>
                        </Col>
                    )}
                </Row>
            </Card.Body>
            <Card.Footer>
                <i> Date ordered: {new Date(order.dateOrdered).toDateString()} </i>
            </Card.Footer>
        </Card>
    );
}

export default Order;