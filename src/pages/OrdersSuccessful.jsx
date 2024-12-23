import { useEffect } from "react";
import { Link } from "react-router-dom";

const OrdersSuccessful = () => {
  useEffect(() => {}, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-transparent">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Thank you for your order!
        </h2>
        <p className="text-gray-600 mb-2">
          Your order was placed successfully. You will receive a confirmation
          soon.
        </p>
        <p className="text-gray-600 mb-6">Please check your orders!</p>
        <Link to="/">
          <button className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white py-2 px-6 text-lg ">
            Continue to Shop
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrdersSuccessful;
