import Link from "next/link";
import { useRouter } from "next/router";
import { Home, Settings, User, Notification } from "../../icons";
import { Search } from "../../UI";
import styles from "./Header.module.css";

const navigation = [
  { id: 1, title: "Заявки", path: "/" },
  { id: 2, title: "Мои каналы", path: "/mychanels" },
  { id: 3, title: "Общие каналы", path: "/chanels" },
  { id: 4, title: "Ключевики", path: "/keywords" },
  { id: 5, title: "Тикеты", path: "/tikets" },
  { id: 6, title: "Настройки", path: "/settings" },
];

const Header = () => {
  const { pathname } = useRouter();

  const headers = navigation.find((item) => item.path === pathname);

  return (
    <header className={styles.head}>
      <div className={styles.section_column}>
        <div className={styles.home}>
          <Home />
          <p> / {headers?.title}</p>
        </div>
        <div className={styles.section_text}>
          <p>{headers?.title}</p>
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
