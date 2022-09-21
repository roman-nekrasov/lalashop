// import columnIcon from "assets/img/columnsIcon.svg";
import { ReactComponent as ColumnsIcon } from "assets/img/columnsIcon.svg";
import { ReactComponent as GridIcon } from "assets/img/gridIcon.svg";
import { AppLayout, ProductCard, SideBar } from "components";
import { useData } from "hooks";
import { useState } from "react";
import { API_URL } from "utyls/constants";
import { ProductItem } from "utyls/types";
import "./HomePage.scss";

const HomePage: React.FC = () => {
  const [chosenCategory, setChosenCategory] = useState<string>("");

  const [data, isLoading, isError] = useData<Array<ProductItem>>(API_URL);
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
          <div className="content__items">
            {isLoading ? (
              <div>Loading...</div>
            ) : isError ? (
              <div>Something went wrong...</div>
            ) : (
              data &&
              data.map((item) => <ProductCard key={item.id} item={item} />)
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default HomePage;
