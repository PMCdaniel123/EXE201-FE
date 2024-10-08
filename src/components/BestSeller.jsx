import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    setBestSeller(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center text-6xl py-10">
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
          veritatis? Ratione, laboriosam quia in aut nisi, alias earum a
          perspiciatis, ipsum provident animi? Incidunt assumenda accusantium,
          corporis quos saepe libero?
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item.id}
            image={item.images}
            name={item.product_name}
            price={item.price}
          />
        ))}
      </div>

      <div className="text-center mt-8">
        <Link to="/collection">
          <button className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white text-xs sm:text-sm px-5 py-3 sm:px-10 sm:py-4">
            SEE MORE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BestSeller;
