import React from "react";
import {Container} from "react-bootstrap";
import {useParams} from "react-router-dom";

function ArticleView() {

    let { id } = useParams();

    // TODO Why does this page log a 404

    return (
        <Container className="mt-3">
            This article has id {id};
        </Container>
    );

}

export default ArticleView;