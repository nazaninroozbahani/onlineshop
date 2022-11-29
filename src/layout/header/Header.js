import CartIcon from "./CartIcon";
import Login from "./Login";
import Logo from "./Logo";
import React from 'react';
import Search from "./HeaderSearch";
import styles from "./Header.module.scss"

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
