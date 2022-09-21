import { productCategories } from "utyls/constants";
import "./SideBar.scss";
interface ISideBarProps {
  chosenCategory: string;
  setChosenCategory: React.Dispatch<React.SetStateAction<string>>;
}

const SideBar: React.FC<ISideBarProps> = ({
  chosenCategory,
  setChosenCategory,
}) => {
  return (
    <div className="sideBar">
      <div className="sideBar__buttonList">
        <div>
          <button
            onClick={() => setChosenCategory("")}
            className={`sideBar__button${chosenCategory ? "" : "_bold"}`}
          >
            Переглянути все
          </button>
        </div>
        {productCategories.map(({ name, key }) => (
          <div className="sideBar__buttonBox">
            <button
              className={`sideBar__button${
                key === chosenCategory ? "_bold" : ""
              }`}
              key={key}
              onClick={() => setChosenCategory(key)}
            >
              {name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
