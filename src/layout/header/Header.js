import CartIcon from "./CartIcon";
import Login from "./Login";
import Logo from "./Logo";
import React from 'react';
import Searchhh from "./HeaderSearch";
import styles from "./Header.module.scss"

const Header = () => {

    return (
        <div className={styles.header}>
            <Logo/>
            <Searchhh/>
            <Login/>
            <CartIcon />
        </div>
    );
};

export default Header;