import React, {useContext} from "react";
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {CartContext, CartProvider} from "../../context/CartContext";

function ArticlePreview({article, onAddToCart = null}) {

    function handleAddToCart() {
        onAddToCart(article);
    }

    return (
        <Card className={"mb-3"}>
            <Link to={"/shop/" + article.id} key={article.id}>
                <Card.Img variant="top" src=""/>
            </Link>
            <Card.Body>
                <Card.Title>{article.price} DEN</Card.Title>
                <Card.Text>
                    This is the description of the article with id {article.id}.
                </Card.Text>

                {onAddToCart ?
                    <Button id={"addArticle" + article.id} onClick={() => handleAddToCart()} variant="primary">Add to
                        cart</Button>
                    :
                    <></>
                }
            </Card.Body>
        </Card>
    );
}

export default ArticlePreview;