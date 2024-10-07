import { Button, ColorPicker, Spin } from "antd";
import { useState } from "react";
import { set, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axiosInstance from "../utils/axiosInstance";
import Cookies from "js-cookie";
// import { v4 } from "uuid";
// import { imageDB } from "../configs/firebaseConfig";
// import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const AddAttributeProduct = ({ moveToNextStep }) => {
  const [images, setImages] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [colors, setColors] = useState([{ id: 1, value: "#4A5942" }]);
  const [loading, setLoading] = useState(false);

  const product_id = Cookies.get("product_added");

  const addColorPicker = () => {
    const newId = colors.length + 1;
    setColors([...colors, { id: newId, value: "#4A5942" }]);
  };

  const updateColor = (id, newColor) => {
    setColors((prevColors) =>
      prevColors.map((color) =>
        color.id === id ? { ...color, value: newColor.toHexString() } : color
      )
    );
  };

  const removeColorPicker = (id) => {
    setColors((prevColors) => prevColors.filter((color) => color.id !== id));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setUploadedImages(files);
    const imageFiles = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prevImages) => [...prevImages, ...imageFiles]);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const uploadImages = async (uploadedImages) => {
    const imageUrls = await Promise.all(
      uploadedImages.map(async (file) => {
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
        return uploadedImageUrl.secure_url;
      })
    );
    return imageUrls;
  };

  const onSubmitHandler = async (data) => {
    if (!data.size || data.size.length === 0) {
      toast.error("Please select size");
      return;
    }

    if (!colors || colors.length === 0) {
      toast.error("Please select color");
      return;
    }

    if (!images || images.length === 0) {
      toast.error("Please select image");
      return;
    }

    setLoading(true);

    try {
      const urls = await uploadImages(uploadedImages);
      const imagesReq = urls.map((url) =>
        axiosInstance.post(`/images`, {
          product_id: product_id,
          image_url: url,
        })
      );
      await Promise.all(imagesReq);

      const sizesReq = data.size.map((item) =>
        axiosInstance.post(`/sizes`, {
          product_id: product_id,
          size: item,
        })
      );
      await Promise.all(sizesReq);

      const colorsReq = colors.map((item) =>
        axiosInstance.post(`/colors`, {
          product_id: product_id,
          color_name: item.value,
          color_template: item.value,
        })
      );
      await Promise.all(colorsReq);

      setLoading(false);
      Cookies.remove("product_added");
      moveToNextStep();
    } catch (error) {
      console.log(error);
    }
  };

  return loading ? (
    <Spin />
  ) : (
    <form
      className="flex flex-col items-center w-[90%] gap-4 text-gray-800"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div className="w-full flex flex-col sm:flex-row items-center">
        <label className="w-full sm:w-1/3 mb-2 sm:mb-0">Sizes</label>
        <div className="w-full py-2 flex items-center justify-between">
          {["XS", "S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
            <div
              key={size}
              className="flex items-center justify-center gap-1 sm:gap-2"
            >
              <input
                type="checkbox"
                {...register("size")}
                value={size}
                className={`w-4 h-4 appearance-none cursor-pointer rounded border transition-colors 
            checked:bg-gradient-to-br checked:from-[#4A5942] checked:to-[#9d905a] bg-white bg-opacity-40 border-gray-400`}
              />
              <label>{size}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row items-center">
        <label className="w-full sm:w-1/3 mb-2 sm:mb-0">Colors</label>
        <div className="w-full py-2 flex items-center justify-between">
          {colors.map((colorObj, index) => (
            <div key={index}>
              <div className="w-full flex flex-wrap items-center justify-between gap-2">
                <ColorPicker
                  defaultValue={colorObj.value}
                  showText
                  onChange={(color) => updateColor(colorObj.id, color)}
                />
                <Button
                  type="primary"
                  className="ml-1"
                  danger
                  onClick={() => removeColorPicker(colorObj.id)}
                  shape="circle"
                  size="small"
                >
                  &times;
                </Button>
              </div>
            </div>
          ))}
          <Button type="primary" onClick={addColorPicker}>
            Add Color
          </Button>
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row items-center">
        <label className="w-full sm:w-1/3 mb-2 sm:mb-0">Image</label>
        <div className="w-full">
          <input
            type="file"
            multiple
            accept="image/*"
            className="w-full px-3 py-3 border border-gray-800 outline-none bg-white bg-opacity-40"
            {...register("image")}
            onChange={handleImageChange}
          />
          <div className="mt-4 flex gap-2 flex-wrap">
            {images.map((img, index) => (
              <div key={index} className="relative">
                <img
                  src={img.preview}
                  alt={`Preview ${index + 1}`}
                  className="w-20 h-20 sm:w-36 sm:h-36 object-cover border border-gray-300"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full px-2 py-1 sm:px-3 text-xs sm:text-base"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white px-10 py-[10px] text-base font-medium w-full hover:bg-gray-700"
      >
        ADD
      </button>
    </form>
  );
};

export default AddAttributeProduct;
