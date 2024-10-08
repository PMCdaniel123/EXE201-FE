import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogItem from "../components/BlogItem";
import Title from "../components/Title";
import axiosInstance from "../utils/axiosInstance";
import Cookies from "js-cookie";
import { Spin } from "antd";

const MyBlogs = () => {
  const [myBlogs, setMyBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const userId = Cookies.get("userID");

  useEffect(() => {
    const getMyBlogs = async () => {
      try {
        setLoading(true);
        const { data } = await axiosInstance.get("/news");
        const blogs = data.filter((item) => item.author.id === Number(userId));
        setMyBlogs(blogs);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getMyBlogs();
  }, [userId]);

  const handleDeleteBlog = (id) => {
    setMyBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
  };

  return loading ? (
    <Spin />
  ) : (
    <div className="border-t border-gray-400 pt-14">
      <div className="text-base sm:text-2xl mb-4">
        <Title text1={"MY"} text2={"BLOGS"} />
      </div>

      {myBlogs.length === 0 ? (
        <div className="text-center text-gray-600">No blogs found</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 mb-10">
          {myBlogs.map((item, index) => {
            return (
              <BlogItem
                key={index}
                id={item.id}
                title={item.title}
                image={item.image_url}
                date={item.created_at}
                category={item.category}
                author={item.author.id}
                onDelete={handleDeleteBlog}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyBlogs;
