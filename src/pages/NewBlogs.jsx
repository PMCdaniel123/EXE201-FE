import { useState } from "react";
import Title from "../components/Title";
import TipTap from "../components/TipTap";
import { useForm } from "react-hook-form";
import axiosInstance from "../utils/axiosInstance";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import parse from "html-react-parser";

const NewBlogs = () => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const userId = Cookies.get("userID");

  console.log(content);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = async (data) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post("/blogs", {
        title: data.title,
        content,
        author_id: userId,
      });
      setLoading(false);
      toast.success(response.message);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border-t border-gray-400 pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"CREATE"} text2={"POSTS"} />
      </div>

      <form
        className="flex flex-col gap-8"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className="flex flex-col gap-2">
          <label className="text-base text-gray-800" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Title"
            className="border border-gray-400 p-3 rounded-lg"
            {...register("title", { required: true })}
          />
          {errors.title && <p className="text-red-500">Title is required</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-base text-gray-800" htmlFor="content">
            Content
          </label>
          <TipTap content={content} setContent={setContent} />
        </div>

        <button
          type="submit"
          className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white text-base py-3 rounded-lg"
        >
          Submit
        </button>
      </form>

      <div className="mt-16 news-content">{parse(content)}</div>
    </div>
  );
};

export default NewBlogs;
