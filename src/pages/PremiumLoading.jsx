import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axiosInstance from "../utils/axiosInstance";
import { Spin } from "antd";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const PremiumLoading = () => {
  const { navigate } = useContext(ShopContext);
  const [loading, setLoading] = useState(false);

  const featureRegister = async () => {
    const designerData = localStorage.getItem("designerData");
    const customerData = localStorage.getItem("customerData");

    if (designerData) {
      const parsedDesignerData = JSON.parse(designerData);
      try {
        await axiosInstance.post("/designers", parsedDesignerData);
        localStorage.removeItem("designerData");
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }

    try {
      setLoading(true);
      const parsedCustomerData = JSON.parse(customerData);
      const response = await axiosInstance.post("/user-features", parsedCustomerData);
      setLoading(false);
      localStorage.removeItem("customerData");
      toast.success(response.message);
      navigate("/premium-register-successful");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    featureRegister();
  }, []);

  return loading ? (
    <Spin />
  ) : (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-transparent">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Loading...
        </h2>
      </div>
    </div>
  );
};

export default PremiumLoading;
