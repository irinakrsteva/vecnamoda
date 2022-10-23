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
            <Card.Header>
                {
                    article.imageIds && article.imageIds.length !== 0 &&

                    <Carousel
                        indicators={false}
                        slide={false}
                        controls={article.imageIds.length > 1}
                        interval={null}
                        variant="dark"
                        // as={Link} to={"/shop/" + article.id} id={"article-" + article.id + "-images"}
                    >
                        {renderImagesInCarousel(article.imageIds)}
                    </Carousel>
                }


            </Card.Header>
            <Card.Body>
                <Card.Title>{article.price} DEN</Card.Title>
                <Card.Text>
                    <span><i>{article.description ? article.description : "No description available"}</i></span>
                    <br/>
                    <span>Condition: <b>{article.articleCondition ? article.articleCondition.toLowerCase() : "Unknown"}</b></span>
                    <br/>
                    <span>Category: <b>{article.category ?
                        article.category.name.replace("w_", "women's ").replace("m_", "men's ").replace("c_","children's ")
                        : "Unknown"}</b>
                    </span>
                    <br/>
                    <span>Size: <b>{article.size ? article.size.standard + " " + article.size.value : "Unknown"}</b></span>
                    <br/>
                    <span>Color: <b>{article.color ? article.color.name : "Unknown"}</b></span>
                    <br/>
                    {/*<span> {JSON.stringify(article)} </span>*/}
                    {/*<br/>*/}
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