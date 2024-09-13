import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

const BlogItem = ({ title, image, description, category, id }) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]">
      <Link to={`/sunblog/${id}`}>
        <img
          src={image}
          alt=""
          className="w-full h-[96] border-b border-black cursor-pointer"
        />
      </Link>
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">
        {category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 text-sm tracking-tight text-gray-700">
          {description}
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
