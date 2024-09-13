import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

const FeatureCollections = () => {
  return (
    <div className="my-10">
      <div className="flex gap-4 h-fit">
        <div className="flex flex-col gap-4 w-1/2">
          <div className="relative overflow-hidden">
            <img
              src={assets.hero_img}
              alt="Fashion"
              className="object-cover w-full h-80"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 text-white text-sm">
              <p className="absolute left-0 bottom-0 p-8 font-light text-sm">
                FIND THAT PERFECT PIECE TO ELEVATE <br /> YOUR WARDROBE AND MAKE
                A STATEMENT.
              </p>
            </div>
          </div>

          <div className="relative col-span-2 overflow-hidden">
            <img
              src={assets.hero_img}
              alt="Featured Collection"
              className="object-cover w-full h-80"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 text-white">
              <h2 className="absolute left-0 top-0 p-8 text-5xl font-bold">
                FEATURED <br />
                COLLECTION
              </h2>
              <div className="absolute left-0 bottom-0 p-8">
                <Link to="/collection">
                  <button className="border border-white text-white text-xs sm:text-sm px-5 py-3 sm:px-10 sm:py-4">
                    VIEW PRODUCTS
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden w-1/2">
          <img
            src={assets.hero_img}
            alt="Runway"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 text-center text-white text-sm flex flex-col justify-end items-center ">
            <p className="px-32 py-6 mb-8 border font-light text-sm">
              SHOPPING WITH US IS NOT JUST ABOUT FINDING <br />
              THE PERFECT OUTFIT. IT'S AN EXPERIENCE.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCollections;
