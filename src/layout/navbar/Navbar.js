import React, {useEffect, useState} from 'react';
import styles from './Navbar.module.scss'
import {NavLink} from "react-router-dom";
import {AiOutlineLaptop} from "react-icons/all";

const Navbar = () => {

    const [hidden, setHidden] = useState(false);
    const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });


    const handleScroll = () => {

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;

        setPrevScrollpos(currentScrollPos);
        setHidden(!visible);
    };

    return (
        <nav className={styles.nav}
             // style={hidden ? {top: -50, zIndex: -5} : {top: 0}}
             style={hidden ? { transform: 'translateY(-100%)', zIndex: -5} : {}}
        >
            <ul
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <li>
                    <NavLink to={"/laptops"} activeClassName={styles.active}>
                        <AiOutlineLaptop className={styles.icons}/>
                        لپ تاپ
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"#"}>تخفیف ها</NavLink>
                </li>
                <li>
                    <NavLink to={"#"}>آخرین محصولات</NavLink>
                </li>
            </ul>
        </nav>
    )
        ;
};

export default Navbar;