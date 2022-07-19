import Link from "next/link";
import { useRouter } from "next/router";
import {
  Calendar,
  DashboardIcon,
  Ethernet,
  Key,
  Logo,
  Settings,
  Wifi,
} from "../../icons";
import styles from "./Board.module.css";
import { ContainerWrapper } from "./styles";
import { navigation } from "../../constants";

// import withStyles from "@material-ui/core/styles/withStyles";
// import Icon from "@material-ui/core/Icon";

const Board = () => {
  const { pathname } = useRouter();

  return (
    <aside
      className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-sidebar"
      id="sidenav-main"
    >
      <div className="sidenav-header">
        <i
          className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
          aria-hidden="true"
          id="iconSidenav"
        ></i>
        <a className="navbar-brand m-0" href="/" target="_blank">
          <Logo />
        </a>
      </div>
      <hr className="horizontal light mt-0 mb-2" />
      <div
        className="collapse navbar-collapse  w-auto "
        id="sidenav-collapse-main"
      >
        <ul className="navbar-nav">
          {navigation.map((item, key) => (
            <Link key={item.id} href={item.path}>
              <li className="nav-item" key={key}>
                <a
                  className={`nav-link text-white ${
                    pathname === item.path ? "bg-gradient-primary" : ""
                  }`}
                >
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10"> {item.icons}</i>
                  </div>
                  <span className="nav-link-text ms-1">{item.title}</span>
                </a>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Board;
