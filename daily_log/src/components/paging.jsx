import React from "react";
import Pagination from "react-js-pagination";
import "./paging.css";

const Paging = ({ page, count, setPage }) => {
    return (
        <div>
            <Pagination
                activePage={page}
                itemsCountPerPage={6}
                totalItemsCount={count}
                pageRangeDisplayed={5}
                prevPageText={"<"}
                nextPageText={">"}
                onChange={setPage}
            />
        </div>
    );
};

export default Paging;