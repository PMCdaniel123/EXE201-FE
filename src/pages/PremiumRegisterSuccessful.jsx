import { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { Spin } from "antd";
import axiosInstance from "../utils/axiosInstance";

const PremiumRegisterSuccessful = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-transparent">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Thank you for your register!
        </h2>
        <p className="text-gray-600 mb-6">
          Welcome to the new journey with us.
        </p>
        <Link to="/">
          <button className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white py-2 px-6 text-lg ">
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PremiumRegisterSuccessful;
