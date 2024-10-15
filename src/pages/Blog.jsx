import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FacebookOutlined,
  InstagramOutlined,
  TikTokOutlined,
} from "@ant-design/icons";
import axiosInstance from "../utils/axiosInstance";
import { Spin } from "antd";
import { assets } from "../assets/assets";
import parse from "html-react-parser";
import { ShopContext } from "../context/ShopContext";
import { useForm } from "react-hook-form";

const Blog = () => {
  const { blogId } = useParams();
  const [blogDetail, setBlogDetail] = useState([
    {
      title: "",
      content: "",
      author: { name: "" },
      image_url: "",
      created_at: "",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const { userInfo } = useContext(ShopContext);
  const { register, handleSubmit, reset } = useForm();
  const [comments, setComments] = useState([]);
  const [userNames, setUserNames] = useState({});

  const onSubmit = async (data) => {
    const submittedData = {
      comment: data.comment,
      user_id: userInfo?.id + "",
      news_id: blogId,
    };

    try {
      setLoading1(true);
      await axiosInstance.post("/comment", submittedData);
      setLoading1(false);

      const newComment = {
        comment: data.comment,
        created_at: new Date().toISOString(),
        user_id: userInfo?.id,
      };

      setComments((prevComments) => [...prevComments, newComment]);

      const response = await axiosInstance.get(`/users/${newComment.user_id}`);
      setUserNames((prevUserNames) => ({
        ...prevUserNames,
        [newComment.user_id]: response.data.name,
      }));

      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const getBlogDetail = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/news");
      const data = response?.data || [];
      const filteredBlog = data.filter((item) => item.id === Number(blogId));
      setBlogDetail(filteredBlog);
      setComments(filteredBlog[0]?.comment || []);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUsernames = async () => {
    const newUserNames = {};
    for (const comment of comments) {
      if (!userNames[comment.user_id]) {
        const response = await axiosInstance.get(`/users/${comment.user_id}`);
        newUserNames[comment.user_id] = response.data.name;
      }
    }

    setUserNames((prev) => ({ ...prev, ...newUserNames }));
  };

  useEffect(() => {
    if (comments.length > 0) {
      fetchUsernames();
    }
  }, [comments]);

  useEffect(() => {
    getBlogDetail();
  }, []);

  return !loading ? (
    <div>
      <div className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] py-5 px-5 md:px-12 lg:px-28">
        <div className="text-center my-24">
          <h1
            className="text-2xl sm:text-5xl font-semibold max-w-[1200px] mx-auto text-white tracking-wide"
            style={{ lineHeight: "1.2" }}
          >
            {blogDetail[0]?.title}
          </h1>
          <img
            src={assets.default_blog_image}
            alt=""
            className="w-16 h-16 mx-auto mt-10 border border-white rounded-full object-cover"
          />
          <Link
            to={`/designer-info/${blogDetail[0]?.author.id}`}
            className="mt-2 text-lg max-w-[740px] mx-auto text-white"
          >
            {blogDetail[0]?.author.name}
          </Link>
          <p className="mt-2 pb-6 max-w-[740px] mx-auto text-gray-300 text-xs">
            {blogDetail[0]?.created_at &&
              new Date(blogDetail[0]?.created_at).toLocaleString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <img
          src={
            blogDetail[0]?.image_url !== "null"
              ? blogDetail[0]?.image_url
              : assets.default_blog_image
          }
          alt=""
          className="w-[800px] border-4 border-white"
        />

        <div className="mt-16 news-content">
          {parse(blogDetail[0]?.content)}
        </div>

        <div className="my-24">
          <p className="text-black font-semibold my-4">
            Share this article on social media
          </p>
          <div className="flex gap-4 text-3xl">
            <Link to={"https://www.facebook.com/sunsetsoiree.fashion"}>
              <FacebookOutlined />
            </Link>
            <Link
              to={
                "https://www.instagram.com/sunsetsoiree_fashion?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              }
            >
              <InstagramOutlined />
            </Link>
            <Link
              to={
                "https://www.tiktok.com/@sunset.soiree?is_from_webapp=1&sender_device=pc"
              }
            >
              <TikTokOutlined />
            </Link>
          </div>
        </div>

        <div className="max-w-full mx-auto my-6 p-4 border border-gray-400 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">
            Comments (<span>{comments.length}</span>)
          </h2>
          <div className="mb-6">
            {comments.length === 0 ? (
              <p className="text-gray-500">
                No comments yet. Be the first to comment!
              </p>
            ) : (
              comments.map((comment, index) => (
                <div
                  key={index}
                  className="bg-white p-4 mb-4 rounded-lg shadow-lg flex items-start space-x-4 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 cursor-pointer">
                        <img
                          src={assets.default_blog_image}
                          alt="avatar"
                          className="w-8 h-8 rounded-full"
                        />
                        <h3 className="text-sm font-medium text-gray-900">
                          {userNames[comment?.user_id] || "Loading..."}
                        </h3>
                      </div>
                      <p className="text-xs text-gray-500">
                        {new Date(comment?.created_at).toLocaleDateString(
                          "en-GB",
                          {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )}
                      </p>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {comment?.comment}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <textarea
              {...register("comment", { required: true })}
              placeholder={`${userInfo?.name}'s comment...`}
              className="w-full p-2 border border-gray-400 rounded-lg resize-none bg-inherit"
              rows={4}
            />
            {loading1 ? (
              <Spin />
            ) : (
              <button
                type="submit"
                className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white py-2 px-4 rounded-lg"
              >
                Post Comment
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  ) : (
    <Spin />
  );
};

export default Blog;
