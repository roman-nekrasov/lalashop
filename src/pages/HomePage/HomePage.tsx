// import columnIcon from "assets/img/columnsIcon.svg";
import { ReactComponent as ColumnsIcon } from "assets/img/columnsIcon.svg";
import { ReactComponent as GridIcon } from "assets/img/gridIcon.svg";
import { AppLayout, SideBar } from "components";
import { useState } from "react";
import "./HomePage.scss";

const HomePage: React.FC = () => {
  const [chosenCategory, setChosenCategory] = useState<string>("");
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
          <div className="content__sidebar">
            <SideBar
              chosenCategory={chosenCategory}
              setChosenCategory={setChosenCategory}
            />
          </div>
          <div className="content__items"></div>
        </div>
      </div>
    </AppLayout>
  );
};

export default HomePage;
