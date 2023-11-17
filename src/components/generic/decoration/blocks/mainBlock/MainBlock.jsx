import React from "react";
import styles from "./MainBlock.module.scss";

const MainBlock = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default MainBlock;
