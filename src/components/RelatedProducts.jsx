import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category, subcategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter(
        (item) => subcategory === item.sub_category
      );

      setRelated(productsCopy.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-20 lg:px-10">
      <div className="text-center text-2xl md:text-3xl py-8">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-400 italic">
          You may also love these styles! Explore our curated selection of
          related products, designed to complement your unique look and elevate
          your wardrobe.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item, index) => (
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
    </div>
  );
};

export default RelatedProducts;
