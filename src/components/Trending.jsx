import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import Title from "./Title";
import { Link } from "react-router-dom";

const Trending = () => {
  return (
    <div className="my-10 mb-20">
      <div className="text-center py-10 text-6xl">
        <Title text1={"SUNSET'S"} text2={"TRENDINGS"} />
      </div>
      <div className="mx-auto grid border border-gray-400">
        <div className="grid grid-cols-5 justify-center items-center gap-4">
          <div className="col-span-1 flex items-center justify-center">
            <div className="text-3xl font-extrabold">1.</div>
          </div>
          <div className="col-span-3">
            <h3 className="text-3xl font-extrabold">TRENDSETTING STYLES</h3>
            <p className="text-sm mt-2 uppercase text-[#656565]">
              Stay on top of the hottest fashion trends and showcase your unique
              style effortlessly. Our carefully curated collection ensures
              you're always dressed to impress.
            </p>
          </div>
          <div className="col-span-1">
            <img
              src={assets.bg_3}
              alt="Trendsetting Styles"
              className="w-full h-60 object-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-5 items-center border-b border-t border-gray-400 gap-4">
          <div className="col-span-1 flex items-center justify-center">
            <div className="text-3xl font-extrabold">2.</div>
          </div>
          <div className="col-span-3">
            <h3 className="text-3xl font-extrabold">UNBEATABLE SAVINGS</h3>
          </div>
          <div className="col-span-1">
            <img
              src={assets.bg_4}
              alt="Unbeatable Savings"
              className="w-full h-36 object-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-5 items-center gap-4">
          <div className="col-span-1 flex items-center justify-center">
            <div className="text-3xl font-extrabold">3.</div>
          </div>
          <div className="col-span-3">
            <h3 className="text-3xl font-extrabold">SIMPLIFIED SHOPPING</h3>
          </div>
          <div className="col-span-1">
            <img
              src={assets.bg_5}
              alt="Simplified Shopping"
              className="w-full h-36 object-none"
            />
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <Link
          to="/sunblog"
          className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white text-xs sm:text-sm px-5 py-3 sm:px-10 sm:py-4"
        >
          EXPLORE THE SUNBLOG
        </Link>
      </div>
    </div>
  );
};

export default Trending;
