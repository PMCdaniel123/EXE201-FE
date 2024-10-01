import { useQuery } from "@tanstack/react-query";
import AuthManagementAPI from "../services/authService";

const useGetProfile = (id) => {
  const { data, isLoading } = useQuery({
    queryKey: ["userProfile", id],
    queryFn: () => AuthManagementAPI.GetProfile(id),
  });

  if (isLoading) {
    return { data: {}, isLoading: true };
  }

  return { data, isLoading: false };
};

export default useGetProfile;
