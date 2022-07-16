import { Board, Header, FilterSection } from "..";
import styles from "./Layout.module.css";

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <Board />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Header />
        <div className="container-fluid py-4">
          <FilterSection />
          <div className={styles.content_row}>
            <div className="row">{children}</div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
