// import columnIcon from "assets/img/columnsIcon.svg";
import { ReactComponent as ColumnsIcon } from "assets/img/columnsIcon.svg";
import { ReactComponent as GridIcon } from "assets/img/gridIcon.svg";
import { AppLayout, ProductCard, SideBar } from "components";
import { useData } from "hooks";
import { useCallback, useState } from "react";
import { changeLayout } from "utyls/helpers";
import { ProductItem } from "utyls/types";
import "./HomePage.scss";

const HomePage: React.FC = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const layout = urlParams.get("layout") || "grid";

  const [chosenCategory, setChosenCategory] = useState<string>("");
  const [, setRerender] = useState({});

  const forceRerender = useCallback(() => {
    setRerender({});
  }, []);

  const [data, isLoading, isError] = useData<Array<ProductItem>>("");
  // API_URL
  return (
    <AppLayout>
      <div className="content">
        <div className="content__controlPanel">
          <div className="buttonsBox">
            <button
              onClick={() => {
                changeLayout("columns");
                forceRerender();
              }}
            >
              <ColumnsIcon
                color={`${layout === "columns" ? "#000" : "#666"}`}
              />
            </button>
            <button
              onClick={() => {
                changeLayout("grid");
                forceRerender();
              }}
            >
              <GridIcon color={`${layout === "grid" ? "#000" : "#666"}`} />
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
              data.map((item) => (
                <ProductCard key={item.id} item={item} layout={layout} />
              ))
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default HomePage;
