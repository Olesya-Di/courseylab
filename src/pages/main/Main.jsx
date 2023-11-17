import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Main.module.scss";
import { BtnPrimary, Title } from "../../components";

const Main = () => {
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate("/auth");
  };

  return (
    <article className={styles.mainBlock}>
      <Title text="welcome to intensive programming" />
      <BtnPrimary text="log in to IT" onClick={handleLogIn} />
    </article>
  );
};

export default Main;
