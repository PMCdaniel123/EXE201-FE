import { useMutation } from "@tanstack/react-query";
import CartManagementAPI from "../services/cartService";
import { queryClient } from "../constants/storage";
import { toast } from "react-toastify";

export const useDeleteFromCart = (id) => {
  return useMutation({
    mutationFn: () => CartManagementAPI.DeleteCartItem(id),
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["getCartList"] });
      toast.success(response.message);
    },
    onError: () => {
      toast.error(error);
    },
  });
};
