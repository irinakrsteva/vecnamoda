import React, {useContext, useEffect, useState} from "react";
import {Pagination as BootstrapPagination} from 'react-bootstrap';
import './Pagination.css';


function Pagination({page, totalPages, onChangePage}) {

    let renderItems = () => {
        let items = [];
        for (let number = 1; number <= totalPages; number++) {
            items.push(
                <BootstrapPagination.Item key={number} active={number === page} onClick={() => handleClick(number)}>
                    {number}
                </BootstrapPagination.Item>,
            );
        }
        return items;
    };

    let handleClick = (number) => {
        onChangePage(number);
    };

    const paginationBasic = (
        <div>
            <BootstrapPagination>
                <BootstrapPagination.First disabled={page === 1} onClick={() => handleClick(1)}/>
                <BootstrapPagination.Prev disabled={page === 1} onClick={() => handleClick(page - 1)}/>
                {renderItems()}
                <BootstrapPagination.Next disabled={page === totalPages} onClick={() => handleClick(page + 1)}/>
                <BootstrapPagination.Last disabled={page === totalPages} onClick={() => handleClick(totalPages)}/>
            </BootstrapPagination>
        </div>
    );

    return (
        <div id="pagination">
            {paginationBasic}
        </div>
    );

}

export default Pagination;