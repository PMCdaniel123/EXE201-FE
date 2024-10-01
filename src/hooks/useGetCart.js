import { useQuery } from "@tanstack/react-query";
import CartManagementAPI from "../services/cartService";

const useGetCart = (id) => {
  const { data, isLoading } = useQuery({
    queryKey: ["Cart", id],
    queryFn: () => CartManagementAPI.GetCart(id),
  });

  if (isLoading) {
    return { data: {}, isLoading: true };
  }

  return { data, isLoading: false };
};

export default useGetCart;
