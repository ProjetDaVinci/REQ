import Link from "next/link";
import { useRouter } from "next/router";

import { navigation } from "../../constants";
import { Home, Settings, User, Notification, Menu, Exit } from "../../icons";
import { Search } from "../../UI";
import styles from "./Header.module.css";
// import { signIn, signOut, useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { actions, selectors } from "../../redux/ducks";
import { useState } from "react";

{
  /* <Link href="/">
  <button
    type="submit"
    // disabled={submitting}
    className={styles.auth_button}
    onClick={() => signIn()}
  >
    Войти
  </button>
</Link>; */
}

const Header = () => {
  const { pathname } = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const headers = navigation.find((item) => item.path === pathname);

  const signOut = () => {
    dispatch(actions.auth.signOut());
  };

  // const { data: session, status } = useSession();
  // console.log("session => ", session);
  // console.log("status => ", status);

  return (
    <nav
      className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
      id="navbarBlur"
      data-scroll="true"
    >
      <div className="container-fluid py-1 px-3">
        <div></div>
        <div
          className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4 justify-content-end"
          id="navbar"
        >
          <ul className="navbar-nav  justify-content-end">
            <li className="nav-item  d-flex align-items-center">
              <a className="nav-link text-body p-0">
                <Exit onClick={() => signOut()} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
