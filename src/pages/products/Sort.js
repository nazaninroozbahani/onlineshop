import React from 'react';
import { MdSort } from 'react-icons/md';
import styles from "./Products.module.scss";

const Sort = (props) => {

    const handleClick = (p) => {
        props.setSortParam(p);
        props.setCurrentPage(0);
    };

    return (
        <div className={styles.sort}>
            <MdSort className={styles.sortIcon} />
            <p>مرتب سازی بر اااااااااااااساس : </p>
            <ul>
                <li onClick={() => handleClick(0)}><span className={props.sortParam === 0 ? styles.selected : ''}>پیش فرض</span></li>
                <li onClick={() => handleClick(1)}><span className={props.sortParam === 1 ? styles.selected: ''} >گران ترین</span></li>
                <li onClick={() => handleClick(2)}><span className={props.sortParam === 2 ? styles.selected : ''} >ارزان ترین</span></li>
            </ul>
        </div>
    );
};

export default Sort;
