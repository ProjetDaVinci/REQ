import { Board, Header } from "..";

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <div className="global-wrapper">
      <Board />
      {/* <Header /> */}
      <div className="content-wrapper">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
