// import columnIcon from "assets/img/columnsIcon.svg";
import { ReactComponent as ColumnsIcon } from "assets/img/columnsIcon.svg";
import { ReactComponent as GridIcon } from "assets/img/gridIcon.svg";
import { AppLayout } from "components";
import "./HomePage.scss";

const HomePage: React.FC = () => {
  return (
    <AppLayout>
      <div className="content">
        <div className="content__controlPanel">
          <div className="buttonsBox">
            <button>
              <ColumnsIcon color="" />
            </button>
            <button>
              <GridIcon color="" />
            </button>
          </div>
        </div>
        <div className="content__wrapper">
          <div className="content__sidebar"></div>
          <div className="content__items"></div>
        </div>
      </div>
    </AppLayout>
  );
};

export default HomePage;
