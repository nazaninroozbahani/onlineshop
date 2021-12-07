import React from 'react';
import styles from './Header.module.scss'
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <Link to={"/"}>
            <img src="/images/logo.jpg" className={styles.logo}/>
        </Link>
    );
};

export default Logo;