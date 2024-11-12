import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Trending = () => {
  return (
    <div className="flex flex-col my-20 mb-20 gap-4 lg:gap-0">
      <div className="text-center lg:py-8 text-2xl md:text-4xl lg:text-6xl">
        <Title text1={"SUNSET'S"} text2={"TRENDINGS"} />
      </div>
      <div className="mx-auto grid border-t border-b border-gray-400">
        <div className="grid grid-cols-5 justify-center items-center gap-4">
          <div className="max-sm:hidden col-span-1 flex items-center justify-center">
            <div className="text-xl md:text-3xl font-extrabold">1.</div>
          </div>
          <div className="col-span-3 max-sm:pl-2">
            <h3 className="md:text-3xl font-extrabold">TRENDSETTING STYLES</h3>
            <p className="text-xs md:text-sm mt-2 md:uppercase text-[#656565]">
              Stay on top of the hottest fashion trends and showcase your unique
              style effortlessly. Our carefully curated collection ensures
              you're always dressed to impress.
            </p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <img
              src={assets.trend_1}
              alt="Trendsetting Styles"
              className="w-full h-60 object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-5 items-center border-b border-t border-gray-400 gap-4">
          <div className="max-sm:hidden col-span-1 flex items-center justify-center">
            <div className="text-xl md:text-3xl font-extrabold">2.</div>
          </div>
          <div className="col-span-3 max-sm:pl-2">
            <h3 className="md:text-3xl font-extrabold">UNBEATABLE SAVINGS</h3>
          </div>
          <div className="col-span-2 md:col-span-1">
            <img
              src={assets.trend_2}
              alt="Unbeatable Savings"
              className="w-full h-36 object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-5 items-center gap-4">
          <div className="max-sm:hidden col-span-1 flex items-center justify-center">
            <div className="text-xl md:text-3xl font-extrabold">3.</div>
          </div>
          <div className="col-span-3 max-sm:pl-2">
            <h3 className="md:text-3xl font-extrabold">SIMPLIFIED SHOPPING</h3>
          </div>
          <div className="col-span-2 md:col-span-1">
            <img
              src={assets.trend_3}
              alt="Simplified Shopping"
              className="w-full h-36 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="text-center mt-4 lg:mt-8 max-sm:px-6">
        <Link to="/sunblog">
          <button className="max-sm:w-full bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white text-xs sm:text-sm px-5 py-3 md:px-10 md:py-4">
            EXPLORE THE SUNBLOG
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Trending;
