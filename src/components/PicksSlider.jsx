import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import Title from "./Title";
import { Carousel } from "antd";

const slides = [
  {
    id: 1,
    imageUrl: "/frontend_assets/bg_9.png",
    title: "BBSUNSET",
  },
  {
    id: 2,
    imageUrl: "/frontend_assets/bg_10.png",
    title: "ITOLUSOO",
  },
  {
    id: 3,
    imageUrl: "/frontend_assets/bg_7.png",
    title: "CLAMC",
  },
  {
    id: 4,
    imageUrl: "/frontend_assets/bg_8.avif",
    title: "BANGGER",
  },
];

const contentStyle = {
  height: "160px",
  color: "#000000",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

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
      <div className="text-center py-8 text-6xl">
        <Title text1={"SUNSET'S"} text2={"PICKS"} />
      </div>

      <div className="flex items-center justify-center w-full">
        {/* <div
          onClick={handlePrevClick}
          className="inline-flex h-full p-4 rounded-full text-white bg-gradient-to-br from-[#4A5942] to-[#9d905a] cursor-pointer shadow-lg"
        >
          <LeftOutlined />
        </div>

        <div className="flex justify-center items-center w-4/5">
          <div className="w-full h-96 overflow-hidden shadow-lg transition-transform duration-500 ease-in-out">
            <img
              src={slides[currentIndex].imageUrl}
              alt={`Slide ${slides[currentIndex].id}`}
              className="object-fill w-full h-full"
            />
          </div>
        </div>

        <div
          onClick={handleNextClick}
          className="inline-flex h-full p-4 rounded-full text-white bg-gradient-to-br from-[#4A5942] to-[#9d905a] cursor-pointer shadow-lg"
        >
          <RightOutlined />
        </div> */}

        <Carousel autoplay className="w-96 sm:w-[1200px]">
          {slides.map((slide, index) => (
            <div key={index} className="w-full text-center relative">
              <div className="w-full h-[500px] overflow-hidden shadow-lg">
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="p-4 text-xl font-extralight absolute bottom-0 text-white bg-black opacity-40">
                {slide.title}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default PicksSlider;
