import { Footer, Header } from "components";
import "./AppLayout.scss";
interface IAppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<IAppLayoutProps> = ({ children }) => {
  return (
    <div className="pageContainer">
      <div className="container">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
