import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import axiosInstance from "../utils/axiosInstance";
import { Spin } from "antd";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Cart = () => {
  const { currency, navigate, cart, setCart, loading } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  const handleDelete = async (id) => {
    const res = await axiosInstance.delete(`/carts/${id}`);
    toast.success(res.message);
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    setCartData((prevCartData) =>
      prevCartData.filter((item) => item.id !== id)
    );
  };

  console.log(cart);

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

  if (loading) {
    return <Spin />;
  }

  return (
    <div className="border-t border-gray-400 pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div className="flex flex-col sm:flex-row items-start justify-between gap-20">
        <div className="w-2/3">
          {cartData.map((item, index) => (
            <div
              key={index}
              className="py-4 border-t border-gray-400 text-gray-700 grid grid-cols-[4fr_0.5fr] sm:grid-cols-[4fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  src={`/frontend_assets/${item.product.images[0].image_url}.png`}
                  alt=""
                  className="w-16 sm:w-20"
                />
                <div>
                  <Link
                    to={`/product/${item?.product?.id}`}
                    className="text-xs sm:text-lg"
                  >
                    {item?.product?.product_name}
                  </Link>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {item?.product?.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 h-10 w-10 border bg-slate-50 flex items-center justify-center">
                      {item?.size}
                    </p>
                    <p
                      className="px-2 sm:px-3 sm:py-1 h-10 w-10 border bg-slate-50"
                      style={{ backgroundColor: item?.color }}
                    ></p>
                  </div>
                </div>
              </div>
              {/* <input
              type="number"
              min={1}
              defaultValue={item?.quantity}
              className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
            /> */}
              <img
                src={assets.bin_icon}
                alt=""
                className="h-10 mr-4 cursor-pointer px-3 py-2 hover:bg-red-400"
                onClick={() => handleDelete(item?.id)}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end my-20 w-1/3">
          <div className="w-full sm:w-[450px]">
            <CartTotal items={cartData} />
            <div className="w-full text-end">
              <button
                className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white text-sm my-8 px-8 py-3"
                onClick={() => navigate("/place-order")}
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
