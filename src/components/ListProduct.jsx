import { useContext, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";

const ListProduct = () => {
  const { products, currency } = useContext(ShopContext);
  const { instock, setInstock } = useState(true);

  return (
    <div className="flex flex-col">
      <div className="text-base sm:text-2xl mb-4">
        <Title text1={"MY PRODUCT"} text2={"LIST"} />
      </div>

      <div>
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start text-sm gap-6">
              <img src={item.image[0]} alt="" className="w-16 sm:w-20" />
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p className="mt-2">
                  Date: <span className="text-gray-400">25, Jul 2024</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p
                  className={`min-w-2 h-2 rounded-full ${
                    !instock ? "bg-green-500" : "bg-red-500"
                  }`}
                ></p>
                <p className="text-sm md:text-base">
                  {!instock ? "In Stock" : "Out of Stock"}
                </p>
              </div>
              <div className="flex gap-4">
                <button className="border px-4 py-2 text-sm font-medium rounded-sm hover:bg-green-500 hover:text-white">
                  Update
                </button>
                <button className="border px-4 py-2 text-sm font-medium rounded-sm hover:bg-red-500 hover:text-white">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
