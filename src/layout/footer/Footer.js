import React from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import styles from "./Footer.module.scss"


const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className={styles.footer}>
            <div className={styles.topBox}>
                <div className={styles.logoParent}>
                    <img src="/images/text-logo.jpeg" className={styles.logo}/>
                </div>
                <button className={styles.upBtn}
                    onClick={scrollToTop}
                >بازگشت به بالا<IoIosArrowUp className={styles.arrow}/></button>
            </div>

            <div className={styles.infoBox}>
                <p className={styles.info}>تلفن پشتیبانی:
                    ۶۱۹۲۰۰۰۰ - ۰۲۱
                </p>
                <div className={styles.divider}/>
                <p className={styles.info}>هفت روز هفته، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم.</p>

            </div>


            <div className={styles.copyrightBox}>
                <p className={styles.copyright}>
                     کلیه حقوق این سایت متعلق به فروشگاه آنلاین شاپ می‌باشد.
                </p>
            </div>
        </div>
    );
};

export default Footer;