import React, {useState} from 'react';
import {FaRegUser} from "react-icons/all";
import styles from "./Header.module.scss";
import {FiShoppingCart} from "react-icons/all";
import {Link} from "react-router-dom";


const Login = () => {

    const [rotate, setRotate] = useState(false);

    const handleClick = () => {
        setRotate(!rotate)
    };

    return (<>
            <button
                className={styles.login}
                onClick={handleClick}
                style={rotate ? {transform: 'rotate(45deg)', transition: '1s'} : {
                    transform: 'rotate(0deg)',
                    transition: '1s'
                }}
            >
                <FaRegUser className={styles.person} size="1.5rem"/>ورود یا ثبت نام
            </button>

            <div className={styles.divider}/>


        </>
    );
};

export default Login;