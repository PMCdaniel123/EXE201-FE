import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  GET_PROFILE,
} from "../constants/environments";
import axiosInstance from "../utils/axiosInstance";

const AddToCart = async ({ user_id, product_id, size, color, quantity }) => {
  try {
    const data = await axiosInstance.post(ADD_TO_CART, {
      user_id,
      product_id,
      size,
      color,
      quantity,
    });
    return data.data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const DeleteCartItem = async (id) => {
  try {
    const data = await axiosInstance.delete(DELETE_FROM_CART + "/" + id);
    return data.data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const GetCart = async (user_id) => {
  try {
    const data = await axiosInstance.get(GET_PROFILE + "/" + user_id);
    console.log(data.data.cart);

    return data.data.cart;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const CartManagementAPI = {
  AddToCart,
  GetCart,
  DeleteCartItem,
};

export default CartManagementAPI;
