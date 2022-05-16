import React from 'react';
import styles from "./Header.module.scss";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import { FiShoppingCart } from 'react-icons/fi';

const CartIcon = () => {

    const cartList = useSelector(state => state.cart.cartList);

    const getTotalCount = () => {
        let total =0;
        cartList.map(item => {
            total = total + item.count
        });
        return total;
    };

    return (
        <Link to={"/cart"} style={{position: 'relative'}}>
            <FiShoppingCart size="1.5rem" className={styles.shoppingCart}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {
                    getTotalCount()
                }
            </span>
        </Link>
    );
};

export default CartIcon;