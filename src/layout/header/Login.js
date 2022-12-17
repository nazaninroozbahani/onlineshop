import React, { useState } from "react";

import styles from "./Header.module.scss";
import { FaRegUser } from "react-icons/fa";

const Login = () => {
 
  return (
    <>
      <button className={styles.login}>
        <FaRegUser className={styles.person} size="1.5rem" />
        ورود یا ثبت نام
      </button>
      <div className={styles.divider} />
      <LoginModal show={show} setShow={setShow} />
    </>
  );
};

export default Login;
