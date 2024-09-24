import { useQuery } from "@tanstack/react-query";
import ProductsManagementAPI from "../services/productService";

const useGetProductByID = (id) => {
  const { data, isLoading } = useQuery({
    queryKey: ["productInfo", id],
    queryFn: () => ProductsManagementAPI.GetProductById(id),
  });

  if (isLoading) {
    return { data: {}, isLoading: true };
  }

  return { data, isLoading: false };
};

export default useGetProductByID;
