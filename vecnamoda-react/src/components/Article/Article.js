import React from "react";
import {useParams} from "react-router-dom";

function Article() {
    let { id } = useParams();

    return (
        <div>
            This article has id {id};
        </div>
    );

}

export default Article;