import React, { useContext } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";

const Premium = ({ type, price, time }) => {
  const { currency } = useContext(ShopContext);

  return (
    <div className="group w-72 h-96 hover:scale-110 hover:bg-[#2D320D] bg-[#D9D9D9] py-6 px-4 flex flex-col justify-between">
      <div className="flex flex-col justify-start">
        <div className="items-center gap-2 flex">
          <div className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] rounded-full">
            <img
              src={assets.favicon_white}
              alt=""
              className="w-10 h-10 p-1 transition-all duration-300 ease-in-out"
            />
          </div>
          <p className="text-black group-hover:text-white font-bold text-base">
            {type}
          </p>
        </div>
        <div className="flex text-2xl font-bold mt-2 text-[#566145] group-hover:text-[#9B8E59]">
          {currency}
          {price}
        </div>
        <div className="flex text-sm my-2 group-hover:text-white">
          for {time} months
        </div>
        <hr className="w-full border-none h-[1px] bg-black group-hover:bg-white" />
      </div>
      <button className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white text-sm font-bold px-8 py-4">
        PURCHASE
      </button>
    </div>
  );
};

export default Premium;
