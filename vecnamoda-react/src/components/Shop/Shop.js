import React, {useContext, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import SidebarFilter from "../SidebarFilter/SidebarFilter";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import {CartContext} from "../../context/CartContext";
import {getAvailableArticles} from "../../service/articleService";
import Pagination from "../Pagination/Pagination";


function Shop() {
    const navigate = useNavigate();
    const cart = useContext(CartContext);

    const [articles, setArticles] = useState(null);
    const [page, setPage] = useState(1);
    const pageSize = 4;
    const [totalPages, setTotalPages] = useState(1);

    let onAdd = (article) => {
        cart.addItemToCart(article);
    }

    let renderArticles = () => {
        let rendered = []
        for (let i in articles) {
            rendered.push(
                <>
                    <Col key={"col" + i} xl={4} md={6}>
                        <ArticlePreview key={"article" + i} article={articles[i]} onAddToCart={onAdd}/>
                    </Col>

                    {/*<Link to={"/shop/" + articles[i].id} key={articles[i].id}>ArticleView {articles[i].id}</Link>*/}
                </>
            );
        }
        return rendered;
    }

    let handleChangePage = (newPage) => {
        if (page !== newPage) {
            setPage(newPage);
        }
    }

    useEffect(() => {
        let fetchArticles = async () => {
            return await getAvailableArticles(page, pageSize);
        }

        if (articles === null) {
            fetchArticles().then(response => {
                console.log(response.data);
                setArticles(response.data.content);
                setTotalPages(response.data.totalPages);
                console.log(totalPages);
            });
        }
    });

    useEffect(() => {
        let fetchArticles = async () => {
            return await getAvailableArticles(page, pageSize);
        }

        fetchArticles().then(response => {
            console.log(response.data);
            setArticles(response.data.content);
            setTotalPages(response.data.totalPages);
            console.log(totalPages);
        });
    },
        [page]
    );

    return (
        <Container className="main mt-3">
            <Row>
                <br/>
                <Col md="3"><SidebarFilter/></Col>
                <Col md="9" className="articles">
                    <Row className="justify-content-start">
                        {renderArticles()}
                    </Row>
                    <br/>
                    <Pagination page={page} totalPages={totalPages} onChangePage={handleChangePage}/>
                </Col>
            </Row>

        </Container>
    );

}

export default Shop;