import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { blog_data } from "../assets/assets";

const Blog = () => {
  const { blogId } = useParams();
  const [data, setData] = useState(null);

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(blogId) === blog_data[i].id) {
        setData(blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <div>
      <div className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] py-5 px-5 md:px-12 lg:px-28">
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto text-white">
            {data.title}
          </h1>
          <img
            src={data.author_img}
            alt=""
            className="w-16 h-16 mx-auto mt-10 border border-white rounded-full"
          />
          <p className="mt-2 pb-6 text-lg max-w-[740px] mx-auto text-white">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <img
          src={data.image}
          alt=""
          className="w-[800px] border-4 border-white"
        />
        <h1 className="my-8 text-2xl font-semibold">Introduction:</h1>
        <p>{data.description}</p>
        <h3 className="my-5 text-lg font-semibold">
          Step 1: Self-Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Before you can manage your lifestyle, you must have a clear
          understanding of what you want to achieve. Start by reflecting on your
          values, aspirations, and long-term goals
        </p>
        <p className="my-3">
          Before you can manage your lifestyle, you must have a clear
          understanding of what you want to achieve. Start by reflecting on your
          values, aspirations, and long-term goals
        </p>
        <h3 className="my-5 text-lg font-semibold">
          Step 2: Self-Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Before you can manage your lifestyle, you must have a clear
          understanding of what you want to achieve. Start by reflecting on your
          values, aspirations, and long-term goals
        </p>
        <p className="my-3">
          Before you can manage your lifestyle, you must have a clear
          understanding of what you want to achieve. Start by reflecting on your
          values, aspirations, and long-term goals
        </p>
        <h3 className="my-5 text-lg font-semibold">
          Step 3: Self-Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Before you can manage your lifestyle, you must have a clear
          understanding of what you want to achieve. Start by reflecting on your
          values, aspirations, and long-term goals
        </p>
        <p className="my-3">
          Before you can manage your lifestyle, you must have a clear
          understanding of what you want to achieve. Start by reflecting on your
          values, aspirations, and long-term goals
        </p>
        <h3 className="my-5 text-lg font-semibold">Conclusion:</h3>
        <p className="my-3">
          Managing your lifestyle is a journey that requires commitment and
          self-awareness. By following this step-by-step guide, you can take
          control of your life and make meaningful changes that lead to a more
          balanced and fulfilling Lifestyle. Remember that it's okay to seek
          support and guidance from professionals or mentors along the way. Your
          well-being and happiness are worth the effort
        </p>

        <div className="my-24">
          <p className="text-black font-semibold my-4">
            Share this article on social media
          </p>
          <div className="flex gap-4 text-3xl">
            <FacebookOutlined />
            <InstagramOutlined />
            <LinkedinOutlined />
            <TwitterOutlined />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Blog;
