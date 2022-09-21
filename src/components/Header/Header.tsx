import "./Header.scss";

const Header: React.FC = () => {
  return (
    <div className="headerWrapper">
      <div>
        <p className="logo">Shop</p>
      </div>
      <div className="buttons">
        <div className="buttons__wrapper">
          <div>
            <button>grd</button>
            <button>col</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
