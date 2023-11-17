import React from "react";
import styles from "./BtnPrimary.module.scss";

const BtnPrimary = ({ text, type, disabled, onClick }) => {
  return (
    <button className={styles.btn} {...{ type, disabled, onClick }}>
      {text}
    </button>
  );
};

export default BtnPrimary;
