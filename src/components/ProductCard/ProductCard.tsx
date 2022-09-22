import { ReactComponent as Heart } from "assets/img/heart.svg";
import { ProductItem } from "utyls/types";
import "./ProductCard.scss";

interface IProductCardProps {
  item: ProductItem;
  layout: string;
  favourite: boolean;
  addToFavourite: (id: number) => void;
}

const ProductCard: React.FC<IProductCardProps> = ({
  item,
  layout,
  favourite,
  addToFavourite,
}) => {
  const { id, name, price, image } = item;
  return (
    <div className={`productCard ${layout}`}>
      <div className={`productCard__imgBox_${layout}`}>
        <img
          src={image}
          alt="clothes"
          className={`productCard__img_${layout}`}
        />
      </div>
      <div className="productCard__info">
        <div className="productCard__rowWrapper">
          <p className="productCard__name">{name}</p>
          <button className="productCard__addToFavButton">
            <Heart
              fill={`${favourite ? "#000" : "#fff"}`}
              onClick={() => addToFavourite(id)}
            />
          </button>
        </div>
        <div className="productCard__price">{price} грн</div>
      </div>
    </div>
  );
};

export default ProductCard;
