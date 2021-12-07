import React from 'react';
import Logo from "./Logo";
import Search from "./Search";
import Login from "./Login";
import styles from "./Header.module.scss"
import CartIcon from "./CartIcon";

const Header = () => {

    return (
        <div className={styles.header}>
            <Logo/>
            <Search/>
            <Login/>
            <CartIcon />
        </div>
    );
};

export default Header;