import React, {useContext} from "react";
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import {Carousel} from "react-bootstrap";

import "./ArticlePreview.css"

function ArticlePreview({article, onAddToCart = null}) {

    function handleAddToCart() {
        onAddToCart(article);
    }

    let renderImagesInCarousel = (imgIds) => {
        return imgIds.map(imgId => <Carousel.Item as={Card.Img} key={imgId} src={`/api/images/public/${imgId}`}/>);
    };

    return (
        <Card className="mb-3">
            {/*<Link to={"/shop/" + article.id} key={article.id}>*/}
            {/*    <Card.Img variant="top" src=""/>*/}
            {/*</Link>*/}
            <Card.Header>
                {article.imageIds && article.imageIds.length !== 0 &&

                <Carousel indicators={article.imageIds.length > 1} interval={null} variant="dark" as={Link} to={"/shop/" + article.id} id={"article-" + article.id + "-images"}>
                    {renderImagesInCarousel(article.imageIds)}
                </Carousel>

                }


            </Card.Header>
            <Card.Body>
                <Card.Title>{article.price} DEN</Card.Title>
                <Card.Text>
                    This is the description of the article with id {article.id}.
                    <br/>
                    Condition: <b>{article.articleCondition ? article.articleCondition.toLowerCase() : "Unknown"}</b>
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