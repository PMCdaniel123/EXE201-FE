import { toast } from "react-toastify";
import AuthManagementAPI from "../services/authService";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import tokenMethod from "../utils/token";

const useRegister = () => {
  const { navigate } = useContext(ShopContext);

  return useMutation({
    mutationFn: AuthManagementAPI.Register,
    onSuccess: (response) => {
      toast.success("Register Successfully!");
      const { access_token: token, data: user } = response;
      user.role = "Customer";
      tokenMethod.set({
        token,
        user,
      });
      navigate("/");
    },
    onError: (error) => {
      toast.error(error);
    },
  });
};

export default useRegister;
