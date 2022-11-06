import React from "react";
import {Container} from "react-bootstrap";
import {useParams} from "react-router-dom";
import Button from "bootstrap/js/src/button";

function ArticleView({ location = null }) {

    return (
        <Container className="mt-3">
            {/*This article has id {location.article.id};*/}

            {/*<Button onClick={location.onAddtoCart(location.article.id)}>*/}
            {/*    Add to cart*/}
            {/*</Button>*/}
        </Container>
    );

}

export default ArticleView;