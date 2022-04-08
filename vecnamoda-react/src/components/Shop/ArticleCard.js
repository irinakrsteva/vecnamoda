import React, {useContext} from "react";
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {CartContext, CartProvider} from "../../context/CartContext";

function ArticleCard({article}) {
    let cart = useContext(CartContext);

    function handleAddToCart() {
        cart.addItemToCart(article);
        console.log("adding" + article.id);
        console.log(cart.items);
    }

    return (
        <Card>
            <Link to={"/shop/" + article.id} key={article.id}>
                <Card.Img variant="top" src="holder.js/100px180"/>
            </Link>
            <Card.Body>
                <Card.Title>{article.price} DEN</Card.Title>
                <Card.Text>
                    This is {article.name}
                </Card.Text>
                <Button id={"addArticle"+article.id} onClick={() => handleAddToCart()} variant="primary">Add to cart</Button>
            </Card.Body>
        </Card>
    );
}

export default ArticleCard;