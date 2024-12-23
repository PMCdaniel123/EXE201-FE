import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price, sale }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link
      to={`/product/${id}`}
      className="group text-gray-700 cursor-pointer hover:shadow-lg hover:scale-105"
    >
      <div className="overflow-hidden relative">
        <img
          src={image[0]?.image_url}
          alt=""
          className="group-hover:scale-110 transition ease-in-out h-72 w-full object-cover"
        />
        {sale && (
          <div className="absolute text-white top-2 left-2 py-2 px-3 text-[8px] bg-gradient-to-br from-[#4A5942] to-[#9d905a] rounded-2xl">
            {Number(sale) ? Number(sale).toFixed(0) : "0"}% OFF
          </div>
        )}
      </div>
      <p className="pt-3 pb-1 text-sm px-2 truncate" title={name}>
        {name}
      </p>
      {sale ? (
        <div className="flex items-center gap-2 px-2 pb-2">
          <span className="text-base font-bold text-black">
            {currency}
            {price}
          </span>
          <span className="text-sm text-gray-400 line-through decoration-[#FF0909]">
            {currency}
            {(price * ((100 + Number(sale)) / 100)).toFixed(2)}
          </span>
        </div>
      ) : (
        <div className="flex items-center gap-2 px-2 pb-2">
          <span className="text-base font-bold text-black">
            {currency}
            {price}
          </span>
        </div>
      )}
    </Link>
  );
};

export default ProductItem;
