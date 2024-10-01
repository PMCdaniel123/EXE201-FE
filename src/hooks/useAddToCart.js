import { useMutation } from "@tanstack/react-query";
import CartManagementAPI from "../services/cartService";
import { toast } from "react-toastify";

const useAddToCart = () => {
  return useMutation({
    mutationFn: CartManagementAPI.AddToCart,
    onSuccess: (response) => {
      toast.success(response.message);
    },
    onError: (error) => {
      toast.error(error);
    },
  });
};

export default useAddToCart;
