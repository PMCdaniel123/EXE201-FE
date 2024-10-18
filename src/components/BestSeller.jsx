import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";
import { Spin } from "antd";

const BestSeller = () => {
  const { products, loading } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    setBestSeller(
      products.filter((item) => item.is_bestSeller === 1).slice(0, 5)
    );
  }, [products]);

  return loading ? (
    <Spin />
  ) : (
    <div className="my-40 px-10">
      <div className="text-center text-2xl md:text-4xl lg:text-6xl py-10">
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
          veritatis? Ratione, laboriosam quia in aut nisi, alias earum a
          perspiciatis, ipsum provident animi? Incidunt assumenda accusantium,
          corporis quos saepe libero?
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item.id}
            image={item.images}
            name={item.product_name}
            price={item.price}
            sale={item.sale}
          />
        ))}
      </div>

      <div className="text-center mt-8">
        <Link to="/collection">
          <button className="max-sm:w-full bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white text-xs sm:text-sm px-5 py-3 sm:px-10 sm:py-4">
            SEE MORE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BestSeller;
