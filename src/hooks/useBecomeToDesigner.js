import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import AuthManagementAPI from "../services/authService";
import { useMutation } from "@tanstack/react-query";

const useBecomeToDesigner = () => {
  const { setOpenModal } = useContext(ShopContext);

  return useMutation({
    mutationFn: AuthManagementAPI.BecomeToDesigner,
    onSuccess: () => {
      toast.success("Become to Designer!");
      setOpenModal(false);
    },
    onError: (error) => {
      toast.error(error);
    },
  });
};

export default useBecomeToDesigner;
