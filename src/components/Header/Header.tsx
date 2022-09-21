import "./Header.scss";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="headerWrapper container">
        <p className="logo">Shop</p>
        <div className="buttons">
          <div className="buttons__wrapper">
            <div>
              <button>grd</button>
              <button>col</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
