import React from "react";
import {Container} from "react-bootstrap";

function ArticleView({id}) {
    return (
        <Container className="mt-3">
            This article has id {id};
        </Container>
    );
}

export default ArticleView;