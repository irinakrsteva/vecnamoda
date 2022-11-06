import {FormControl, InputGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";

function ShopDetailsAndSearch({totalResults, searchText, onChangeSearchText, onEnter, onClear}) {

    let handleSearchChange = (e) => {
        onChangeSearchText(e.target.value);
    };

    let onSearchKeyUp = (e) => {
        if (e.key === 'Enter') {
            onEnter();
        }
    };

    let clearSearch = () => {
        onClear();
    };

    return (
        <div className="py-4 row justify-content-between ">
            <div className="col-6 pl-5 d-flex">
                <div className="align-items-center d-flex">{totalResults} total results</div>
            </div>
            <div className="search col-6">
                <InputGroup>
                    <FormControl type="search"
                                 size="sm"
                                 id="searchInput"
                                 className="form-control muted"
                                 placeholder="Search articles by description"
                                 onChange={handleSearchChange}
                                 value={searchText}
                                 onKeyUp={onSearchKeyUp}
                    />
                    <Button className="btn-sm btn-secondary" onClick={clearSearch}>
                        x
                    </Button>
                </InputGroup>
            </div>
        </div>
    );
}

export default ShopDetailsAndSearch;