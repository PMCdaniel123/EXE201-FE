import React, { useEffect, useState } from "react";
import BlogItem from "../components/BlogItem";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axiosInstance from "../utils/axiosInstance";
import { Spin } from "antd";

const SunBlog = () => {
  const [menu, setMenu] = useState("all");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const userId = Cookies.get("userID");

  const getBlogs = async () => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.get("/news");
      const sortedBlogs = data.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      setBlogs(sortedBlogs);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const handleDeleteBlog = (id) => {
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
  };

  return (
    <div className="border-t border-gray-400 w-full">
      <div className="flex justify-center items-center w-full relative overflow-hidden">
        <img
          src={assets.bg_2}
          alt=""
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <div className="flex justify-between items-center md:flex-row flex-col px-6 md:px-10 max-sm:mt-10 max-sm:gap-4 max-sm:w-full">
        <div className="flex items-center md:inline-flex justify-evenly md:gap-6 md:my-10 border border-gray-400 max-sm:w-full max-sm:text-sm">
          <button
            onClick={() => setMenu("all")}
            className={
              menu === "all"
                ? "bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white py-2 px-3 md:px-6 rounded-sm"
                : "md:px-4"
            }
          >
            All
          </button>
          <button
            onClick={() => setMenu("Technology")}
            className={
              menu === "Technology"
                ? "bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white py-2 px-3 md:px-6 rounded-sm"
                : "md:px-4"
            }
          >
            Technology
          </button>
          <button
            onClick={() => setMenu("Startup")}
            className={
              menu === "Startup"
                ? "bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white py-2 px-3 md:px-6 rounded-sm"
                : "md:px-4"
            }
          >
            Startup
          </button>
          <button
            onClick={() => setMenu("Lifestyle")}
            className={
              menu === "Lifestyle"
                ? "bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white py-2 px-3 md:px-6 rounded-sm"
                : "md:px-4"
            }
          >
            Lifestyle
          </button>
        </div>

        <div className="max-sm:w-full">
          {userId ? (
            <button
              onClick={() => navigate("/sunblog/new")}
              className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white text-base py-2 px-6 max-sm:w-full"
            >
              Create Posts
            </button>
          ) : null}
        </div>
      </div>
      {loading ? (
        <Spin className="w-full h-full items-center justify-center" />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 mb-10 px-10">
          {blogs
            .filter((item) => (menu === "all" ? true : item.category === menu))
            .map((item, index) => {
              return (
                <BlogItem
                  key={index}
                  id={item.id}
                  title={item.title}
                  image={item.image_url}
                  date={item.created_at}
                  category={item.category}
                  author={item.author.id}
                  authorName={item.author.name}
                  onDelete={handleDeleteBlog}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default SunBlog;
