import React from 'react';
import styles from "./Cart.module.scss";
import {useSelector} from "react-redux";
import EmptyCart from "./empty/EmptyCart";
import FullCart from "./full/FullCart";

const Cart = () => {

    const cartList = useSelector(state => state.cart.cartList)

    const getTotalCount = () => {
      let total =0;
      cartList.map(item => {
          total = total + item.count
      });
      return total;
    };

    return (
        <div className={styles.root}>
            <div className="d-flex align-items-center">
                <h5 className="mb-0 text-danger">سبد خرید</h5>
                <span className="badge rounded-pill bg-danger mx-2">
                    {getTotalCount()}
                </span>
            </div>
            {
                cartList.length ?
                    <FullCart/> :
                    <EmptyCart/>
            }
        </div>
    );
};

export default Cart;