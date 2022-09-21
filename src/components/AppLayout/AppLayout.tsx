import { Footer, Header } from "components";
import "./AppLayout.scss";
interface IAppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<IAppLayoutProps> = ({ children }) => {
  return (
    <div className="root">
      <Header />
      <div className="pageContainer">
        <div className="container">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
