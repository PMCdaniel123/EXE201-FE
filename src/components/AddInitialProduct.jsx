import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ShopContext } from "../context/ShopContext";
import axiosInstance from "../utils/axiosInstance";
import Cookies from "js-cookie";

const AddInitialProduct = ({ moveToNextStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { userInfo } = useContext(ShopContext);
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (data) => {
    const addData = {
      ...data,
      designer_id: userInfo?.designer.id,
    };

    try {
      setLoading(true);
      const response = await axiosInstance.post("/products", addData);
      Cookies.set("product_added", response.product_id, { expires: 1 });
      setLoading(false);
      moveToNextStep();
    } catch (error) {
      console.log(error);
    }

    moveToNextStep();
  };

  return (
    <form
      className="flex flex-col items-center w-[90%] gap-4 text-gray-800"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div className="w-full flex flex-col sm:flex-row items-center">
        <label className="w-full sm:w-1/3 mb-2 sm:mb-0">Product Name</label>
        <input
          type="text"
          placeholder="Product Name..."
          className="w-full px-3 py-3 border border-gray-800 outline-none bg-white bg-opacity-40"
          required
          {...register("product_name")}
        />
      </div>
      <div className="w-full flex flex-col sm:flex-row items-center">
        <label className="w-full sm:w-1/3 mb-2 sm:mb-0">Description</label>
        <textarea
          placeholder="Description..."
          className="w-full px-3 py-3 border border-gray-800 outline-none bg-white bg-opacity-40"
          {...register("description")}
        />
      </div>
      <div className="w-full flex flex-col sm:flex-row items-center">
        <label className="w-full sm:w-1/3 mb-2 sm:mb-0">Price</label>
        <input
          type="text"
          placeholder="Price..."
          className="w-full px-3 py-3 border border-gray-800 outline-none bg-white bg-opacity-40"
          required
          {...register("price")}
        />
      </div>
      <div className="w-full flex flex-col sm:flex-row items-center">
        <label className="w-full sm:w-1/3 mb-2 sm:mb-0">Category</label>
        <select
          className="w-full px-3 py-3 border border-gray-800 outline-none bg-white bg-opacity-40"
          required
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
        <label className="w-full sm:w-1/3 mb-2 sm:mb-0">Sub Category</label>
        <select
          className="w-full px-3 py-3 border border-gray-800 outline-none bg-white bg-opacity-40"
          required
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
        ADD
      </button>
    </form>
  );
};

export default AddInitialProduct;
