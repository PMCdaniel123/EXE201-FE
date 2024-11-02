import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";
import { Spin } from "antd";

const LatestCollection = () => {
  const { products, loading } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 5));
  }, [products]);

  return loading ? (
    <Spin />
  ) : (
    <div className="my-20 lg:my-40 px-6 lg:px-10">
      <div className="text-center py-8 text-2xl md:text-4xl lg:text-6xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-400 italic">
          Step into the season with our latest collection, where timeless
          elegance meets modern style. Discover pieces designed to elevate your
          look, from effortlessly chic staples to bold statement items. Embrace
          the beauty of fashion redefined—crafted with care, curated for you.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
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

export default LatestCollection;
