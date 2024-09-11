import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageFiles = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prevImages) => [...prevImages, ...imageFiles]);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const onSubmitHandler = (data) => {
    data.image = images;
    console.log(data);
    toast.success("Add new product successfully!");
  };

  return (
    <form
      className="flex flex-col items-center w-full gap-6 text-gray-800"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div className="w-full flex flex-col sm:flex-row items-center">
        <label className="w-full sm:w-1/3 mb-2 sm:mb-0">Product Name</label>
        <input
          type="text"
          placeholder="Product Name..."
          className="w-full px-3 py-2 border border-gray-800"
          required
          {...register("productName")}
        />
      </div>
      <div className="w-full flex flex-col sm:flex-row items-center">
        <label className="w-full sm:w-1/3 mb-2 sm:mb-0">Description</label>
        <textarea
          placeholder="Description..."
          className="w-full px-3 py-2 border border-gray-800"
          {...register("description")}
        />
      </div>
      <div className="w-full flex flex-col sm:flex-row items-center">
        <label className="w-full sm:w-1/3 mb-2 sm:mb-0">Price</label>
        <input
          type="text"
          placeholder="Price..."
          className="w-full px-3 py-2 border border-gray-800"
          required
          {...register("price")}
        />
      </div>
      <div className="w-full flex flex-col sm:flex-row items-center">
        <label className="w-full sm:w-1/3 mb-2 sm:mb-0">Category</label>
        <select
          className="w-full px-3 py-2 border border-gray-800"
          required
          {...register("category")}
        >
          <option value="" disabled>
            --Choose Category--
          </option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </select>
      </div>
      <div className="w-full flex flex-col sm:flex-row items-center">
        <label className="w-full sm:w-1/3 mb-2 sm:mb-0">Sub Category</label>
        <select
          className="w-full px-3 py-2 border border-gray-800"
          required
          {...register("subCategory")}
        >
          <option value="" disabled>
            --Choose Sub Category--
          </option>
          <option value="Topwear">Top wear</option>
          <option value="Bottomwear">Bottom wear</option>
          <option value="Winterwear">Winter wear</option>
        </select>
      </div>
      <div className="w-full flex flex-col sm:flex-row items-center">
        <label className="w-full sm:w-1/3 mb-2 sm:mb-0">Size</label>
        <div className="w-full px-3 py-2 flex items-center justify-between">
          {["XS", "S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
            <div
              key={size}
              className="flex items-center justify-center gap-1 sm:gap-2"
            >
              <input type="checkbox" {...register("size")} value={size} />
              <label>{size}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row items-center">
        <label className="w-full sm:w-1/3 mb-2 sm:mb-0">Image</label>
        <div className="w-full">
          <input
            type="file"
            multiple
            accept="image/*"
            className="w-full px-3 py-2 border border-gray-800"
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
        className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white px-10 py-2 text-base font-medium w-full hover:bg-gray-700"
      >
        ADD
      </button>
    </form>
  );
};

export default AddProduct;
