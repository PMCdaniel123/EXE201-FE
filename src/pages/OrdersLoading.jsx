import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { Spin } from "antd";
import axiosInstance from "../utils/axiosInstance";
import { toast } from "react-toastify";

const OrdersLoading = () => {
  const { cart, navigate } = useContext(ShopContext);
  const [loading, setLoading] = useState(false);

  const fetchOrderItems = async () => {
    const orderInformation = localStorage.getItem("orderInformation");

    if (!orderInformation) {
      navigate("/place-order");
    }

    const parsedOrderInformation = JSON.parse(orderInformation);

    setLoading(true);

    try {
      const response = await axiosInstance.post(
        "/orders",
        parsedOrderInformation
      );

      try {
        const orderItemsRequest = cart.map((item) =>
          axiosInstance.post(`/order-details`, {
            order_id: response.data.id + "",
            product_id: item.product_id,
            quantity: Number(item.quantity),
            size: item.size,
            color: item.color,
          })
        );
        await Promise.all(orderItemsRequest);
        window.location.href = "/orders-sucessful";
      } catch (error) {
        toast.error(error.message);
        setLoading(false);
      }
      toast.success(response.message);
      localStorage.removeItem("orderInformation");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
    setLoading(false);
    navigate("/orders-sucessful");
  };

  useEffect(() => {
    fetchOrderItems();
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

export default OrdersLoading;
