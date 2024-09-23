import { GET_PRODUCTS } from "../constants/environments";
import axiosInstance from "../utils/axiosInstance";

const GetProduct = async () => {
  try {
    const data = await axiosInstance.get(GET_PRODUCTS);
    return data.data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const GetProductById = async (id) => {
  try {
    const data = await axiosInstance.get(GET_PRODUCTS + "/" + id);
    return data.data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const ProductsManagementAPI = {
  GetProduct,
  GetProductById,
};

export default ProductsManagementAPI;
