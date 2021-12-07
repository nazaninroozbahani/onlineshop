import React from 'react';
import styles from "./Header.module.scss";
import {BsSearch} from "react-icons/all";



const Search = () => {
    return (
        <form className={styles.search}>
            <BsSearch className={styles.icon} color={"lightgray"} size={"1.5rem"}/>

            <input className={styles.input} placeholder="جستجو ... "/>
        </form>

    );
};

export default Search;