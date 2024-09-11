import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useState } from "react";
import Title from "./Title";

const slides = [
  {
    id: 1,
    imageUrl: "src/assets/frontend_assets/hero_img.png",
    title: "BBSUNSET",
  },
  {
    id: 2,
    imageUrl: "src/assets/frontend_assets/hero_img.png",
    title: "ITOLUSOO",
  },
  {
    id: 3,
    imageUrl: "src/assets/frontend_assets/hero_img.png",
    title: "CLAMC",
  },
  {
    id: 4,
    imageUrl: "src/assets/frontend_assets/hero_img.png",
    title: "BANGGER",
  },
  { id: 5, imageUrl: "src/assets/frontend_assets/hero_img.png", title: "WLEM" },
];

const PicksSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center p-8 my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"SUNSET'S"} text2={"TRENDINGS"} />
      </div>

      <div className="flex items-center justify-between w-full">
        <div
          onClick={handlePrevClick}
          className="inline-flex h-full p-4 rounded-full border cursor-pointer shadow-lg hover:bg-gray-100"
        >
          <LeftOutlined />
        </div>

        <div className="flex justify-center items-center w-4/5">
          <div className="w-full h-96 overflow-hidden shadow-lg transition-transform duration-500 ease-in-out">
            <img
              src={slides[currentIndex].imageUrl}
              alt={`Slide ${slides[currentIndex].id}`}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div
          onClick={handleNextClick}
          className="inline-flex h-full p-4 rounded-full border cursor-pointer shadow-lg hover:bg-gray-100"
        >
          <RightOutlined />
        </div>
      </div>

      <p className="mt-12 text-2xl font-extralight">
        {slides[currentIndex].title}
      </p>
    </div>
  );
};

export default PicksSlider;
