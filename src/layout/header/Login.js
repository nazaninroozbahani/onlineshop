import React, { useState } from "react";

import LoginModal from "./LoginModal";
import styles from "./Header.module.scss";
import { FaRegUser } from "react-icons/fa";

const Login = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };

  return (
    <>
      <button className={styles.login} onClick={handleClick}>
        <FaRegUser className={styles.person} size="1.5rem" />
        ورود یا ثبت نام
      </button>
      <div className={styles.divider} />
      <LoginModal show={show} setShow={setShow} />
    </>
  );
};

export default Login;
