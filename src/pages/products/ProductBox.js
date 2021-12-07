import React from 'react';
import styles from "./Products.module.scss"
import {useHistory} from 'react-router-dom';
import {numberWithCommas} from "../../common/CommonFunctions";


const ProductBox = (props) => {

    const history = useHistory();

    const handleClick = () => {
         history.push(`/product/${props.item.id}`);
    }

    return (
        <div className={styles.productBox}>
            <img src={props.item.img} className={styles.img} onClick={handleClick}/>
            <p className={styles.name} onClick={handleClick}>{props.item.name}</p>
            <p className={styles.price}>{numberWithCommas(props.item.price)} تومان </p>
        </div>
    );
};

export default ProductBox;