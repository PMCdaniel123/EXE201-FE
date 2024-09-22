import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  console.log({ id, image, name, price });

  return (
    <Link
      to={`/product/${id}`}
      className="group text-gray-700 cursor-pointer hover:shadow-lg hover:scale-105"
    >
      <div className="overflow-hidden relative">
        <img
          src={`src/assets/frontend_assets/${image[0].image_url}.png`}
          alt=""
          className="group-hover:scale-110 transition ease-in-out "
        />
        <div className="absolute text-white top-2 left-2 p-2 text-[8px] bg-gradient-to-br from-[#4A5942] to-[#9d905a] rounded-2xl">
          20% OFF
        </div>
      </div>
      <p className="pt-3 pb-1 text-sm px-2">{name}</p>
      <div className="flex items-center gap-2 px-2 pb-2">
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
