import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import { Modal, Spin } from "antd";
import { useForm } from "react-hook-form";
import axiosInstance from "../utils/axiosInstance";
import { assets } from "../assets/assets";

const Premium = ({ type, price, time }) => {
  const { currency, userInfo, loading, setRole } = useContext(ShopContext);

  const [openModal, setOpenModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const showModal = () => {
    setOpenModal(true);
  };

  if (loading) {
    return <Spin />;
  }

  const handleOk = async (data) => {
    try {
      const response = await axiosInstance.post("/designers", {
        user_id: userInfo.id,
        full_name: data.full_name,
        contact_info: data.contact_info,
        bio: data.bio,
      });
      setRole("Designer");
      toast.success(response.message);
      setOpenModal(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleCancel = () => {
    setOpenModal(false);
  };

  return (
    <div className="group w-72 h-96 hover:scale-110 hover:bg-[#2D320D] bg-[#D9D9D9] py-6 px-4 flex flex-col justify-between shadow-md">
      <div className="flex flex-col justify-start">
        <div className="items-center gap-2 flex">
          <div className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] rounded-full">
            <img
              src={assets.favicon_white}
              alt=""
              className="w-10 h-10 p-1 transition-all duration-300 ease-in-out"
            />
          </div>
          <p className="text-black group-hover:text-white font-bold text-base">
            {type}
          </p>
        </div>
        <div className="flex text-2xl font-bold mt-2 text-[#566145] group-hover:text-[#9B8E59]">
          {currency}
          {price}
        </div>
        <div className="flex text-sm my-2 group-hover:text-white">
          for {time} months
        </div>
        <hr className="w-full border-none h-[1px] bg-black group-hover:bg-white" />
      </div>
      {type === "Basic" || type === "Premium" ? (
        <>
          <button
            className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white text-sm font-bold px-8 py-4"
            onClick={showModal}
          >
            PURCHASE
          </button>
          <Modal
            open={openModal}
            title="Become to Designer"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <form
              className="flex flex-col items-center w-[90%] sm:max-w-[600px] m-auto mt-10 gap-4 text-gray-800"
              onSubmit={handleSubmit(handleOk)}
            >
              <input
                type="text"
                placeholder="Author Name"
                className="w-full px-3 py-2 border border-gray-800"
                required
                {...register("full_name")}
              />
              <input
                type="text"
                placeholder="Contact Info"
                className="w-full px-3 py-2 border border-gray-800"
                required
                {...register("contact_info")}
              />
              <input
                type="text"
                placeholder="Bio"
                className="w-full px-3 py-2 border border-gray-800"
                required
                {...register("bio")}
              />
              <button
                type="submit"
                className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white font-medium px-8 py-[10px] mt-2 w-full"
              >
                Submit
              </button>
            </form>
          </Modal>
        </>
      ) : (
        <button className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white text-sm font-bold px-8 py-4">
          PURCHASE
        </button>
      )}
    </div>
  );
};

export default Premium;
