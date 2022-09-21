import { ReactComponent as Heart } from "assets/img/heart.svg";
import { ProductItem } from "utyls/types";

interface IProductCardProps {
  item: ProductItem;
}

const ProductCard: React.FC<IProductCardProps> = ({ item }) => {
  const { id, name, price, image } = item;
  return (
    <div className="productCard">
      <div className="productCard__img">
        <img src={image} alt="clothes" />
      </div>
      <div className="productCard__info">
        <div className="productCard__rowWrapper">
          <p className="productCard__name">{name}</p>
          <button className="productCard__addToFavButton">
            <Heart />
          </button>
        </div>
        <div className="productCard__price">{price} грн</div>
      </div>
    </div>
  );
};

export default ProductCard;
