import {
  Calendar,
  DashboardIcon,
  Ethernet,
  Key,
  Settings,
  Wifi,
} from "../icons";

export const navigation = [
  { id: 1, title: "Заявки", path: "/", icons: <DashboardIcon /> },
  { id: 2, title: "Мои каналы", path: "/mychanels", icons: <Wifi /> },
  { id: 3, title: "Общие каналы", path: "/chanels", icons: <Ethernet /> },
  { id: 4, title: "Ключевики", path: "/keywords", icons: <Key /> },
  { id: 5, title: "Тикеты", path: "/tikets", icons: <Calendar /> },
  { id: 6, title: "Настройки", path: "/settings", icons: <Settings /> },
];

export const API_URL = "";
export const SIGN_UP_URL = "auth/sign_up";
export const SIGN_IN_URL = "auth/sign_in";
export const emailPattern = "^(.+)@(.+)$";
