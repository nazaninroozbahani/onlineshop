import React from 'react';
import styles from "./Products.module.scss";
import {useSelector} from "react-redux";

const Top = () => {

    const laptops = useSelector(state => state.laptops.laptops);

    return (
        <div className={styles.topDiv}>
            <p className={styles.breadcrumb}>فروشگاه آنلاین شاپ/لپ تاپ</p>
            <p className={styles.count}> {laptops.length} کالا</p>
        </div>
    );
};

export default Top;