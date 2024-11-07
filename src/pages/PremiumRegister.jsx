import { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import { Spin } from "antd";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import axios from "axios";

const PremiumRegister = () => {
  const { currency, navigate } = useContext(ShopContext);
  const userId = Cookies.get("userID");
  const [loading, setLoading] = useState(false);
  const [featureId, setFeatureId] = useState(0);
  const [price, setPrice] = useState("0");
  const [time, setTime] = useState("0");

  useEffect(() => {
    const feature = localStorage.getItem("feature");
    if (feature) {
      const parsedFeature = JSON.parse(feature);
      setFeatureId(parsedFeature.featureId);
      setPrice(parsedFeature.price);
      setTime(parsedFeature.time);
    } else {
      console.log("No feature found in localStorage.");
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onlineBanking = async () => {
    try {
      await axios
        .post(
          "https://exe-201-banking-payos.vercel.app/api/create-checkout-session",
          {
            orderId: Math.floor(Math.random() * 100000) + 1,
            total_amount: Number(price) * 25000,
            returnUrl: "premium-loading",
            cancelUrl: "premium-register",
          }
        )
        .then((response) => {
          window.location.href = response.data.url;
        });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const featureRegister = async (data) => {
    if (featureId !== 3) {
      const designerData = {
        user_id: userId,
        full_name: data.full_name,
        contact_info: data.contact_info,
        bio: data.bio,
      };
      localStorage.setItem("designerData", JSON.stringify(designerData));
    }

    const customerData = {
      user_id: userId,
      feature_id: featureId,
    };

    localStorage.setItem("customerData", JSON.stringify(customerData));

    onlineBanking();
  };

  return (
    <div
      className={`flex flex-col sm:flex-row sm:gap-20 pt-5 sm:pt-14 min-h-[80vh] border-t border-gray-400 px-10 ${
        featureId !== 3 ? "justify-between" : "justify-center"
      }`}
    >
      {featureId !== 3 && (
        <form
          className="flex flex-col gap-4 w-full sm:w-1/2"
          onSubmit={handleSubmit(featureRegister)}
        >
          <div className="text-xl sm:text-2xl my-3">
            <Title text1={"DESIGNER"} text2={"INFORMATION"} />
          </div>
          <input
            type="text"
            placeholder="Author Name"
            className="border border-gray-300 rounded py-2 px-4 w-full"
            required
            {...register("full_name")}
          />
          <input
            type="text"
            placeholder="Contact Info"
            className="border border-gray-300 rounded py-2 px-4 w-full"
            {...register("contact_info")}
          />
          <textarea
            type="text"
            placeholder="Bio"
            className="border border-gray-300 rounded py-2 px-4 w-full"
            required
            {...register("bio")}
          />
          <div className="w-full text-end mt-4">
            <button
              className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white px-16 py-3 text-sm"
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </form>
      )}

      <div className="w-1/3">
        <div className="min-w-80">
          <div className="w-full">
            <div className="text-2xl">
              <Title text1={"TOTAL"} text2={"FEES"} />
            </div>

            <div className="flex flex-col gap-4 mt-2 text-sm">
              <div className="flex justify-between">
                <p>Time</p>
                <p>{time} months</p>
              </div>
              <hr className="bg-gray-400" />
              <div className="flex justify-between">
                <b>Total</b>
                <i className="text-gray-800 font-light">
                  {Number(price) * 25},000 VND
                </i>
                <b>
                  {currency}
                  {price}
                </b>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex items-center gap-3 border border-gray-400 p-2 px-3 cursor-pointer">
              <p
                className={`min-w-3.5 h-3.5 border border-gray-400 rounded-full bg-green-400`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                ONLINE BANKING
              </p>
            </div>
          </div>
        </div>

        {featureId === 3 && (
          <div className="w-full text-end mt-4">
            {loading ? (
              <Spin />
            ) : (
              <button
                className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white px-16 py-3 text-sm"
                type="submit"
                onClick={featureRegister}
              >
                SUBMIT
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PremiumRegister;
