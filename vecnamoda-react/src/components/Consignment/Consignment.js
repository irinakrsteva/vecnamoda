import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {useParams} from "react-router-dom";
import {getArticlesInConsignment, getConsignmentByToken} from "../../service/consignmentService";
import Button from "react-bootstrap/Button";

//ONLY FOR EMPLOYEES/ADMINS

function Consignment() {

    let {token} = useParams();

    let [consignment, setConsignment] = useState(null);
    let [articles, setArticles] = useState([]);

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
                setArticles(articles);
            }).catch(() => {});
        }
    });

    let openArticleForm = () => {

    }

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
                    <Button onClick={openArticleForm}>Add new article</Button>
                </Col>
            </Row>
        </Container>
    );

}

export default Consignment;