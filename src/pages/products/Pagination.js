import React from 'react';
import styles from "./Products.module.scss";
import ReactPaginate from "react-paginate";

const Pagination = (props) => {
    return (
        <ReactPaginate
            previousLabel={"<<"}
            nextLabel={">>"}
            pageCount={props.pageCount}
            onPageChange={props.onPageChange}
            containerClassName={styles.pagination}
            previousLinkClassName={styles.pagination_link}
            nextLinkClassName={styles.pagination_link}
            disabledClassName={styles.disabled}
            activeClassName={styles.active}
            forcePage={props.activePage}
        />
    );
};

export default Pagination;