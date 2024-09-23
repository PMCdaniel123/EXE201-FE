import React, { useState } from "react";
import { assets, blog_data } from "../assets/frontend_assets/assets";
import BlogItem from "../components/BlogItem";

const SunBlog = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div className="border-t border-gray-400">
      <div className="flex justify-center items-center mt-10 w-full relative overflow-hidden">
        <img
          src={assets.hero_img}
          alt=""
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div className="inline-flex justify-center gap-6 my-10 border">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All"
              ? "bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white py-2 px-6 rounded-sm"
              : "px-4"
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("Technology")}
          className={
            menu === "Technology"
              ? "bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white py-2 px-6 rounded-sm"
              : "px-4"
          }
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("Startup")}
          className={
            menu === "Startup"
              ? "bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white py-2 px-6 rounded-sm"
              : "px-4"
          }
        >
          Startup
        </button>
        <button
          onClick={() => setMenu("Lifestyle")}
          className={
            menu === "Lifestyle"
              ? "bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white py-2 px-6 rounded-sm"
              : "px-4"
          }
        >
          Lifestyle
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 mb-10">
        {blog_data
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item, index) => {
            return (
              <BlogItem
                key={index}
                id={item.id}
                title={item.title}
                image={item.image}
                description={item.description}
                category={item.category}
              />
            );
          })}
      </div>
    </div>
  );
};

export default SunBlog;
