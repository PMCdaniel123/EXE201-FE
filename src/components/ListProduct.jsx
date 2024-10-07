import { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import axiosInstance from "../utils/axiosInstance";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const ListProduct = () => {
  const { currency, userInfo, navigate } = useContext(ShopContext);
  const [myProducts, setMyProducts] = useState([]);
  const [isUpdated, setIsUpdated] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(myProducts);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const getMyProducts = async () => {
    if (!userInfo || userInfo === undefined) return;
    try {
      const response = await axiosInstance.get(
        `/designers/${userInfo?.designer?.id}`
      );
      setMyProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!userInfo?.designer?.id) return;
    getMyProducts();
  }, [userInfo]);

  const deleteProduct = async (id) => {
    try {
      await axiosInstance.delete(`/products/${id}`);
      getMyProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const updateProduct = async (data) => {
    const updateData = {
      ...data,
      designer_id: userInfo?.designer.id,
    };

    try {
      setLoading(true);
      await axiosInstance.put("/products", updateData);
      setLoading(false);
      getMyProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="text-base sm:text-2xl mb-4">
        <Title text1={"MY PRODUCTS"} text2={"LIST"} />
      </div>

      {myProducts?.length === 0 ? (
        <div>You have not created any products yet</div>
      ) : (
        <div>
          {myProducts.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <div className="w-full py-4 border-t border-gray-400 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start text-sm gap-6">
                  <img
                    src={item.images[0].image_url}
                    alt=""
                    className="w-16 sm:w-32 sm:h-32 object-cover"
                    onClick={() => navigate(`/product/${item.id}`)}
                  />
                  <div>
                    <Link
                      to={`/product/${item.id}`}
                      className="sm:text-xl font-medium"
                    >
                      {item.product_name}
                    </Link>
                    <div className="flex flex-col items-start gap-4 mt-2 text-base text-gray-700">
                      <p>
                        Price: {currency}
                        {item.price}
                      </p>
                      <p>
                        Sizes:{" "}
                        {item.sizes.map(
                          (s, index) =>
                            s.size +
                            (index !== item.sizes.length - 1 ? ", " : "")
                        )}
                      </p>
                      <div className="flex justify-center items-center gap-2">
                        Colors:{" "}
                        {item.colors.map((c, index) => (
                          <p
                            className="px-2 sm:px-3 sm:py-1 h-10 w-10 border bg-slate-50"
                            style={{ backgroundColor: c.color_template }}
                            key={index}
                          ></p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-between">
                  <div className="flex items-center gap-2">
                    <p className={`min-w-2 h-2 rounded-full bg-green-500`}></p>
                    <p className="text-sm md:text-base">Available</p>
                  </div>
                  <div className="flex gap-4">
                    <button
                      className="border border-gray-400 px-4 py-2 text-sm font-medium rounded-sm hover:bg-green-500 hover:text-white transition-all ease-in-out"
                      onClick={() => {
                        setIsUpdated(item.id === isUpdated ? "" : item.id);
                        reset();
                      }}
                    >
                      Update
                    </button>
                    <button
                      className="border border-gray-400 px-4 py-2 text-sm font-medium rounded-sm hover:bg-red-500 hover:text-white transition-all ease-in-out"
                      onClick={() => deleteProduct(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>

              {isUpdated === item.id && (
                <form
                  className="py-4 border-t border-gray-400 flex flex-col items-center w-[60%] gap-4 text-gray-800"
                  onSubmit={handleSubmit(updateProduct)}
                >
                  <div className="w-full flex flex-col sm:flex-row items-center">
                    <label className="w-full sm:w-1/3 mb-2 sm:mb-0">
                      Product Name
                    </label>
                    <input
                      type="text"
                      placeholder="Product Name..."
                      className="w-full px-3 py-3 border border-gray-800 outline-none bg-white bg-opacity-40"
                      required
                      defaultValue={item.product_name}
                      {...register("product_name")}
                    />
                  </div>
                  <div className="w-full flex flex-col sm:flex-row items-center">
                    <label className="w-full sm:w-1/3 mb-2 sm:mb-0">
                      Description
                    </label>
                    <textarea
                      placeholder="Description..."
                      defaultValue={item.description}
                      className="w-full px-3 py-3 border border-gray-800 outline-none bg-white bg-opacity-40"
                      {...register("description")}
                    />
                  </div>
                  <div className="w-full flex flex-col sm:flex-row items-center">
                    <label className="w-full sm:w-1/3 mb-2 sm:mb-0">
                      Price
                    </label>
                    <input
                      type="text"
                      placeholder="Price..."
                      className="w-full px-3 py-3 border border-gray-800 outline-none bg-white bg-opacity-40"
                      required
                      defaultValue={item.price}
                      {...register("price")}
                    />
                  </div>
                  <div className="w-full flex flex-col sm:flex-row items-center">
                    <label className="w-full sm:w-1/3 mb-2 sm:mb-0">
                      Category
                    </label>
                    <select
                      className="w-full px-3 py-3 border border-gray-800 outline-none bg-white bg-opacity-40"
                      required
                      defaultValue={item.category}
                      {...register("category")}
                    >
                      <option value="" disabled>
                        --Choose Category--
                      </option>
                      <option value="Men">Men</option>
                      <option value="Women">Women</option>
                      <option value="Kids">Kids</option>
                    </select>
                  </div>
                  <div className="w-full flex flex-col sm:flex-row items-center">
                    <label className="w-full sm:w-1/3 mb-2 sm:mb-0">
                      Sub Category
                    </label>
                    <select
                      className="w-full px-3 py-3 border border-gray-800 outline-none bg-white bg-opacity-40"
                      required
                      defaultValue={item.sub_category}
                      {...register("sub_category")}
                    >
                      <option value="" disabled>
                        --Choose Sub Category--
                      </option>
                      <option value="Topwear">Top wear</option>
                      <option value="Bottomwear">Bottom wear</option>
                      <option value="Springwear">Spring Collection</option>
                      <option value="Summerwear">Summer Collection</option>
                      <option value="Autumnwear">Autumn Collection</option>
                      <option value="Winterwear">Winter Collection</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white px-10 py-[10px] text-base font-medium w-full hover:bg-gray-700"
                  >
                    UPDATE
                  </button>
                </form>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListProduct;
