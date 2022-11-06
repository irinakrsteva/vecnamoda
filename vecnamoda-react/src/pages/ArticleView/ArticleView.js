import React from "react";
import {Container} from "react-bootstrap";
import {useParams} from "react-router-dom";
import Button from "bootstrap/js/src/button";

function ArticleView({ article, onAddtoCart = null }) {

    return (
        <Container className="mt-3">
            This article has id {article.id};

            <Button onClick={onAddtoCart(article.id)}>
                Add to cart
            </Button>
        </Container>
    );

}

export default ArticleView;