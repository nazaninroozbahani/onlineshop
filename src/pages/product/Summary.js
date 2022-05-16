import React from 'react';
import styles from "./Product.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {addToCart, increaseCount} from "../../redux/cart/CartAction";
import {useNavigate} from "react-router-dom";
import {numberWithCommas} from "../../common/CommonFunctions";
import { MdEventAvailable, MdVerifiedUser } from 'react-icons/md';

const Summary = ({laptop}) => {

    const dispatch = useDispatch();

    const cartList = useSelector(state => state.cart.cartList);

    const history = useNavigate();

    const handleAddToCart = () => {
        const index = cartList.findIndex(c => c.id === laptop.id);
        if (index === -1)
            dispatch(addToCart({...laptop, count: 1}));
        else
            dispatch(increaseCount(laptop.id));
        history.push("/cart");
    };

    return (
        <div className={styles.summary}>
            <div className={styles.onlineShop}>
                <img src={"/favicon.ico"} className={styles.shopLogo}/>
                <p>آنلاین شاپ</p>
            </div>
            <div className={styles.guarantee}>
                <MdVerifiedUser className={styles.guaranteeLogo}/>
                <p>گارانتی ۲۴ ماهه</p>
            </div>
            <div className={styles.status}>
                <MdEventAvailable className={styles.statusLogo}/>
                <p>موجود در انبار آنلاین شاپ</p>
            </div>

            <div className={styles.price}>
                <p className={styles.number}>
                    {
                        laptop &&
                        numberWithCommas(laptop.price)
                        // laptop.price
                    }
                </p>
                <span className={styles.toman}>تومان</span>
            </div>
            <button className={styles.addToCardBtn} onClick={handleAddToCart}>افزودن به سبد خرید</button>
        </div>
    );
};

export default Summary;