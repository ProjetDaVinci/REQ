import React, { useState } from "react";
import { Field, Form } from "react-final-form";
import Switch from "react-switch";
import { Facebook, GitHub, Google } from "../../icons";
import styles from "./Auth.module.css";

const AuthComponent = () => {
  const [checked, setChecked] = useState(false);
  const onSubmit = () => {
    window.alert("hey");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content_wrapper}>
        <div className={styles.head_container}>
          <p className={styles.head_text}>Войти</p>
          <div className={styles.head_icons_container}>
            <Facebook />

            <GitHub />
            <Google />
          </div>
        </div>
        <div className={styles.form_container}>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form }) => (
              <form onSubmit={handleSubmit}>
                <Field name="email">
                  {({ input, meta }) => (
                    <div>
                      <input
                        {...input}
                        type="Email"
                        placeholder="Email"
                        className={styles.form_input}
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field name="password">
                  {({ input, meta }) => (
                    <div>
                      <input
                        {...input}
                        type="password"
                        placeholder="Current password"
                        className={styles.form_input}
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <div className={styles.row_container}>
                  <Switch
                    onChange={() => setChecked(!checked)}
                    checked={checked}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    activeBoxShadow="0 0 2px 3px #3bf"
                    handleDiameter={20}
                    height={15}
                    width={30}
                    boxShadow="0px 2px 6px rgba(0, 0, 0, 0.25)"
                  />
                  <p className={styles.switch_text}>Запомнить меня</p>
                </div>

                <div className={styles.auth_container}>
                  <button
                    type="submit"
                    // disabled={submitting}
                    className={styles.auth_button}
                  >
                    Войти
                  </button>

                  <div>
                    <p className={styles.switch_text}>
                      У вас нет аккаунта?{" "}
                      <a href="" className={styles.auth_href}>
                        Зарегистрироваться
                      </a>
                    </p>
                  </div>
                </div>
                {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
              </form>
            )}
          />
        </div>
      </div>
    </div>
  );
};
export default AuthComponent;
