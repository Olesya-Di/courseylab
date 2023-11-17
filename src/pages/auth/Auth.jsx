import React, { useState } from "react";
import styles from "./Auth.module.scss";
import { Form, Title, TitleSecondary } from "../../components";

const Auth = () => {
  const [isValid, setIsValid] = useState(false);

  return (
    <>
      {!isValid ? (
        <Form setIsValid={setIsValid} />
      ) : (
        <article className={styles.blockBackground}>
          <section className={styles.blockBackground__title}>
            <Title text="congratulations!" />
            <TitleSecondary text="you have been accepted for an internship" />
          </section>
        </article>
      )}
    </>
  );
};

export default Auth;
