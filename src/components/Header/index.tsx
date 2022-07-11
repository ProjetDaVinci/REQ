import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.head}>
      <nav className={styles.navigation}>
        <Link href="/">Главная</Link>
        <Link href="/aforism/authors">Авторы</Link>
        <Link href="/aforism/all">All</Link>
        <Link href="/aforism/new">Новые</Link>
        <Link href="/aforism/popular">Популярные</Link>
        <Link href="/aforism/recent">Недавние</Link>
      </nav>
      <hr />
    </header>
  );
};

export default Header;
