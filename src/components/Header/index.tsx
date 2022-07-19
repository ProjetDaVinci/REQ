import Link from "next/link";
import { useRouter } from "next/router";

import { navigation } from "../../constants";
import { Home, Settings, User, Notification, Menu } from "../../icons";
import { Search } from "../../UI";
import styles from "./Header.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { actions } from "../../redux/ducks";
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
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li className="breadcrumb-item text-sm ">
              <Home style={{ marginTop: -3 }} />
            </li>
            <li
              className="breadcrumb-item text-sm active text-white"
              aria-current="page"
            >
              {headers?.title}
            </li>
          </ol>
          <h6 className="font-weight-bolder mb-0 text-white">
            {headers?.title}
          </h6>
        </nav>
        <Menu />
        <div
          className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4 justify-content-end"
          id="navbar"
        >
          <ul className="navbar-nav  justify-content-end">
            <li className="nav-item d-flex align-items-center">
              <a className="nav-link text-body font-weight-bold px-0">
                {/* <Link href="/api/auth/signout"> */}
                <User onClick={() => signOut()} />
                {/* </Link> */}
              </a>
            </li>
            <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
              <a className="nav-link text-body p-0" id="iconNavbarSidenav"></a>
            </li>
            <li className="nav-item px-3 d-flex align-items-center">
              <a className="nav-link text-body p-0">
                <Settings />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
