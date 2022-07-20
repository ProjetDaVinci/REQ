import React, { useState } from "react";
import { Field, Form } from "react-final-form";
import Switch from "react-switch";
import { Facebook, GitHub, Google } from "../../icons";
import styles from "./Auth.module.css";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { actions, selectors, thunks } from "../../redux/ducks";
import { IAuthData, IAuthReg } from "../../redux/ducks/auth/types";
import { AppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const AuthComponent = () => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const resServer = useSelector(selectors.auth.resServer);
  // console.log("resServer2", resServer);

  const onSignin = (user: IAuthData) => {
    const { password_hash, login } = user;

    if (login === "" && password_hash === "") {
      window.alert("Заполните необходимые поля");
    } else {
      dispatch(thunks.auth.login(user));
      router.push("/");
      if (resServer.status === false) {
        window.alert(resServer.message);

        console.log("resServer", resServer);
      }
    }
  };

  const onReg = (infoReg: IAuthReg) => {
    const { name, login, password_hash } = infoReg;

    if (login === "" && password_hash === "" && name === "") {
      window.alert("Заполните необходимые поля");
    } else {
      console.log("infoReg", infoReg);

      // dispatch(thunks.auth.registration(infoReg));
      console.log("resServer2", resServer);
    }
  };

  return (
    <div className="section">
      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className={`section pb-5 pt-5 pt-sm-2 text-center`}>
              <h6 className="mb-0 pb-3">
                <label
                  htmlFor="reg-log"
                  onClick={() => setChecked(false)}
                  className={checked === false ? "span_active" : ""}
                >
                  <span>Войти </span>
                </label>
                <label
                  htmlFor="reg-log"
                  id="reg-log"
                  onClick={() => setChecked(true)}
                  className={checked === true ? "span_active" : ""}
                >
                  <span>Зарегистрироваться </span>
                </label>
              </h6>
              <input
                className="checkbox"
                type="checkbox"
                id="reg-log"
                name="reg-log"
                checked={checked}
              />
              {/* <label htmlFor="reg-log"></label> */}
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className={`section text-center `}>
                        <h4 className="mb-4 pb-3 text-white text">Войти</h4>
                        <Form
                          onSubmit={onSignin}
                          render={({ handleSubmit, form }) => (
                            <form onSubmit={handleSubmit}>
                              <Field name="email">
                                {({ input, meta }) => (
                                  <div>
                                    <input
                                      {...input}
                                      type="Email"
                                      placeholder="Email"
                                      className={`${styles.form_input} mt-2`}
                                    />
                                    {meta.error && meta.touched && (
                                      <span>{meta.error}</span>
                                    )}
                                  </div>
                                )}
                              </Field>
                              <Field name="password">
                                {({ input, meta }) => (
                                  <div>
                                    <input
                                      {...input}
                                      type="password"
                                      placeholder="Пароль"
                                      className={`${styles.form_input} mt-2`}
                                    />
                                    {meta.error && meta.touched && (
                                      <span>{meta.error}</span>
                                    )}
                                  </div>
                                )}
                              </Field>
                              <button
                                type="submit"
                                // disabled={submitting}
                                className="btn mt-4 bg-gradient-primary"
                                onClick={handleSubmit}
                              >
                                Войти
                              </button>
                            </form>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="center-wrap">
                      <div className={`section text-center`}>
                        <h4 className="mb-4 pb-3 text-white text">
                          Зарегистрироваться
                        </h4>
                        <Form
                          onSubmit={onReg}
                          render={({ handleSubmit, form }) => (
                            <form onSubmit={handleSubmit}>
                              <Field name="name">
                                {({ input, meta }) => (
                                  <div>
                                    <input
                                      {...input}
                                      type="name"
                                      placeholder="Имя"
                                      className={`${styles.form_input}`}
                                    />
                                    {meta.error && meta.touched && (
                                      <span>{meta.error}</span>
                                    )}
                                  </div>
                                )}
                              </Field>
                              <Field name="email">
                                {({ input, meta }) => (
                                  <div>
                                    <input
                                      {...input}
                                      type="Email"
                                      placeholder="Email"
                                      className={`${styles.form_input}`}
                                    />
                                    {meta.error && meta.touched && (
                                      <span>{meta.error}</span>
                                    )}
                                  </div>
                                )}
                              </Field>
                              <Field name="password">
                                {({ input, meta }) => (
                                  <div>
                                    <input
                                      {...input}
                                      type="password"
                                      placeholder="Пароль"
                                      className={`${styles.form_input}`}
                                    />
                                    {meta.error && meta.touched && (
                                      <span>{meta.error}</span>
                                    )}
                                  </div>
                                )}
                              </Field>
                              <button
                                type="submit"
                                // disabled={submitting}
                                className="btn mt-4 bg-gradient-primary"
                                onClick={handleSubmit}
                              >
                                Зарегистрироваться
                              </button>
                            </form>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthComponent;
