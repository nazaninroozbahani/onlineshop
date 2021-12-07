import React from 'react';
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import styles from './Layout.module.scss'
import Footer from "./footer/Footer";

const Layout = (props) => {
    return (
        <div className={styles.layout}>
            <Header/>
            <Navbar/>

            <div className={styles.content}>
                {props.children}
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;