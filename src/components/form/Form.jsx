import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Form.module.scss";
import { BtnPrimary } from "../generic";
import Input from "./inputs/Input";
import fetchMock from "fetch-mock";

const Form = ({ setIsValid }) => {
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  fetchMock.config.overwriteRoutes = true;
  const onSubmit = async (data) => {
    fetchMock.post('http://httpbin.org/post', {
      status: 200,
      body: data
    });
  
    return await fetch('http://httpbin.org/post', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.status === 200) {
        setIsValid(true); 
      }
    });
  }

  // const onSubmit = (data) => {
  //   fetch("http://httpbin.org/post", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw new Error("Network response was not ok.");
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       reset();
  //       setIsValid(true);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

  const handleClearErrors = () => {
    clearErrors();
    reset();
  };

  return (
    <form noValidate className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        labelText="Email"
        htmlFor="email"
        name="email"
        type="email"
        id="email"
        register={register("email", {
          id: "email",
          required: {
            value: true,
            message: "enter the email",
          },
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "check the email, ivan@mail.ru",
          },
        })}
        errors={errors}
        autoComplete="off"
      />

      <Input
        labelText="Password"
        htmlFor="password"
        name="password"
        type="password"
        id="password"
        register={register("password", {
          id: "password",
          required: {
            value: true,
            message: "enter the password",
          },
          minLength: {
            value: 7,
            message: "at least seven characters",
          },
        })}
        errors={errors}
      />

      <section className={styles.btnsBlock}>
        <BtnPrimary text="go" />
        <BtnPrimary text="clear" type="button" onClick={handleClearErrors} />
      </section>
    </form>
  );
};

export default Form;
