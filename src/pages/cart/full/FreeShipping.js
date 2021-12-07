import React from 'react';
import styles from "./../Cart.module.scss";


const FreeShipping = () => {
    return (
        <div className={`card ${styles.free}`}>
            <div className="d-flex flex-column justify-content-around">
                <p style={{fontWeight : 'bold'}}>ارسال رایگان سفارش</p>
                <p>سفارش های بالای 300 هزار تومان</p>
            </div>
            <img src={"/images/free.png"}/>
        </div>
    );
};

export default FreeShipping;