import Link from "next/link";
import { Home, Settings, User, Notification } from "../../icons";
import { Search } from "../../UI";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.head}>
      <div className={styles.section_column}>
        <div className={styles.home}>
          <Home />
          <p> / Заявки</p>
        </div>
        <div className={styles.section_text}>
          <p>Заявки</p>
        </div>
      </div>
      <div className={styles.head_additionaly}>
        <Search />
        <User />
        <Settings />
        <Notification />
      </div>
    </header>
  );
};

export default Header;
