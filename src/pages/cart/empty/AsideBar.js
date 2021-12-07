import React from 'react';
import styles from "../Cart.module.scss";
import {BiLogIn} from "react-icons/all";
import {Link} from "react-router-dom";

const AsideBar = () => {
    return (
        <div className={styles.emptyAside}>
            <Link to={"/login"}>
                <div className="card p-2">
                    <div className="d-flex justify-content-between my-2">
                        <BiLogIn/>
                        <div className="px-3">
                            <p className={styles.title}>ورود به حساب کاربری</p>
                            <p>
                                برای مشاهده محصولاتی که پیشتر به سبد خود اضافه کرده اید لطفا وارد شوید.
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>

    );
};

export default AsideBar;