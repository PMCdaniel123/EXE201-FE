import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={image[0]}
          alt=""
          className="hover:scale-110 transition ease-in-out "
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <div className="flex items-center gap-2">
        <span className="text-base font-bold text-black">
          {currency}
          {price}
        </span>
        <span className="text-sm text-gray-400 line-through decoration-[#FF0909]">
          {currency}
          {price * 1.2}
        </span>
      </div>
    </Link>
  );
};

export default ProductItem;
