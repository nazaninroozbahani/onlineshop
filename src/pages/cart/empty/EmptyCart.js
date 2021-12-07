import React from 'react';
import styles from "./../Cart.module.scss";
import AsideBar from "./AsideBar";
import {Link} from "react-router-dom";

const EmptyCart = () => {
    return (
        <div className={`${styles.empty} container-fluid my-3`}>
            <div className="row">
                <div className="col-9">
                    <div className="card h-100">
                        <div className={styles.emptyMain}>
                            <img src={"/images/empty-cart.png"} alt="empty cart"/>
                            <p className={styles.title}>سبد خرید شما خالی است !</p>
                            <p className={styles.text}>می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید</p>
                            <div className="w-100 d-flex justify-content-center">
                                <Link to={"/laptops"}>لپ تاپ ها</Link>
                                <div className={styles.divider}/>
                                <Link to={"/laptops"}>آخرین محصولات</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <AsideBar/>
                </div>
            </div>
        </div>
    );
};

export default EmptyCart;