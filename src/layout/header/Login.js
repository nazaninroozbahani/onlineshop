import React from 'react';
import {FaRegUser} from "react-icons/all";
import styles from "./Header.module.scss";


const Login = () => {


    const handleClick = () => {
       
    };

    return (<>
            <button
                className={styles.login}
                onClick={handleClick}
            
            >
                <FaRegUser className={styles.person} size="1.5rem"/>ورود یا ثبت نام
            </button>

            <div className={styles.divider}/>


        </>
    );
};

export default Login;