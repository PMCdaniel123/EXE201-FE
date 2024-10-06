import { useContext, useEffect, useState } from "react";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import axiosInstance from "../utils/axiosInstance";
import { Spin } from "antd";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const { cart, loading, navigate, setOrderId } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  const fetchProductInfo = async () => {
    try {
      if (cart.length === 0) return;
      const productReq = cart.map((item) =>
        axiosInstance.get(`/products/${item.product_id}`)
      );
      const productRes = await Promise.all(productReq);
      const productData = productRes.map((response) => response.data);

      const updatedCart = cart.map((item, index) => ({
        ...item,
        product: productData[index],
      }));

      setCartData(updatedCart);
    } catch (error) {
      console.error("Failed to fetch product info:", error);
    }
  };

  useEffect(() => {
    if (!loading && cart.length > 0) {
      fetchProductInfo();
    }
  }, [cart, loading]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOrder = async (data) => {
    const orderInformation = {
      customer_id: Cookies.get("userID"),
      full_name: data.first_name + " " + data.last_name,
      shipping_address: data.street + ", " + data.province + ", " + data.city,
      phone: data.phone,
      payment_method: method,
      total_amount:
        cartData.reduce(
          (acc, item) =>
            acc + Number(item.quantity) * Number(item.product.price),
          0
        ) + 10,
    };

    try {
      const response = await axiosInstance.post("/orders", orderInformation);
      toast.success(response.message);
      setOrderId(response.data.id);
      navigate("/orders-sucessful");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return loading ? (
    <Spin />
  ) : (
    <div className="flex flex-col sm:flex-row justify-between sm:gap-20 pt-5 sm:pt-14 min-h-[80vh] border-t border-gray-400">
      <form
        className="flex flex-col gap-4 w-full sm:w-1/2"
        onSubmit={handleSubmit(handleOrder)}
      >
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="First name"
            className="border border-gray-300 rounded py-2 px-4 w-full"
            required
            {...register("first_name")}
          />
          <input
            type="text"
            placeholder="Last name"
            className="border border-gray-300 rounded py-2 px-4 w-full"
            {...register("last_name")}
          />
        </div>
        <input
          type="text"
          placeholder="Street"
          className="border border-gray-300 rounded py-2 px-4 w-full"
          required
          {...register("street")}
        />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Province"
            className="border border-gray-300 rounded py-2 px-4 w-full"
            required
            {...register("province")}
          />
          <input
            type="text"
            placeholder="City"
            className="border border-gray-300 rounded py-2 px-4 w-full"
            required
            {...register("city")}
          />
        </div>
        <input
          type="number"
          placeholder="Phone"
          className="border border-gray-300 rounded py-2 px-4 w-full"
          required
          {...register("phone")}
        />
        <div className="w-full text-end mt-4">
          <button
            className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white px-16 py-3 text-sm"
            type="submit"
          >
            PLACE ORDER
          </button>
        </div>
      </form>

      <div className="mt-8 w-1/3">
        <div className="mt-8 min-w-80">
          <CartTotal items={cartData} />
        </div>

        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex flex-col gap-3 lg:flex-row">
            <div
              onClick={() => setMethod("online")}
              className="flex items-center gap-3 border border-gray-400 p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border border-gray-400 rounded-full ${
                  method === "online" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                ONLINE BANKING
              </p>
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border border-gray-400 p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border border-gray-400 rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>

          {method === "online" && (
            <img
              src="/frontend_assets/payment_method.jpg"
              alt="payment"
              className="w-full mt-8"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
