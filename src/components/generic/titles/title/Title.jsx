import React from "react";
import styles from "./Title.module.scss";

const Title = ({ text }) => {
  return <h1 className={styles.h1}>{text}</h1>;
};

export default Title;
