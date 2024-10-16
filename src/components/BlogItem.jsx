import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { DeleteOutlined } from "@ant-design/icons";
import Cookies from "js-cookie";
import axiosInstance from "../utils/axiosInstance";

const BlogItem = ({
  title,
  image,
  date,
  category,
  id,
  author,
  authorName,
  onDelete,
}) => {
  const userId = Cookies.get("userID");
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await axiosInstance.delete(`/news/${id}`);
      onDelete(id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" bg-white border hover:scale-105 hover:shadow-xl relative">
      {author === Number(userId) && (
        <div
          className="absolute top-0 right-0 px-3 py-2 text-white bg-red-500 z-50 cursor-pointer"
          onClick={handleDelete}
        >
          <DeleteOutlined />
        </div>
      )}
      <Link to={`/sunblog/${id}`}>
        <img
          src={image !== "null" ? image : assets.default_blog_image}
          alt=""
          className="w-full h-64 border-b cursor-pointer object-cover"
        />
      </Link>
      <p className="ml-5 mt-5 p-2 inline-block bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white text-sm">
        {category}
      </p>
      <div className="p-5">
        <h5
          className="mb-2 text-lg font-medium tracking-tight text-black truncate cursor-pointer"
          title={title}
          onClick={() => navigate(`/sunblog/${id}`)}
        >
          {title}
        </h5>
        <div className="flex items-center gap-2 mb-2 cursor-pointer">
          <img
            src={assets.default_blog_image}
            alt="avatar"
            className="w-8 h-8 rounded-full"
          />
          <p>{authorName}</p>
        </div>
        <p className="mb-3 text-sm tracking-tight text-gray-700">
          {new Date(date).toLocaleString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </p>
        <Link
          to={`/sunblog/${id}`}
          className="inline-flex items-center py-2 font-semibold text-center text-gray-500"
        >
          Read more <img src={assets.breadcrum_icon} alt="" className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
