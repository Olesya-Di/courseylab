import React from "react";
import styles from "./TitleSecondary.module.scss";

const TitleSecondary = ({ text }) => {
  return <h2 className={styles.h2}>{text}</h2>;
};

export default TitleSecondary;
