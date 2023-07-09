import {Card} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import ArticlePreview from "../../components/ArticlePreview/ArticlePreview";

function MyConsignment({consignment, index = ""}) {

    return (
        <Card className="my-4">
            <Card.Header>
                Consignment no. {index}
            </Card.Header>
            <Card.Body>
                <span className="text-info font-weight-bold">{consignment.articles.length === 0 ? "Consignment not yet processed by employee" : ""}</span>
                <Row>
                    {consignment.articles.map(article =>
                        <Col key={"article" + article.id} xl={4} md={6}>
                            <ArticlePreview article={article}/>
                        </Col>
                    )}
                </Row>
            </Card.Body>
        </Card>
    );
}

export default MyConsignment;