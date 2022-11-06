import {FormControl, FormText} from "react-bootstrap";
import Button from "antd/es/button";

function ShopDetailsAndSearch({totalResults, searchText, onChangeSearchText, updateResults}) {

    let handleSearchChange = (e) => {
        onChangeSearchText(e.target.value);
    };

    let onSearchKeyUp = (e) => {
        if (e.key === 'Enter') {
            // console.log(searchText);
            updateResults();
        }
    };


    return (
        <div className="py-4 row justify-content-between ">
            <div className="col-6 pl-5 d-flex">
                <div className="align-items-center d-flex">{totalResults} total results</div>
            </div>
            <div className="search col-6">
                <FormControl type="search"
                             size="sm"
                             id="searchInput"
                             className="form-control muted"
                             placeholder="Search articles by description"
                             onChange={handleSearchChange}
                             value={searchText}
                             onKeyUp={onSearchKeyUp}
                />
            </div>
        </div>
    );
}

export default ShopDetailsAndSearch;