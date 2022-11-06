import React, {useContext, useEffect, useState} from "react";
import SidebarFilter from "./SidebarFilter/SidebarFilter";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArticlePreview from "../../components/ArticlePreview/ArticlePreview";
import {CartContext} from "../../context/CartContext";
import {getAvailableArticles} from "../../service/articleService";
import Pagination from "../../components/Pagination/Pagination";
import ShopDetailsAndSearch from "./ShopDetailsAndSearch/ShopDetailsAndSearch";


function Shop() {
    const PAGE_SIZE = 6;

    const cart = useContext(CartContext);

    // -- STATES FOR FETCHED ARTICLES INFO

    const [articles, setArticles] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    // -- STATES FOR FETCH CONDITIONS (FROM CHILD COMPONENTS)

    const [searchText, setSearchText] = useState("");

    const [filters, setFilters] = useState({
        priceFilter: [0, 30000],
        conditionFilter: [],
        categoryFilter: [],
        sizeFilter: [],
        colorFilter: []
    });

    // -- METHODS FOR FETCHING ARTICLES INFO

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
                </>
            );
        }
        return rendered;
    }

    // -- METHODS FOR SETTING FETCH CONDITIONS (FROM CHILD COMPONENTS)

    let handleChangePage = (newPage) => {
        if (page !== newPage) {
            setPage(newPage);
        }
    }

    let handleChangeSearchText = (value) => {
        setSearchText(value);
    }

    let clearSearch = () => {
        setSearchText("");
        updateResults();
    }

    let onPriceChange = ([startPrice, endPrice]) => {
        setFilters({...filters, priceFilter: [startPrice, endPrice]});
    }

    let onConditionChange = (condition) => {
        let newConditionFilter = [...(filters.conditionFilter)];
        if (filters.conditionFilter.includes(condition)) {
            newConditionFilter.splice(newConditionFilter.indexOf(condition), 1);
        } else {
            newConditionFilter.push(condition);
        }
        setFilters({...filters, conditionFilter: newConditionFilter});
    }

    let onCategoryChange = (categories) => {
        setFilters({...filters, categoryFilter: categories})
    }

    let onSizeChange = (sizeId) => {
        let newSizeFilter = [...filters.sizeFilter];
        if (filters.sizeFilter.includes(sizeId)) {
            newSizeFilter.splice(newSizeFilter.indexOf(sizeId), 1);
        } else {
            newSizeFilter.push(sizeId);
        }
        setFilters({...filters, sizeFilter: newSizeFilter});
    }

    let onColorChange = (colorId) => {
        let newColorFilter = [...filters.colorFilter];
        if (filters.colorFilter.includes(colorId)) {
            newColorFilter.splice(newColorFilter.indexOf(colorId), 1);
        } else {
            newColorFilter.push(colorId);
        }
        setFilters({...filters, colorFilter: newColorFilter});
    }

    let filterHandlers = {
        handlePriceChange: onPriceChange,
        handleConditionChange: onConditionChange,
        handleCategoryChange: onCategoryChange,
        handleSizeChange: onSizeChange,
        handleColorChange: onColorChange,
    };

    let resetFilters = () => {
        setFilters({
            priceFilter: [0, 30000],
            conditionFilter: [],
            categoryFilter: [],
            sizeFilter: [],
            colorFilter: []
        });
    }

    // -- Rendering articles logic: --

    let updateResults = () => {
        setPage(1);
        setShopInfo();
    }

    let fetchArticles = async () => {
        return await getAvailableArticles(
            page,
            PAGE_SIZE,
            searchText,
            filters
        );
    }

    let setShopInfo = () => {
        fetchArticles().then(response => {
            setArticles(response.data.content);
            setTotalPages(response.data.totalPages);
            setTotalResults(response.data.totalElements);
        });
    }

    useEffect(() => setShopInfo(),
        [page]
    );

    useEffect(() => {
        if(searchText === "") {
            updateResults();
        }
    }, [searchText]);

    useEffect(() => {
        if(filters.priceFilter[0] === 0
            && filters.priceFilter[1] === 30000
            && filters.conditionFilter.length === 0
            && filters.sizeFilter.length === 0
            && filters.colorFilter.length === 0
            && filters.categoryFilter.length === 0
        ) {
            updateResults();
        }
    }, [filters]);

    return (
        <Container className="main mt-3">
            <Row>
                <br/>
                <Col md="3">
                    <SidebarFilter
                        filters={filters}
                        filterHandlers={filterHandlers}
                        updateResults={updateResults}
                        resetFilters={resetFilters}
                    />
                </Col>
                <Col md="9" className="articles">
                    <Row className="mx-1 my-4 bg-light">
                        <ShopDetailsAndSearch
                            totalResults={totalResults}
                            searchText={searchText}
                            onChangeSearchText={handleChangeSearchText}
                            onEnter={updateResults}
                            onClear={clearSearch}
                        />
                    </Row>
                    <Row className="justify-content-start">
                        {renderArticles()}
                    </Row>
                    <br/>
                    <Pagination
                        page={page}
                        totalPages={totalPages}
                        onChangePage={handleChangePage}
                    />
                </Col>
            </Row>

        </Container>
    );

}

export default Shop;