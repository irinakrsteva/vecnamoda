import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {useParams} from "react-router-dom";
import {getArticlesInConsignment, getConsignmentByToken} from "../../service/consignmentService";
import Button from "react-bootstrap/Button";
import AddArticle from "../AddArticle/AddArticle";

//ONLY FOR EMPLOYEES/ADMINS

function Consignment() {

    const {token} = useParams();

    const [showAddArticle, setShowAddArticle] = useState(false);

    const [consignment, setConsignment] = useState(null);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        if(!consignment) {
            getConsignmentByToken(token).then(consignment => {
                console.log(token);
                setConsignment(consignment.data);
            }).catch(() => {
            });
            // console.log(consignment);
        }
        if(consignment && consignment.id && articles === []) {
            getArticlesInConsignment(consignment.id).then(articles => {
                setArticles(articles.data);
            }).catch(err => console.log(err));
        }
    });

    // console.log(consignment.user)
    console.log(articles);

    return (
        <Container>
            <Row>
                <Col lg={{span: 5, offset: 3}} sm={{span: 8, offset: 2}}>
                    Consignment id: {consignment ? consignment.id : ""}
                    <br/>
                    Created by user: {consignment ? consignment.user.username : ""}
                    <br/>
                    <br/>
                    <Button onClick={() => setShowAddArticle(true)}>Add new article</Button>
                </Col>
            </Row>
            <Row>
                <Col lg={{span: 5, offset: 3}} sm={{span: 8, offset: 2}}>
                    {articles}
                </Col>
            </Row>

            <AddArticle
                show={showAddArticle}
                onHide={() => setShowAddArticle(false)}
                consignmentid={consignment ? consignment.id : null}
                // content={[]}
            />
        </Container>
    );

}

export default Consignment;