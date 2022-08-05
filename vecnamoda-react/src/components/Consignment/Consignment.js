import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {useParams} from "react-router-dom";
import {getConsignmentByToken} from "../../service/consignmentService";
import Button from "react-bootstrap/Button";
import AddArticle from "../AddArticle/AddArticle";
import {addArticle} from "../../service/articleService";
import ArticlePreview from "../ArticlePreview/ArticlePreview";

//ONLY FOR EMPLOYEES/ADMINS

function Consignment() {

    const {token} = useParams();

    const [showAddArticle, setShowAddArticle] = useState(false);
    const [consignment, setConsignment] = useState(null);

    useEffect(() => {
        if (!consignment) {
            loadConsignment();
        }
    });

    let loadConsignment = () => {
        getConsignmentByToken(token).then(response => {
            setConsignment(response.data);
        }).catch((err) => console.log(err));
    }

    let renderArticles = () => {
        if (!consignment || !consignment.articles) {
            return null;
        }
        return <Row>
            {consignment.articles.map(article =>
                    <Col key={"article" + article.id} xl={4} md={6}>
                        <ArticlePreview article={article}/>
                    </Col>
                // <div key={'article-' + article.id}> Article has id: {article.id}, price: {article.price} and
                //     is {article.status.toLowerCase()}</div>
            )}
        </Row>;
    };

    let handleAddArticle = (article) => {
        return addArticle(article).then(res => {
                loadConsignment();
            }
        ).catch(error => {
                console.log(error);
            }
        );
    }

    return (
        <Container>

            {consignment ?
                <div>
                    <Row className="mt-3 mb-3">
                        <Col lg={{span: 5, offset: 3}} sm={{span: 8, offset: 2}}>
                            Consignment id: {consignment ? consignment.id : ""}
                            <br/>
                            Created by user: {consignment ? consignment.user.username : ""}
                            <br/>
                            <br/>
                            <Button onClick={() => setShowAddArticle(true)}>Add new article</Button>
                        </Col>
                    </Row>

                    {renderArticles()}

                    <AddArticle
                        show={showAddArticle}
                        onHide={() => setShowAddArticle(false)}
                        consignmentid={consignment ? consignment.id : null}
                        onAdd={handleAddArticle}
                        // content={[]}
                    />
                </div>
                :
                <></>
            }


        </Container>
    );

}

export default Consignment;