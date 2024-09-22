import { useQuery } from "@tanstack/react-query";
import ProductsManagementAPI from "../services/productService";

const useGetProductsList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => ProductsManagementAPI.GetProduct(),
  });

  if (isLoading) {
    return { data: [], isLoading: true };
  }

  return { data, isLoading: false };
};

export default useGetProductsList;
