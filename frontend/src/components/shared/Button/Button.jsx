import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, onclick }) => {
  return (
    <button onClick={onclick} className={styles.btn}>
      <span>{text}</span>
      <img className={styles.arrow} src="images/right-arrow.png" alt="" />
    </button>
  );
};

export default Button;
