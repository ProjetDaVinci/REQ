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

const navigation = [
  { id: 1, title: "Заявки", path: "/", icons: <DashboardIcon /> },
  { id: 2, title: "Мои каналы", path: "/mychanels", icons: <Wifi /> },
  { id: 3, title: "Общие каналы", path: "/chanels", icons: <Ethernet /> },
  { id: 4, title: "Ключевики", path: "/keywords", icons: <Key /> },
  { id: 5, title: "Тикеты", path: "/tikets", icons: <Calendar /> },
  { id: 6, title: "Настройки", path: "/settings", icons: <Settings /> },
];

const Board = () => {
  const { pathname } = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.container_logo}>
        <Logo />
      </div>
      <div className={styles.content_wrapper}>
        {navigation.map((item, key) => (
          <Link key={item.id} href={item.path}>
            {/* <DashboardIcon />  */}
            <a
              className={
                pathname === item.path
                  ? styles.content_item_active
                  : styles.content_item_wrapper
              }
            >
              {item.icons}
              <span>{item.title}</span>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Board;
