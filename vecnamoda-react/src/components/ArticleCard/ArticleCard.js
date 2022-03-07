import React from "react";
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


function ArticleCard({article}) {

    return (
        <Card >
            <Link to={"/shop/" + article.id} key={article.id}>
                <Card.Img variant="top" src="holder.js/100px180"/>
            </Link>
            <Card.Body>
                <Card.Title>{article.price} DEN</Card.Title>
                <Card.Text>
                    This is {article.name}
                </Card.Text>
                <Button id={"addArticle"+article.id} variant="primary">Add to card</Button>
            </Card.Body>
        </Card>
    );
}

export default ArticleCard;