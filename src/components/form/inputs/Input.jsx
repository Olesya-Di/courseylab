import React from "react";
import styles from "./Input.module.scss";
import { ErrorBlock } from "../../generic";

const Input = ({
  id,
  name,
  type,
  register,
  errors,
  pattern,
  labelText,
  autoComplete,
}) => {
  return (
    <article className={styles.container}>
      <section className={styles.inputBlock}>
        <input
          className={styles.inputBlock__input}
          {...{
            id,
            name,
            type,
            pattern,
            autoComplete,
          }}
          {...register}
          placeholder=" "
        />
        <label htmlFor={name} className={styles.inputBlock__label}>
          {labelText}
        </label>
      </section>
      <ErrorBlock errors={errors} name={name} />
    </article>
  );
};

export default Input;
