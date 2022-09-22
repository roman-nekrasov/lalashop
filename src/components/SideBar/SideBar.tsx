import { productCategories } from "utyls/constants";
import { changeUrlParams } from "utyls/helpers";
import "./SideBar.scss";
interface ISideBarProps {
  chosenCategory: string;
  setChosenCategory: React.Dispatch<React.SetStateAction<string>>;
  isFavouriteItemsExist: boolean;
}

const SideBar: React.FC<ISideBarProps> = ({
  chosenCategory,
  setChosenCategory,
  isFavouriteItemsExist,
}) => {
  return (
    <div className="sideBar">
      <div className="sideBar__buttonList">
        <div>
          <button
            onClick={() => {
              changeUrlParams("category", "all");
              setChosenCategory("");
            }}
            className={`sideBar__button${chosenCategory ? "" : "_bold"}`}
          >
            Переглянути все
          </button>
        </div>
        {productCategories.map(({ name, key }) => (
          <div className="sideBar__buttonBox" key={key}>
            <button
              className={`sideBar__button${
                key === chosenCategory ? "_bold" : ""
              }`}
              onClick={() => {
                setChosenCategory(key);
                changeUrlParams("category", key);
              }}
            >
              {name}
            </button>
          </div>
        ))}
        {isFavouriteItemsExist && (
          <div>
            <button
              onClick={() => {
                changeUrlParams("category", "favourite");
                setChosenCategory("favourite");
              }}
              className={`sideBar__button${
                chosenCategory === "favourite" ? "_bold" : ""
              }`}
            >
              Обрані товари
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
