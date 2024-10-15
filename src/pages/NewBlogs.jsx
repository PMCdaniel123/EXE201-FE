import { useState } from "react";
import Title from "../components/Title";
import TipTap from "../components/TipTap";
import { useForm } from "react-hook-form";
import axiosInstance from "../utils/axiosInstance";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";

const NewBlogs = () => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const userId = Cookies.get("userID");
  const navigate = useNavigate();

  console.log(content);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = async (data) => {
    const file = data.image[0];
    let url = "null";

    if (file) {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "syd5q0ri");
      formData.append("cloud_name", "dywbaeo2q");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dywbaeo2q/image/upload",
        {
          method: "post",
          body: formData,
        }
      );

      const uploadedImageUrl = await res.json();
      setLoading(false);

      url = uploadedImageUrl.secure_url;
    }

    const dataPost = {
      title: data.title,
      content,
      author_id: userId,
      category: data.category,
      image_url: url,
    };

    try {
      setLoading(true);
      const response = await axiosInstance.post("/news", dataPost);
      setLoading(false);
      toast.success(response.message);
      reset();
      setContent("");
      navigate("/sunblog");
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
          <label className="text-base text-gray-800" htmlFor="category">
            Category
          </label>
          <select
            className="border border-gray-400 p-3 rounded-lg"
            defaultValue={""}
            {...register("category", { required: true })}
          >
            <option value="" disabled>
              --Choose Category--
            </option>
            <option value="technology">Technology</option>
            <option value="startup">Startup</option>
            <option value="lifestyle">Lifestyle</option>
          </select>
          {errors.category && (
            <p className="text-red-500">Category is required</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-base text-gray-800" htmlFor="title">
            Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            className="border border-gray-400 p-3 rounded-lg"
            {...register("image")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-base text-gray-800" htmlFor="content">
            Content
          </label>
          <TipTap content={content} setContent={setContent} />
        </div>

        <p className="text-gray-400 italic">Shift + Enter for new line</p>

        <button
          type="submit"
          className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white text-base py-3 rounded-lg"
        >
          Submit
        </button>
      </form>

      <div className="mt-20 news-content">{parse(content)}</div>
    </div>
  );
};

export default NewBlogs;
