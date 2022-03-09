import React from "react";
import {Container} from "react-bootstrap";

function Article({id}) {
    return (
        <Container className="mt-3">
            This article has id {id};
        </Container>
    );
}

export default Article;