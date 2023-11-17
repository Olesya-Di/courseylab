import React from "react";
import styles from "./ErrorBlock.module.scss";

const ErrorBlock = ({ name, errors }) => {
  return (
    <>
      {errors?.[name] && (
        <section className={styles.errorMessage}>
          {errors?.[name]?.message || "Error!"}
        </section>
      )}
    </>
  );
};

export default ErrorBlock;
