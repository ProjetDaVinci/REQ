import { Board, Header, FilterSection } from "..";

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <div className="global-wrapper">
      <Board />
      <div className="content-wrapper">
        <Header />
        <FilterSection />
        {children}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
