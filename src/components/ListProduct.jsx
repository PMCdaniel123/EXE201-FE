import { useContext, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";

const ListProduct = () => {
  const { products, currency } = useContext(ShopContext);
  const { isAvailable, setIsAvailable } = useState(true);

  return (
    <div className="flex flex-col w-full">
      <div className="text-base sm:text-2xl mb-4">
        <Title text1={"MY PRODUCTS"} text2={"LIST"} />
      </div>

      <div>
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-gray-400 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start text-sm gap-6">
              <img
                src={`/src/assets/frontend_assets/${item.images[0].image_url}.png`}
                alt=""
                className="w-16 sm:w-20"
              />
              <div>
                <p className="sm:text-base font-medium">{item.product_name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>
                  <p>Size: M</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p
                  className={`min-w-2 h-2 rounded-full ${
                    !isAvailable ? "bg-green-500" : "bg-red-500"
                  }`}
                ></p>
                <p className="text-sm md:text-base">
                  {!isAvailable ? "Available" : "Unavailable"}
                </p>
              </div>
              <div className="flex gap-4">
                <button className="border border-gray-400 px-4 py-2 text-sm font-medium rounded-sm hover:bg-green-500 hover:text-white">
                  Update
                </button>
                <button className="border border-gray-400 px-4 py-2 text-sm font-medium rounded-sm hover:bg-red-500 hover:text-white">
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
