import React from 'react';
import styles from "./../Cart.module.scss";
import FreeShipping from "./FreeShipping";

const AsideBar = () => {
    return (
        <div className={styles.fullAside}>
            <div className="card p-2">
                <div className="d-flex justify-content-between my-2">
                    <p>جمع سبد خرید</p>
                    <p>۸۲,۰۹۹,۹۹۰ تومان</p>
                </div>
                <hr className="m-2"/>
                <p>هزینه‌ی ارسال در ادامه بر اساس آدرس، زمان و نحوه‌ی ارسال انتخابی شما‌ محاسبه و به این مبلغ اضافه
                    خواهد شد</p>
                <button className={styles.addToCardBtn}>ادامه فرآیند خرید</button>
            </div>
            <p className={styles.desc}>کالاهای موجود در سبد شما ثبت و رزرو نشده‌اند، برای ثبت سفارش مراحل بعدی را تکمیل
                کنید.
            </p>
            <FreeShipping/>
        </div>

    );
};

export default AsideBar;